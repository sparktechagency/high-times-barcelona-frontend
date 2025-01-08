'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Input, InputNumber, Flex, Image, Space, Popconfirm, Switch, Row, Col, Divider, Tooltip, Upload } from 'antd';
import Title from 'antd/es/typography/Title';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

import { AiOutlineCheck } from 'react-icons/ai';
import Modal from '@/components/shared/Modal';
import {
      TClub,
      useCreateClubMutation,
      useDeleteClubMutation,
      useGetClubsQuery,
      useUpdateClubMutation,
} from '@/redux/features/club/clubApi';
import { toast } from 'react-toastify';
import { getImageUrl } from '@/utils/getImageUrl';

const ClubsManagement: React.FC = () => {
      const [createClub] = useCreateClubMutation();
      const [updateClub] = useUpdateClubMutation();
      const [deleteClub] = useDeleteClubMutation();
      const { data: allClubs, isFetching } = useGetClubsQuery([]);

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedClub, setSelectedClub] = useState<TClub | null>();
      const [form] = Form.useForm();

      useEffect(() => {
            if (!isModalOpen) {
                  setSelectedClub(null);
            }

            if (selectedClub) {
                  form.setFieldsValue(selectedClub);
            } else {
                  form.resetFields();
            }
      }, [selectedClub, isModalOpen, form]);

      const handleSubmit = async (values: any) => {
            if (selectedClub) {
                  try {
                        const formData = new FormData();
                        formData.append('clubImage', values.image.fileList[0].originFileObj);
                        delete values.image;
                        formData.append('data', JSON.stringify(values));
                        const updatedInfo = {
                              id: selectedClub._id,
                              data: formData,
                        };

                        const data = await updateClub(updatedInfo).unwrap();
                        if (data.success) {
                              toast.success(data.message);
                              setIsModalOpen(false);
                              setSelectedClub(null);
                              form.resetFields();
                        }
                  } catch (error: any) {
                        console.log(error);
                        toast.error(error?.data?.message);
                  }
            } else {
                  try {
                        const formData = new FormData();
                        formData.append('clubImage', values.image.fileList[0].originFileObj);
                        delete values.image;
                        formData.append('data', JSON.stringify(values));
                        const res = await createClub(formData).unwrap();
                        if (res.success) {
                              toast.success(res.message);
                              setIsModalOpen(false);
                              setSelectedClub(null);
                              form.resetFields();
                        }
                  } catch (error: any) {
                        console.log(error);
                        toast.error(error?.data?.message);
                  }
            }
      };

      const handleToggleClubStatus = async (id: string, status: boolean) => {
            console.log(id, status);
            try {
                  const formData = new FormData();
                  formData.append('data', JSON.stringify({ isApproved: status }));
                  const updatedInfo = {
                        id: id,
                        data: formData,
                  };

                  const data = await updateClub(updatedInfo).unwrap();
                  if (data.success) {
                        toast.success(data.message);
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };

      const handleDelete = async (id: string) => {
            try {
                  const data = await deleteClub({ id }).unwrap();
                  if (data.success) {
                        toast.success(data.message);
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };
      const columns = [
            {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                  render: (name: string, record: TClub) => (
                        <div className="flex items-center gap-2">
                              <Image
                                    className="size-[50px] rounded-full"
                                    src={getImageUrl(record.image)}
                                    alt="Ganja Leaf"
                                    width={50}
                                    height={50}
                              />
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
                  render: (_: any, record: TClub) => {
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
                                                onChange={(status) => handleToggleClubStatus(record._id, status)}
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
                                                onConfirm={() => handleDelete(record._id)}
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
      const body = (
            <Form
                  requiredMark={false}
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
                                    label="Latitude ( ex: 23.7935 )"
                                    name={['location', 'latitude']}
                                    rules={[{ required: true, message: 'Please enter the latitude' }]}
                              >
                                    <InputNumber min={-90} max={90} style={{ width: '100%' }} />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item
                                    label="Longitude ( ex: 90.437 )"
                                    name={['location', 'longitude']}
                                    rules={[{ required: true, message: 'Please enter the longitude' }]}
                              >
                                    <InputNumber min={-180} max={180} style={{ width: '100%' }} />
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
                                    rules={[{ required: true, message: 'Please input the opening hour' }]}
                              >
                                    <Input placeholder="08:00" />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item
                                    label="Closing Hour"
                                    name="closingHour"
                                    rules={[{ required: true, message: 'Please input the closing hour' }]}
                              >
                                    <Input placeholder="22:00" />
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
                  <Table pagination={false} dataSource={allClubs} loading={isFetching} columns={columns} bordered />
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
