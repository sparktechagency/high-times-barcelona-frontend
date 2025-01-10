'use client';
import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { useSendContactMutation } from '@/redux/features/contact/contactApi';
import { toast } from 'react-toastify';

const { TextArea } = Input;

const ContactUs: FC = () => {
      const [form] = Form.useForm();
      const [sendContact, { isLoading }] = useSendContactMutation();

      const onFinish = async (values: any) => {
            try {
                  const res = await sendContact(values).unwrap();
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
            <div className="container bg-[#033f1b]  w-full max-w-[792px] mx-auto text-white p-8 rounded-xl">
                  <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold mb-2">
                              <span className="text-secondary">Get In Touch</span> <span className="text-white">With Us.</span>
                        </h2>
                        <p>we'll get back to you as soon as possible.</p>
                  </div>

                  <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                        <Form.Item
                              label={<span className="text-white">Full Name</span>}
                              name="name"
                              rules={[{ required: true, message: 'Please enter your full name' }]}
                        >
                              <Input prefix={<FaUser className="text-gray-400" />} style={{ height: 48 }} placeholder="Enter Your Name" />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">E-Mail</span>}
                              name="email"
                              rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' },
                              ]}
                        >
                              <Input
                                    prefix={<MdOutlineEmail className="text-gray-400 text-xl" />}
                                    style={{ height: 48 }}
                                    placeholder="Enter Email Address"
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Phone Number</span>}
                              name="phone"
                              rules={[{ required: true, message: 'Please enter your phone number' }]}
                        >
                              <Input
                                    prefix={<FaPhoneAlt className="text-gray-400" />}
                                    style={{ height: 48 }}
                                    placeholder="Enter Phone number"
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Message</span>}
                              name="message"
                              rules={[{ required: true, message: 'Please enter your message' }]}
                        >
                              <TextArea
                                    style={{
                                          minHeight: 120,
                                          resize: 'none',
                                          paddingTop: 12,
                                    }}
                                    placeholder="Enter your Message"
                              />
                        </Form.Item>

                        <Form.Item>
                              <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{
                                          width: '100%',
                                          height: 48,
                                          backgroundColor: '#00863D',
                                          color: '#FFF',
                                          fontSize: 16,
                                          fontWeight: 600,
                                    }}
                              >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default ContactUs;
