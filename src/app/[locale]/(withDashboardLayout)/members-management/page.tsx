'use client';

import { TClub } from '@/redux/features/club/clubApi';
import { useDeleteMemberMutation, useGetMembersQuery } from '@/redux/features/member/memberApi';
import { getImageUrl } from '@/utils/getImageUrl';
import { Table, Button, Space, Popconfirm, Tooltip, Image } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MemberManagement: React.FC = () => {
      const [page, setPage] = React.useState(1);
      const [deleteMember] = useDeleteMemberMutation();
      const { data: membersData } = useGetMembersQuery([
            { name: 'page', value: page },
            { name: 'limit', value: 8 },
      ]);

      console.log(membersData);
      const handleDelete = async (id: string) => {
            try {
                  const res = await deleteMember(id).unwrap();
                  if (res.success) {
                        toast.success(res.message);
                  }
            } catch (error: any) {
                  toast.error(error?.data?.message);
            }
      };

      const columns = [
            {
                  title: 'Club Name',
                  dataIndex: 'club',
                  key: 'club',
                  render: (club: TClub) => {
                        return (
                              <div className="flex items-center gap-2">
                                    <Image
                                          style={{
                                                height: '50px',
                                                width: '50px',
                                                objectFit: 'cover',
                                                borderRadius: '50%',
                                          }}
                                          src={getImageUrl(club?.image)}
                                          alt=""
                                    />
                                    <p>{club?.name}</p>
                              </div>
                        );
                  },
            },
            {
                  title: 'Member Name',
                  dataIndex: 'name',
                  key: 'name',
                  render: (_: any, record: any) => (
                        <ul>
                              {Array.isArray(record?.name) &&
                                    record?.name?.map((name: string, index: number) => (
                                          <li key={index} className="text-[14px]">
                                                {index + 1}. {name}
                                          </li>
                                    ))}
                        </ul>
                  ),
            },

            {
                  title: 'Email',
                  dataIndex: 'email',
                  key: 'email',
            },
            {
                  title: 'Contact',
                  dataIndex: 'contact',
                  key: 'contact',
            },
            {
                  title: 'Number of Visitors',
                  dataIndex: 'numberOfVisitors',
                  key: 'numberOfVisitors',
                  render: (value: number) => (value === 5 ? '5+' : value),
            },
            {
                  title: 'Actions',
                  key: 'actions',
                  render: (_: any, record: any) => (
                        <Space size="middle">
                              <Tooltip title="Delete Member" overlayInnerStyle={{ backgroundColor: '#fff', color: '#ff4d4f' }}>
                                    <Popconfirm
                                          title="Are you sure you want to delete this member?"
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

      return (
            <div>
                  {/* Members Table */}
                  <Title level={3}>Club Members</Title>
                  <Table
                        pagination={{
                              pageSize: membersData?.meta?.limit,
                              total: membersData?.meta?.total,
                              onChange: (page) => setPage(page),
                        }}
                        dataSource={membersData?.result}
                        columns={columns}
                        bordered
                        rowKey="_id"
                  />
            </div>
      );
};

export default MemberManagement;
