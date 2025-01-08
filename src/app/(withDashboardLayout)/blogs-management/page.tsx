'use client';

import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Input, Space, Popconfirm, message, Tooltip, Tag, Row, Col, Divider, Upload, Image, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Modal from '@/components/shared/Modal';
import {
      TBlog,
      useCreateBlogMutation,
      useDeleteBlogMutation,
      useGetBlogsQuery,
      useUpdateBlogMutation,
} from '@/redux/features/blog/blogApi';
import { getImageUrl } from '@/utils/getImageUrl';
import { toast } from 'react-toastify';

const BlogsManagement: React.FC = () => {
      const [page, setPage] = useState(1);

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedBlog, setSelectedBlog] = useState<TBlog | null>(null);
      const [form] = Form.useForm();

      // Todo: Redux Integration
      const { data: blogData, isFetching } = useGetBlogsQuery([
            { name: 'page', value: page },
            { name: 'limit', value: 2 },
      ]);

      const [createBlog] = useCreateBlogMutation();
      const [updateBlog] = useUpdateBlogMutation();
      const [deleteBlog] = useDeleteBlogMutation();

      useEffect(() => {
            if (selectedBlog) {
                  form.setFieldsValue({
                        ...selectedBlog,
                        tags: selectedBlog.tags.join(', '),
                  });
            }
      }, [selectedBlog, form]);

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
            if (selectedBlog) {
                  try {
                        const formData = new FormData();
                        if (values?.image?.fileList?.[0]) {
                              formData.append('blogImage', values.image.fileList[0].originFileObj);
                        }
                        delete values.image;
                        formData.append('data', JSON.stringify(values));
                        const updatedInfo = {
                              id: selectedBlog._id,
                              data: formData,
                        };

                        const data = await updateBlog(updatedInfo).unwrap();
                        if (data.success) {
                              toast.success(data.message);
                              setIsModalOpen(false);
                              setSelectedBlog(null);
                              form.resetFields();
                        }
                  } catch (error: any) {
                        console.log(error);
                        toast.error(error?.data?.message);
                  }
            } else {
                  try {
                        const formData = new FormData();
                        formData.append('blogImage', values.image.fileList[0].originFileObj);
                        delete values.image;
                        formData.append('data', JSON.stringify(values));
                        const res = await createBlog(formData).unwrap();
                        if (res.success) {
                              toast.success(res.message);
                              setIsModalOpen(false);
                              setSelectedBlog(null);
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
                  title: 'Title',
                  dataIndex: 'title',
                  key: 'title',
                  render: (text: string, record: TBlog) => (
                        <div className="flex items-center gap-2">
                              <div className="">
                                    <Image
                                          className=""
                                          src={getImageUrl(record.image)}
                                          alt="Ganja Leaf"
                                          style={{
                                                height: 60,
                                                width: '100%',
                                                borderRadius: '100%',
                                          }}
                                    />
                              </div>
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
                              {tags?.map((tag) => (
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
                  render: (_: any, record: TBlog) => (
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
                              <Form.Item label="Tags" name="tags" rules={[{ required: true, message: 'Please enter at least one tag' }]}>
                                    <Select mode="tags" placeholder="Tags" />
                              </Form.Item>
                        </Col>
                        <Col span={12}>
                              <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please enter the blog image' }]}>
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
                  <Table
                        pagination={{
                              onChange: (page) => setPage(page),
                              current: page,
                              total: blogData?.meta.total,
                              pageSize: blogData?.meta.limit,
                        }}
                        dataSource={blogData?.result}
                        columns={columns}
                        loading={isFetching}
                        bordered
                  />

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
