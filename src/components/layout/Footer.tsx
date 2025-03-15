'use client';
import React from 'react';

import { Form, Input, Button, message } from 'antd';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import Logo from '@/assets/images/footer-logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useSubscribeMutation } from '@/redux/features/contact/contactApi';
import { toast } from 'react-toastify';

// Icons

interface SubscribeFormData {
      email: string;
}

const socialLinks = [
      { Icon: Facebook, href: '#' },
      { Icon: Twitter, href: '#' },
      { Icon: Instagram, href: '#' },
      { Icon: Linkedin, href: '#' },
];

const linkSections = [
      {
            title: 'Useful Link',
            links: [
                  { label: 'Cannabis Social Clubs', href: '/#cannabis-clubs' },
                  { label: 'Faq', href: '/faqs' },
                  { label: 'Blog', href: '/blogs' },
                  { label: 'Contact Us', href: '/contact-us' },
            ],
      },
      {
            title: 'Resources',
            links: [
                  { label: 'Privacy Policy', href: '/privacy-policy' },
                  { label: 'Terms & Conditions', href: '/terms-and-condition' },
                  { label: 'Weed Map', href: '/#weed-map' },
                  { label: 'Add Your Club', href: '/new-club' },
                  { label: 'Login', href: '/login' },
            ],
      },
];

export const Footer = () => {
      const [form] = Form.useForm<SubscribeFormData>();
      const [subscribe, { isLoading }] = useSubscribeMutation();

      const onFinish = async (values: SubscribeFormData) => {
            try {
                  const res = await subscribe(values).unwrap();
                  if (res.success) {
                        toast.success(res.message);
                        form.resetFields();
                  }
            } catch (error: any) {
                  console.log(error);
                  toast.error(error?.data?.message);
            }
      };

      return (
            <footer className="footer-bg md:max-h-[407px] overflow-hidden text-[#EFFBF0]">
                  <div className="container px-4 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                              {/* Logo and Description Section */}
                              <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                          <Link href={'/'}>
                                                <Image alt="Logo" src={Logo} width={131} height={30} />
                                          </Link>
                                    </div>
                                    <p className="">Helping you find and become a member of a Barcelona Cannabis club near you.</p>
                                    <div className="flex gap-4">
                                          {socialLinks.map(({ Icon, href }, index) => (
                                                <a
                                                      key={index}
                                                      href={href}
                                                      className="w-8 h-8 flex items-center justify-center rounded border border-white/20 hover:bg-white/10 transition-colors"
                                                >
                                                      <Icon className="w-4 h-4" />
                                                </a>
                                          ))}
                                    </div>
                              </div>

                              {/* Links Section */}
                              <div className="md:col-span-2">
                                    <div className="grid grid-cols-2 gap-8">
                                          {linkSections.map((section) => (
                                                <div key={section.title}>
                                                      <h3 className="font-medium mb-4">{section.title}</h3>
                                                      <ul className="space-y-2">
                                                            {section.links.map((link) => (
                                                                  <li key={link.label}>
                                                                        <a href={link.href} className=" transition-colors">
                                                                              {link.label}
                                                                        </a>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>
                                          ))}
                                    </div>
                              </div>

                              {/* Subscribe Form Section */}
                              <div>
                                    <div className="w-full">
                                          <h3 className="font-medium mb-4">Stay Update</h3>
                                          <p className=" mb-4">Get real time Update from us.</p>
                                          <Form form={form} name="subscribe" onFinish={onFinish} autoComplete="off" className="space-y-4">
                                                <Form.Item
                                                      name="email"
                                                      rules={[
                                                            { required: true, message: 'Please input your email!' },
                                                            { type: 'email', message: 'Please enter a valid email!' },
                                                      ]}
                                                >
                                                      <Input
                                                            style={{
                                                                  height: 42,
                                                            }}
                                                            placeholder="Email"
                                                            className=" bg-white/10 border border-white/20 placeholder-gray-400 rounded-lg"
                                                      />
                                                </Form.Item>

                                                <Form.Item>
                                                      <Button
                                                            style={{
                                                                  height: 42,
                                                            }}
                                                            type="primary"
                                                            htmlType="submit"
                                                            className="w-full  bg-yellow-400 hover:bg-yellow-500 text-black font-medium border-none"
                                                      >
                                                            {isLoading ? 'Subscribing...' : 'Subscribe'}
                                                      </Button>
                                                </Form.Item>
                                          </Form>
                                    </div>
                              </div>
                        </div>

                        {/* Copyright Section */}
                        <div className="mt-16 pt-8 border-t border-white/10 text-center">
                              <p>All right reserved Hightimes Barcelona {new Date().getFullYear()}</p>
                        </div>
                  </div>
            </footer>
      );
};
