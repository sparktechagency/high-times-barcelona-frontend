'use client';

import Provider from '@/provider/Provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout, theme } from 'antd';
import dynamic from 'next/dynamic';

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
      const DashboardHeader = dynamic(() => import('@/components/layout/DashboardHeader'), { ssr: false });
      const DashboardSidebar = dynamic(() => import('@/components/layout/DashboardSidebar'), { ssr: false });
      const {
            token: { borderRadiusLG },
      } = theme.useToken();

      return (
            <AntdRegistry>
                  <Layout
                        style={{
                              height: '100vh',
                        }}
                  >
                        <DashboardSidebar />
                        <Layout>
                              {/* header */}

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
