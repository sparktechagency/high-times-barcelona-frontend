'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Input, Space, Popconfirm, message, Tooltip, Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from '@/components/shared/Modal';

interface FAQ {
      id: string;
      question: string;
      answer: string;
}

const FaqsManagement: React.FC = () => {
      const [faqs, setFaqs] = useState<FAQ[]>([
            {
                  id: '1',
                  question: 'What is Zod?',
                  answer: 'Zod is a TypeScript-first schema validation library.',
            },
      ]);

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);
      const [form] = Form.useForm();

      // Note: Redux Integration

      useEffect(() => {
            if (selectedFaq) {
                  form.setFieldsValue(selectedFaq);
            }
      }, [selectedFaq, form]);

      const handleDelete = (id: string) => {
            setFaqs((prev) => prev.filter((faq) => faq.id !== id));
            message.success('FAQ deleted successfully.');
      };

      const handleSubmit = (values: any) => {
            if (selectedFaq) {
                  // Update existing FAQ
                  setFaqs((prev) => prev.map((faq) => (faq.id === selectedFaq.id ? { ...faq, ...values } : faq)));
                  message.success('FAQ updated successfully.');
            } else {
                  // Add new FAQ
                  const newFaq: FAQ = {
                        id: Math.random().toString(36).substr(2, 9), // Generate random ID
                        ...values,
                  };
                  setFaqs((prev) => [...prev, newFaq]);
                  message.success('FAQ added successfully.');
            }
            setIsModalOpen(false);
            setSelectedFaq(null);
            form.resetFields();
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
                  render: (_: any, record: FAQ) => (
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
                                    <Popconfirm title="Are you sure you want to delete this FAQ?" onConfirm={() => handleDelete(record.id)}>
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
                  <Table dataSource={faqs.map((faq) => ({ ...faq, key: faq.id }))} columns={columns} bordered />

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
