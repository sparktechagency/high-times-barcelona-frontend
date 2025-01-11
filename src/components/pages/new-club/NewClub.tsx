'use client';
import { Button, Checkbox, Form, Input, InputNumber, Upload } from 'antd';
import { FC } from 'react';
import { MdOutlineStore } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { BiEuro } from 'react-icons/bi';
import { TbRating18Plus } from 'react-icons/tb';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { useCreateClubMutation } from '@/redux/features/club/clubApi';
import { toast } from 'react-toastify';

const { TextArea } = Input;

const NewClub: FC = () => {
      const [form] = Form.useForm();
      const [createClub, { isLoading }] = useCreateClubMutation();

      const onFinish = async (values: any) => {
            try {
                  const formData = new FormData();
                  formData.append('clubImage', values.image.fileList[0].originFileObj);
                  delete values.image;

                  formData.append('data', JSON.stringify(values));
                  const res = await createClub(formData).unwrap();
                  if (res.success) {
                        toast.success(res.message);

                        form.resetFields();
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message);
            }
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
                        <Form.Item name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
                              <Upload maxCount={1} beforeUpload={() => false} accept="image/*" listType="picture" multiple={false}>
                                    <Button>Upload Image</Button>
                              </Upload>
                        </Form.Item>
                        <Form.Item
                              label={<span className="text-white">Name Of The Club</span>}
                              name="name"
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
                        <Form.Item
                              label={<span className="text-white">Description</span>}
                              name="description"
                              rules={[{ required: true, message: 'Please enter club description' }]}
                        >
                              <TextArea style={{ minHeight: 120, resize: 'none' }} placeholder="Describe about your club" />
                        </Form.Item>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <Form.Item
                                    label={<span className="text-white">Latitude (Ex: 23.0)</span>}
                                    name={['location', 'latitude']}
                                    rules={[{ required: true, message: 'Please enter latitude' }]}
                              >
                                    <InputNumber
                                          prefix={<MapPin className="text-gray-400 text-xl" />}
                                          style={{ height: 48, width: '100%' }}
                                          placeholder="Enter latitude"
                                    />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="text-white">Longitude (Ex: 90.0)</span>}
                                    name={['location', 'longitude']}
                                    rules={[{ required: true, message: 'Please enter longitude' }]}
                              >
                                    <InputNumber
                                          prefix={<MapPin className="text-gray-400 text-xl" />}
                                          style={{ height: 48, width: '100%' }}
                                          placeholder="Enter longitude"
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
                                    name="memberShipFee"
                                    rules={[{ required: true, message: 'Please enter membership fee' }]}
                              >
                                    <Input
                                          prefix={<BiEuro className="text-gray-400 text-xl" />}
                                          style={{ height: 48 }}
                                          placeholder="Enter Membership fee"
                                    />
                              </Form.Item>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <Form.Item
                                    label={<span className="text-white">Opening Hour</span>}
                                    name="openingHour"
                                    rules={[{ required: true, message: 'Please select the opening hour' }]}
                              >
                                    <Input placeholder="10:00" />
                              </Form.Item>

                              <Form.Item
                                    label={<span className="text-white">Closing Hour</span>}
                                    name="closingHour"
                                    rules={[{ required: true, message: 'Please select the closing hour' }]}
                              >
                                    <Input placeholder="22:00" />
                              </Form.Item>
                        </div>

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
                                    <Link href="/privacy-policy" className="underline text-wh mx-1">
                                          privacy policy
                                    </Link>
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
                                    {isLoading ? 'Submitting...' : '  Submit Your Club Information'}
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default NewClub;
