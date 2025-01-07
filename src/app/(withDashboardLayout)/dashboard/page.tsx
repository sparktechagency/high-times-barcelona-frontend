'use client';

import React, { useEffect, useState } from 'react';
import {
      Table,
      Button,
      Form,
      Input,
      InputNumber,
      message,
      Flex,
      Image,
      Space,
      Popconfirm,
      Switch,
      Row,
      Col,
      Divider,
      Select,
      TimePicker,
      Tooltip,
      Upload,
} from 'antd';
import Title from 'antd/es/typography/Title';
import ImageIcon from '@/assets/images/club-image.png';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import { AiOutlineCheck } from 'react-icons/ai';
import Modal from '@/components/shared/Modal';
interface Club {
      id: string;
      name: string;
      address: string;
      memberShipFee: number;
      rating: number;
      ageLimit: number;
      isApproved: boolean;
}

const ClubsManagement: React.FC = () => {
      const [clubs, setClubs] = useState<Club[]>([
            {
                  id: '6773c0ad1ff083666a7b9566',
                  name: 'Fitness Club',
                  address: '123 Main St, New York, NY',
                  memberShipFee: 50,
                  rating: 4.4,
                  ageLimit: 18,
                  isApproved: false,
            },
      ]);

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedClub, setSelectedClub] = useState<Club | null>(null);
      const [form] = Form.useForm();

      const handleAddClub = () => {};

      const handleApprove = (id: string, status: boolean) => {
            setClubs((prev) => prev.map((club) => (club.id === id ? { ...club, isApproved: status } : club)));
            message.success(`Club ${status ? 'approved' : 'disapproved'} successfully.`);
      };

      const handleDelete = (id: string) => {
            setClubs((prev) => prev.filter((club) => club.id !== id));
            message.success('Club deleted successfully.');
      };

      useEffect(() => {
            if (selectedClub) {
                  form.setFieldsValue(selectedClub);
            }
      }, [selectedClub, form]);

      const columns = [
            {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                  render: (name: string) => (
                        <div className="flex items-center gap-2">
                              <Image className="size-[50px] rounded-full" src={ImageIcon.src} alt="Ganja Leaf" width={50} height={50} />
                              <p>{name}</p>
                        </div>
                  ),
            },
            {
                  title: 'Address',
                  dataIndex: 'address',
                  key: 'address',
            },
            {
                  title: 'Membership Fee ($)',
                  dataIndex: 'memberShipFee',
                  key: 'memberShipFee',
            },
            {
                  title: 'Age Limit',
                  dataIndex: 'ageLimit',
                  key: 'ageLimit',
            },

            {
                  title: 'Approved',
                  dataIndex: 'isApproved',
                  key: 'isApproved',
                  render: (isApproved: boolean) => (isApproved ? 'Yes' : 'No'),
            },

            {
                  title: 'Actions',
                  key: 'action',
                  render: (_: any, record: Club) => {
                        return (
                              <Space size="small">
                                    <Tooltip
                                          overlayInnerStyle={{
                                                backgroundColor: '#fff',
                                                color: '#006830   ',
                                          }}
                                          title={record.isApproved ? 'Click to disapprove' : 'Click to approve'}
                                    >
                                          <Switch
                                                checkedChildren={<AiOutlineCheck size={20} color="#006830" />}
                                                defaultChecked={record.isApproved}
                                                onChange={(status) => handleApprove(record.id, status)}
                                          />
                                    </Tooltip>

                                    <Tooltip
                                          overlayInnerStyle={{
                                                backgroundColor: '#fff',
                                                color: '#006830   ',
                                          }}
                                          title="Edit Club"
                                    >
                                          <Button
                                                onClick={() => {
                                                      setSelectedClub(record);
                                                      setIsModalOpen(true);
                                                }}
                                                type="text"
                                          >
                                                <FaRegEdit color="#006830" size={20} />
                                          </Button>
                                    </Tooltip>

                                    <Tooltip
                                          overlayInnerStyle={{
                                                backgroundColor: '#fff',
                                                color: '#006830   ',
                                          }}
                                          title="Delete Club"
                                    >
                                          <Popconfirm
                                                title="Are you sure you want to delete this club?"
                                                onConfirm={() => handleDelete(record.id)}
                                          >
                                                <Button type="text" danger>
                                                      <FaTrashAlt size={20} />
                                                </Button>
                                          </Popconfirm>
                                    </Tooltip>
                              </Space>
                        );
                  },
            },
      ];

      const handleSubmit = (values: any) => {
            const newClub: Club = {
                  id: '6773c0ad1ff083666a7b9566',
                  name: values.name,
                  address: values.address,
                  memberShipFee: values.memberShipFee,
                  rating: 4.4,
                  ageLimit: values.ageLimit,
                  isApproved: false,
            };
            setClubs((prev) => [...prev, newClub]);
            setIsModalOpen(false);
            message.success('Club added successfully.');
      };

      const body = (
            <Form
                  className="h-[60vh] overflow-y-auto overflow-x-hidden custom-scrollbar"
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
            >
                  <Title level={5}>Club Details</Title>

                  <Row>
                        <Form.Item name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
                              <Upload maxCount={1} beforeUpload={() => false} accept="image/*" listType="picture" multiple={false}>
                                    <Button>Upload Image</Button>
                              </Upload>
                        </Form.Item>
                  </Row>
                  <Row gutter={[16, 16]}>
                        <Col span={12}>
                              <Form.Item label="Club Name" name="name" rules={[{ required: true, message: 'Please enter the club name' }]}>
                                    <Input />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter the address' }]}>
                                    <Input />
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                        <Col span={12}>
                              <Form.Item
                                    label="Membership Fee ($)"
                                    name="memberShipFee"
                                    rules={[{ required: true, message: 'Please enter the membership fee' }]}
                              >
                                    <InputNumber min={1} style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item
                                    label="Age Limit"
                                    name="ageLimit"
                                    rules={[{ required: true, message: 'Please enter the age limit' }]}
                              >
                                    <InputNumber min={1} style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                        <Col span={24}>
                              <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[{ required: true, message: 'Please enter a description' }]}
                              >
                                    <Input.TextArea rows={3} />
                              </Form.Item>
                        </Col>
                  </Row>

                  <Divider />
                  <Title level={5}>Location</Title>
                  <Row gutter={[16, 16]}>
                        <Col span={12}>
                              <Form.Item
                                    label="Longitude"
                                    name={['location', 'longitude']}
                                    rules={[{ required: true, message: 'Please enter the longitude' }]}
                              >
                                    <InputNumber min={-180} max={180} style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item
                                    label="Latitude"
                                    name={['location', 'latitude']}
                                    rules={[{ required: true, message: 'Please enter the latitude' }]}
                              >
                                    <InputNumber min={-90} max={90} style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                  </Row>

                  <Divider />
                  <Title level={5}>Operating Hours</Title>
                  <Row gutter={[16, 16]}>
                        <Col span={12}>
                              <Form.Item
                                    label="Opening Hour"
                                    name="openingHour"
                                    rules={[{ required: true, message: 'Please select the opening hour' }]}
                              >
                                    <TimePicker format="HH:mm" style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item
                                    label="Closing Hour"
                                    name="closingHour"
                                    rules={[{ required: true, message: 'Please select the closing hour' }]}
                              >
                                    <TimePicker format="HH:mm" style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                  </Row>

                  <Divider />

                  <Row gutter={[16, 16]}>
                        <Col span={24}>
                              <Form.Item
                                    label="Open Days (Sat-Fri)"
                                    name="openDay"
                                    rules={[{ required: true, message: 'Please select the open days' }]}
                              >
                                    <Input />
                              </Form.Item>
                        </Col>
                  </Row>

                  <Flex style={{ justifyContent: 'flex-end', gap: '10px', marginInline: '10px' }}>
                        <Button
                              onClick={() => {
                                    setIsModalOpen(false);
                                    setSelectedClub(null);
                              }}
                        >
                              Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                              {selectedClub ? 'Update Club' : 'Add Club'}
                        </Button>
                  </Flex>
            </Form>
      );
      return (
            <div>
                  <Flex style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <Title level={4}>Clubs Management</Title>
                        <Button type="primary" onClick={() => setIsModalOpen(true)}>
                              Add Club
                        </Button>
                  </Flex>
                  <Table dataSource={clubs.map((club) => ({ ...club, key: club.id }))} columns={columns} bordered />
                  <Modal
                        width={800}
                        title={selectedClub ? 'Update Club' : 'Add Club'}
                        open={isModalOpen}
                        setOpen={setIsModalOpen}
                        body={body}
                  />
            </div>
      );
};

export default ClubsManagement;
