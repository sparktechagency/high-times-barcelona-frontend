'use client';

import { Form, Input, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useLoginUserMutation } from '@/redux/features/auth/authApi';
import { decodedUser } from '@/utils/decodeUser';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/auth/authSlice';
import { setAccessToken } from '@/utils/tokenManagement';
import { toast } from 'react-toastify';

const Login = () => {
      const router = useRouter();
      const [loginUser, { isLoading }] = useLoginUserMutation();
      const dispatch = useAppDispatch();

      const onFinish = async (values: any) => {
            // console.log('Success:', values);
            try {
                  const res = await loginUser(values).unwrap();
                  if (res.success) {
                        const accessToken = res.data.accessToken;
                        const user = decodedUser(accessToken);
                        dispatch(setUser({ user, token: accessToken }));
                        setAccessToken(accessToken);

                        toast.success(res.message);
                        router.push('/dashboard');
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };

      return (
            <div className="flex justify-center items-center min-h-screen bg-[#eeeeee]">
                  <div className="w-full max-w-xl shadow-md bg-white rounded-xl p-8">
                        {/* Heading */}
                        <h2 className="text-center text-2xl font-semibold mb-4 text-[#333333]">Log in to your account</h2>
                        <p className="text-center text-[#5C5C5C] mb-6">Please enter your email and password to continue</p>

                        {/* Login Form */}
                        <Form name="login" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} requiredMark={false}>
                              {[
                                    // Field definitions
                                    {
                                          label: 'Email',
                                          name: 'email',
                                          placeholder: 'apusutradhar77@gmail.com',
                                          rules: [{ required: true, message: 'Please input your email!' }],
                                          type: 'text',
                                    },
                                    {
                                          label: 'Password',
                                          name: 'password',
                                          placeholder: '******',
                                          rules: [{ required: true, message: 'Please input your password!' }],
                                          type: 'password',
                                    },
                              ].map(({ label, name, placeholder, rules, type }, index) => (
                                    <Form.Item
                                          key={index}
                                          label={<p className="text-[#636363] text-lg">{label}</p>}
                                          name={name}
                                          rules={rules}
                                    >
                                          {type === 'password' ? (
                                                <Input.Password
                                                      placeholder={placeholder}
                                                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                      style={{ height: 42, borderRadius: 90 }}
                                                      size="large"
                                                />
                                          ) : (
                                                <Input placeholder={placeholder} style={{ height: 42, borderRadius: 90 }} size="large" />
                                          )}
                                    </Form.Item>
                              ))}

                              {/* Remember and Forgot Password */}
                              {/* <div className="flex justify-between items-center mb-4">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                          <Checkbox style={{ color: '#5D5F61' }}>Remember Password</Checkbox>
                                    </Form.Item>
                                    <a href="/forgot-password" className="text-[#5D5F61]">
                                          Forgot Password?
                                    </a>
                              </div> */}

                              {/* Submit Button */}
                              <Form.Item>
                                    <Button
                                          type="primary"
                                          htmlType="submit"
                                          shape="round"
                                          style={{
                                                width: '100%',
                                                height: 42,
                                                backgroundColor: '#006830',
                                                textTransform: 'uppercase',
                                                color: '#fff',
                                          }}
                                    >
                                          {isLoading ? 'Loading...' : 'Log In'}
                                    </Button>
                              </Form.Item>
                        </Form>
                  </div>
            </div>
      );
};

export default Login;
