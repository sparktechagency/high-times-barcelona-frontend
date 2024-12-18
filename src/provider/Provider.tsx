import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import React, { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
      return (
            <div>
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
                                    Form: {
                                          marginLG: 12,
                                          fontFamily: 'Poppins, sans-serif',
                                    },

                                    Radio: {},
                              },
                        }}
                  >
                        <AntdRegistry>{children}</AntdRegistry>
                  </ConfigProvider>
            </div>
      );
};

export default Provider;
