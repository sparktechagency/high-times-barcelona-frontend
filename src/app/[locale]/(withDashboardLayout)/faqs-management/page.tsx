'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Input, Space, Popconfirm, message, Tooltip, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from '@/components/shared/Modal';
import { TFaq, useCreateFaqMutation, useDeleteFaqMutation, useGetFaqsQuery, useUpdateFaqMutation } from '@/redux/features/faq/faqApi';
import { toast } from 'react-toastify';

const FaqsManagement: React.FC = () => {
      const [page, setPage] = useState(1);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedFaq, setSelectedFaq] = useState<TFaq | null>(null);
      const [form] = Form.useForm();

      // Note: Redux Integration
      const { data: faqData } = useGetFaqsQuery([
            { name: 'page', value: page },
            { name: 'limit', value: 8 },
      ]);
      const [createBlog] = useCreateFaqMutation();
      const [updateBlog] = useUpdateFaqMutation();
      const [deleteBlog] = useDeleteFaqMutation();

      useEffect(() => {
            if (!isModalOpen) {
                  setSelectedFaq(null);
            }
            if (selectedFaq) {
                  form.setFieldsValue(selectedFaq);
            } else {
                  form.resetFields();
            }
      }, [selectedFaq, form, isModalOpen]);

      const handleDelete = async (id: string) => {
            try {
                  const res = await deleteBlog(id).unwrap();
                  if (res.success) {
                        toast.success(res.message);
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };

      const handleSubmit = async (values: any) => {
            console.log('Form values:', values.image);
            if (selectedFaq) {
                  try {
                        const updatedInfo = {
                              id: selectedFaq._id,
                              data: values,
                        };

                        const data = await updateBlog(updatedInfo).unwrap();
                        if (data.success) {
                              toast.success(data.message);
                              setIsModalOpen(false);
                              setSelectedFaq(null);
                              form.resetFields();
                        }
                  } catch (error: any) {
                        console.log(error);
                        toast.error(error?.data?.message);
                  }
            } else {
                  try {
                        const res = await createBlog(values).unwrap();
                        if (res.success) {
                              toast.success(res.message);
                              setIsModalOpen(false);
                              setSelectedFaq(null);
                              form.resetFields();
                        }
                  } catch (error: any) {
                        console.log(error);
                        toast.error(error?.data?.message);
                  }
            }
      };

      const columns = [
            {
                  title: 'Question',
                  dataIndex: 'question',
                  key: 'question',
            },
            {
                  title: 'Answer',
                  dataIndex: 'answer',
                  key: 'answer',
                  ellipsis: true, // Truncate long answers
            },
            {
                  title: 'Actions',
                  key: 'actions',
                  render: (_: any, record: TFaq) => (
                        <Space size="middle">
                              <Tooltip title="Edit FAQ" overlayInnerStyle={{ backgroundColor: '#fff', color: '#006830' }}>
                                    <Button
                                          type="text"
                                          onClick={() => {
                                                setSelectedFaq(record);
                                                setIsModalOpen(true);
                                          }}
                                    >
                                          <FaRegEdit color="#006830" size={20} />
                                    </Button>
                              </Tooltip>
                              <Tooltip title="Delete FAQ" overlayInnerStyle={{ backgroundColor: '#fff', color: '#ff4d4f' }}>
                                    <Popconfirm
                                          title="Are you sure you want to delete this FAQ?"
                                          onConfirm={() => handleDelete(record._id)}
                                    >
                                          <Button type="text" danger>
                                                <FaTrashAlt size={20} />
                                          </Button>
                                    </Popconfirm>
                              </Tooltip>
                        </Space>
                  ),
            },
      ];

      const body = (
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Row gutter={[16, 16]}>
                        <Col span={24}>
                              <Form.Item
                                    label="Question"
                                    name="question"
                                    rules={[{ required: true, message: 'Please enter the question' }]}
                              >
                                    <Input />
                              </Form.Item>
                        </Col>
                        <Col span={24}>
                              <Form.Item label="Answer" name="answer" rules={[{ required: true, message: 'Please enter the answer' }]}>
                                    <Input.TextArea rows={4} />
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                              <Button
                                    onClick={() => {
                                          setIsModalOpen(false);
                                          setSelectedFaq(null);
                                          form.resetFields();
                                    }}
                              >
                                    Cancel
                              </Button>
                              <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
                                    {selectedFaq ? 'Update FAQ' : 'Add FAQ'}
                              </Button>
                        </Col>
                  </Row>
            </Form>
      );

      return (
            <div>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <Title level={4}>FAQs Management</Title>
                        <Button type="primary" onClick={() => setIsModalOpen(true)}>
                              Add FAQ
                        </Button>
                  </div>

                  {/* FAQs Table */}
                  <Table
                        pagination={{
                              pageSize: faqData?.meta.limit,
                              total: faqData?.meta.total,
                              onChange: (page) => {
                                    setPage(page);
                              },
                        }}
                        dataSource={faqData?.result}
                        columns={columns}
                        bordered
                  />

                  {/* Custom Modal */}
                  <Modal
                        width={600}
                        title={selectedFaq ? 'Update FAQ' : 'Add FAQ'}
                        open={isModalOpen}
                        setOpen={setIsModalOpen}
                        body={body}
                  />
            </div>
      );
};

export default FaqsManagement;
