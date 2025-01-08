'use client';
import ReduxProvider from '@/redux/lib/ReduxProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import React, { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
      return (
            <ReduxProvider>
                  <ConfigProvider
                        theme={{
                              token: {
                                    colorPrimary: '#FFC61D',
                                    colorTextLightSolid: '#000000',

                                    fontSize: 16,
                              },
                              components: {
                                    Button: {
                                          controlHeight: 42,

                                          paddingInline: 24,
                                    },
                                    Input: {
                                          controlHeight: 42,

                                          paddingInline: 24,
                                    },

                                    InputNumber: {
                                          controlHeight: 42,
                                    },
                                    Form: {
                                          marginLG: 12,
                                          fontFamily: 'Poppins, sans-serif',
                                    },

                                    Radio: {},
                                    Table: {
                                          headerBg: '#006830',
                                          headerColor: '#fff',
                                    },
                                    DatePicker: {
                                          controlHeight: 42,
                                    },
                                    Select: {
                                          controlHeight: 42,
                                    },
                                    Divider: {
                                          margin: -20,
                                          padding: -110,
                                    },
                                    Tooltip: {
                                          colorTextLightSolid: '#000000',
                                          colorBgContainer: '#fff',
                                    },
                              },
                        }}
                  >
                        <AntdRegistry>{children}</AntdRegistry>
                  </ConfigProvider>
            </ReduxProvider>
      );
};

export default Provider;
