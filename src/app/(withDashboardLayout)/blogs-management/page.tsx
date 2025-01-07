'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Input, Space, Popconfirm, message, Tooltip, Tag, Row, Col, Divider, Upload, Image, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from '@/components/shared/Modal';
import ImageIcon from '@/assets/images/club-image.png';
interface Blog {
      id: string;
      title: string;
      description: string;
      image: string;
      tags: string[];
      createdAt: string;
      updatedAt: string;
}

const BlogsManagement: React.FC = () => {
      const [blogs, setBlogs] = useState<Blog[]>([
            {
                  id: '677387f93fecb0cfd6278ff6',
                  title: 'Exploring the Future of Backend Development',
                  description:
                        'In this blog, we explore the latest trends in backend development, focusing on performance optimization, microservices, and cloud-native technologies.',
                  image: '/blogs/4-1735625269366.jpg',
                  tags: ['Backend', 'Development'],
                  createdAt: '2024-12-31T05:58:17.237Z',
                  updatedAt: '2024-12-31T06:07:49.369Z',
            },
      ]);

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
      const [form] = Form.useForm();

      useEffect(() => {
            if (selectedBlog) {
                  form.setFieldsValue({
                        ...selectedBlog,
                        tags: selectedBlog.tags.join(', '),
                  });
            }
      }, [selectedBlog, form]);

      const handleDelete = (id: string) => {
            setBlogs((prev) => prev.filter((blog) => blog.id !== id));
            message.success('Blog deleted successfully.');
      };

      const handleSubmit = (values: any) => {
            console.log('Form values:', values);
            setIsModalOpen(false);
            setSelectedBlog(null);
            form.resetFields();
      };

      const columns = [
            {
                  title: 'Title',
                  dataIndex: 'title',
                  key: 'title',
                  render: (text: string) => (
                        <div className="flex items-end gap-2">
                              <Image className="size-[50px] rounded-full" src={ImageIcon.src} alt="Ganja Leaf" width={50} height={50} />
                              <p>{text}</p>
                        </div>
                  ),
            },
            {
                  title: 'Description',
                  dataIndex: 'description',
                  key: 'description',
                  ellipsis: true,
            },
            {
                  title: 'Tags',
                  dataIndex: 'tags',
                  key: 'tags',
                  render: (tags: string[]) => (
                        <>
                              {tags.map((tag) => (
                                    <Tag key={tag} color="blue">
                                          {tag}
                                    </Tag>
                              ))}
                        </>
                  ),
            },
            {
                  title: 'Created At',
                  dataIndex: 'createdAt',
                  key: 'createdAt',
                  render: (date: string) => new Date(date).toLocaleDateString(),
            },
            {
                  title: 'Actions',
                  key: 'actions',
                  render: (_: any, record: Blog) => (
                        <Space size="middle">
                              <Tooltip title="Edit Blog" overlayInnerStyle={{ backgroundColor: '#fff', color: '#006830' }}>
                                    <Button
                                          type="text"
                                          onClick={() => {
                                                setSelectedBlog(record);
                                                setIsModalOpen(true);
                                          }}
                                    >
                                          <FaRegEdit color="#006830" size={20} />
                                    </Button>
                              </Tooltip>
                              <Tooltip title="Delete Blog" overlayInnerStyle={{ backgroundColor: '#fff', color: '#006830' }}>
                                    <Popconfirm
                                          title="Are you sure you want to delete this blog?"
                                          onConfirm={() => handleDelete(record.id)}
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
            <Form className="" form={form} layout="vertical" onFinish={handleSubmit}>
                  <Title level={5}>Blog Details</Title>
                  <Row gutter={[16, 16]}>
                        <Col span={24}>
                              <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the blog title' }]}>
                                    <Input />
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                        <Col span={24}>
                              <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[{ required: true, message: 'Please enter the blog description' }]}
                              >
                                    <Input.TextArea rows={4} />
                              </Form.Item>
                        </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                        <Col span={12}>
                              <Form.Item
                                    label="Tags (comma-separated)"
                                    name="tags"
                                    rules={[{ required: true, message: 'Please enter at least one tag' }]}
                              >
                                    <Select mode="tags" placeholder="Tags" />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item
                                    label="Image URL"
                                    name="image"
                                    rules={[{ required: true, message: 'Please enter the blog image URL' }]}
                              >
                                    <Upload maxCount={1}>
                                          <Button>Upload Image</Button>
                                    </Upload>
                              </Form.Item>
                        </Col>
                  </Row>
                  <Divider />
                  <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                              <Button
                                    onClick={() => {
                                          setIsModalOpen(false);
                                          setSelectedBlog(null);
                                    }}
                              >
                                    Cancel
                              </Button>
                              <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
                                    {selectedBlog ? 'Update Blog' : 'Add Blog'}
                              </Button>
                        </Col>
                  </Row>
            </Form>
      );

      return (
            <div>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <Title level={4}>Blogs Management</Title>
                        <Button type="primary" onClick={() => setIsModalOpen(true)}>
                              Add Blog
                        </Button>
                  </div>

                  {/* Blogs Table */}
                  <Table dataSource={blogs.map((blog) => ({ ...blog, key: blog.id }))} columns={columns} bordered />

                  {/* Custom Modal */}
                  <Modal
                        width={800}
                        title={selectedBlog ? 'Update Blog' : 'Add Blog'}
                        open={isModalOpen}
                        setOpen={setIsModalOpen}
                        body={body}
                  />
            </div>
      );
};

export default BlogsManagement;
