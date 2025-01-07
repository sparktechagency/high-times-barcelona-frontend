'use client';
import dynamic from 'next/dynamic';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout, Skeleton, theme } from 'antd';
import { useState } from 'react';

const { Content } = Layout;

const DashboardHeader = dynamic(() => import('@/components/layout/DashboardHeader'), {
      ssr: false,
});

const DashboardSidebar = dynamic(() => import('@/components/layout/DashboardSidebar'), {
      ssr: false,
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
      const {
            token: { borderRadiusLG },
      } = theme.useToken();
      // const [openKeys, setOpenKeys] = useState<string[]>([]);

      return (
            <AntdRegistry>
                  <Layout
                        style={{
                              height: '100vh',
                        }}
                  >
                        <DashboardSidebar />
                        <Layout>
                              <DashboardHeader />
                              <Content style={{ margin: 20 }}>
                                    <div
                                          style={{
                                                padding: 0,
                                                minHeight: '50vh',
                                                width: '100%',
                                                background: '#F6F6F6',
                                                borderRadius: borderRadiusLG,
                                          }}
                                    >
                                          {children}
                                    </div>
                              </Content>
                        </Layout>
                  </Layout>
            </AntdRegistry>
      );
};

export default DashboardLayout;
