'use client';
import { Button, Checkbox, Form, Input } from 'antd';
import { FC } from 'react';
import { MdOutlineCall, MdOutlineStore } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { BiDollar, BiEuro } from 'react-icons/bi';
import { MdOutlineDescription } from 'react-icons/md';
import { TbRating18Plus } from 'react-icons/tb';

const { TextArea } = Input;

const NewClub: FC = () => {
      const [form] = Form.useForm();

      const onFinish = (values: any) => {
            console.log('Form values:', values);
      };

      return (
            <div className="container bg-[#033f1b] my-20 w-full max-w-[792px] mx-auto text-white p-8 rounded-xl">
                  <div className="mb-8 text-center">
                        <h2 className="text-3xl mb-2">
                              Add Your <span className="text-secondary font-bold ">Social Club</span>
                        </h2>
                        <p>To add your social club, Please complete the form provided below</p>
                  </div>

                  <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                        <Form.Item
                              label={<span className="text-white">Name Of The Club</span>}
                              name="clubName"
                              rules={[{ required: true, message: 'Please enter club name' }]}
                        >
                              <Input
                                    prefix={<MdOutlineStore className="text-gray-400 text-xl" />}
                                    style={{ height: 48 }}
                                    placeholder="Name of Your Social Club"
                              />
                        </Form.Item>

                        <Form.Item
                              label={<span className="text-white">Address</span>}
                              name="address"
                              rules={[{ required: true, message: 'Please enter club address' }]}
                        >
                              <Input
                                    prefix={<FaLocationDot className="text-gray-400 text-xl" />}
                                    style={{ height: 48 }}
                                    placeholder="Club Address"
                              />
                        </Form.Item>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <Form.Item
                                    label={<span className="text-white">Email Address</span>}
                                    name="email"
                                    rules={[
                                          { required: true, message: 'Please enter email' },
                                          { type: 'email', message: 'Please enter a valid email' },
                                    ]}
                              >
                                    <Input
                                          prefix={<MdOutlineEmail className="text-gray-400 text-xl" />}
                                          style={{ height: 48 }}
                                          placeholder="Email Address"
                                    />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="text-white">Phone Number</span>}
                                    name="phone"
                                    rules={[{ required: true, message: 'Please enter phone number' }]}
                              >
                                    <Input
                                          prefix={<MdOutlineCall className="text-gray-400 text-xl" />}
                                          style={{ height: 48 }}
                                          placeholder="Enter phone number"
                                    />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="text-white">Age Limit</span>}
                                    name="ageLimit"
                                    rules={[{ required: true, message: 'Please enter age limit' }]}
                              >
                                    <Input
                                          prefix={<TbRating18Plus className="text-gray-400 text-xl" />}
                                          style={{ height: 48 }}
                                          placeholder="Enter Age Limit"
                                    />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="text-white">Membership Fee</span>}
                                    name="membershipFee"
                                    rules={[{ required: true, message: 'Please enter membership fee' }]}
                              >
                                    <Input
                                          prefix={<BiEuro className="text-gray-400 text-xl" />}
                                          style={{ height: 48 }}
                                          placeholder="Enter Membership fee"
                                    />
                              </Form.Item>
                        </div>

                        <Form.Item
                              label={<span className="text-white">Description</span>}
                              name="description"
                              rules={[{ required: true, message: 'Please enter club description' }]}
                        >
                              <TextArea style={{ minHeight: 120, resize: 'none' }} placeholder="Describe about your club" />
                        </Form.Item>

                        <Form.Item
                              name="agreement"
                              valuePropName="checked"
                              rules={[
                                    {
                                          validator: (_, value) =>
                                                value
                                                      ? Promise.resolve()
                                                      : Promise.reject(new Error('Please accept the terms and conditions')),
                                    },
                              ]}
                        >
                              <Checkbox
                                    style={{
                                          color: '#FFF',
                                    }}
                              >
                                    Please read our
                                    <a href="#" className="underline text-wh mx-1">
                                          privacy policy
                                    </a>
                                    and check the box to confirm your agreement before submitting your club details.
                              </Checkbox>
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
                                    Submit Your Club Information
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default NewClub;
