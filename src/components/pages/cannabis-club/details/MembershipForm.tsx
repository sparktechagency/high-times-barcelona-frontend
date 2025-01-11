'use client';
import { useCreateClubMemberMutation } from '@/redux/features/club/clubApi';
import { Button, DatePicker, Form, Input, Radio } from 'antd';
import { FC } from 'react';
import { toast } from 'react-toastify';

const MembershipForm: FC<{ clubId: string }> = ({ clubId }) => {
      const [createMembership, { isLoading }] = useCreateClubMemberMutation();
      const [form] = Form.useForm();

      const onFinish = async (values: any) => {
            try {
                  const res = await createMembership({
                        ...values,
                        numberOfVisitors: Number(values.numberOfVisitors),
                        club: clubId,
                  }).unwrap();

                  if (res.success) {
                        toast.success(res.message);
                        form.resetFields();
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };

      return (
            <div className="bg-[#033f1b] text-white p-8 rounded-xl">
                  <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">
                              <span className="text-[#FFE600]">Become A</span> Member
                        </h2>
                        <p>Complete the form below to become a valued member.</p>
                  </div>

                  <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                        <Form.Item
                              label={<span className="text-white">Date</span>}
                              name="date"
                              rules={[{ required: true, message: 'Please select a date' }]}
                        >
                              <DatePicker
                                    style={{
                                          height: 48,
                                    }}
                                    className="w-full"
                                    placeholder="Select a date"
                                    format="YYYY-MM-DD"
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Email</span>}
                              name="email"
                              rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' },
                              ]}
                        >
                              <Input
                                    style={{
                                          height: 48,
                                    }}
                                    placeholder="Enter your email"
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Contact</span>}
                              name="contact"
                              rules={[{ required: true, message: 'Please enter your contact number' }]}
                        >
                              <Input
                                    style={{
                                          height: 48,
                                    }}
                                    placeholder="Enter mobile number"
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Number Of Visitor</span>}
                              name="numberOfVisitors"
                              rules={[{ required: true, message: 'Please select number of visitors' }]}
                        >
                              <Radio.Group
                                    size="large"
                                    style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: 24,
                                          justifyContent: 'center',
                                          borderRadius: 2,
                                    }}
                              >
                                    <Radio.Button value="1" style={{ height: 44, fontSize: 16, borderRadius: 2, paddingInline: 20 }}>
                                          1
                                    </Radio.Button>
                                    <Radio.Button value="2" style={{ height: 44, fontSize: 16, borderRadius: 2, paddingInline: 20 }}>
                                          2
                                    </Radio.Button>
                                    <Radio.Button value="3" style={{ height: 44, fontSize: 16, borderRadius: 2, paddingInline: 20 }}>
                                          3
                                    </Radio.Button>
                                    <Radio.Button value="4" style={{ height: 44, fontSize: 16, paddingInline: 20 }}>
                                          4
                                    </Radio.Button>
                                    <Radio.Button value="5" style={{ height: 44, fontSize: 16, borderRadius: 2, paddingInline: 20 }}>
                                          5+
                                    </Radio.Button>
                              </Radio.Group>
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Full Name</span>}
                              name="name"
                              rules={[{ required: true, message: 'Please enter your full name' }]}
                        >
                              <Input style={{ height: 48 }} placeholder="Enter your full Name" />
                        </Form.Item>

                        <Form.Item>
                              <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: '100%', height: 48, backgroundColor: '#00863D', color: '#FFF' }}
                              >
                                    {isLoading ? 'Applying For Membership...' : 'Apply For Membership'}
                              </Button>
                        </Form.Item>
                  </Form>

                  <p className="text-sm text-center mt-4">
                        Please note that joining the club is not guaranteed for everyone. The club's team will make the final decision and
                        can refuse membership without giving a reason.
                  </p>
            </div>
      );
};

export default MembershipForm;
