'use client';
import { useGetFaqsQuery } from '@/redux/features/faq/faqApi';
import { Collapse, Pagination } from 'antd';
import { useState } from 'react';
import { CgChevronDown } from 'react-icons/cg';

const Faq = () => {
      const [page, setPage] = useState(1);
      const {
            data: faqsData,
            isLoading,
            error,
      } = useGetFaqsQuery([
            { name: 'page', value: page },
            { name: 'limit', value: 6 },
      ]);

      if (isLoading) {
            return (
                  <section className="py-20">
                        <div className="container">
                              <div className="flex flex-col items-center mb-16">
                                    <h3 className="text-4xl md:text-5xl font-medium">
                                          Frequently Asked <span className="text-[#00A651]">Questions</span>
                                    </h3>
                              </div>
                              <div className="text-center">
                                    <p>Loading FAQs...</p>
                              </div>
                        </div>
                  </section>
            );
      }

      if (error) {
            return (
                  <section className="py-20">
                        <div className="container">
                              <div className="flex flex-col items-center mb-16">
                                    <h3 className="text-4xl md:text-5xl font-medium">
                                          Frequently Asked <span className="text-[#00A651]">Questions</span>
                                    </h3>
                              </div>
                              <div className="text-center">
                                    <p>Failed to load FAQs. Please try again later.</p>
                              </div>
                        </div>
                  </section>
            );
      }

      const faqs = faqsData?.result || [];

      const panelStyle = {
            marginBottom: 15,
            background: 'transparent',
            borderRadius: '20px',
            border: '1px solid #00863D',
            padding: '4px',
            fontSize: '14px',
      };

      const getItems = () =>
            faqs.map((faq) => ({
                  key: faq._id,
                  label: <h3 className="text-lg font-medium">{faq.question}</h3>,
                  children: <p className="text-sm text-[#414141]">{faq.answer}</p>,
                  style: panelStyle,
            }));

      return (
            <section className="py-20 min-h-screen">
                  <div className="container">
                        <div className="flex flex-col items-center mb-16">
                              <h3 className="text-4xl md:text-5xl font-medium">
                                    Frequently Asked <span className="text-[#00A651]">Questions</span>
                              </h3>
                        </div>

                        <div className="max-w-[792px] mx-auto">
                              <div>
                                    <Collapse
                                          style={{
                                                backgroundColor: 'transparent',
                                          }}
                                          defaultActiveKey={['1']}
                                          bordered={false}
                                          items={getItems()}
                                          expandIconPosition="end"
                                          expandIcon={() => <CgChevronDown size={24} color="#00863D" />}
                                          size="large"
                                    />
                              </div>
                        </div>
                        <div className="flex justify-center my-2">
                              <Pagination
                                    defaultCurrent={1}
                                    total={faqsData?.meta.total}
                                    pageSize={faqsData?.meta.limit}
                                    onChange={(page) => setPage(page)}
                                    showSizeChanger={false}
                              />
                        </div>
                  </div>
            </section>
      );
};

export default Faq;
