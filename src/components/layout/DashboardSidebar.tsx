'use client';
import { ConfigProvider, Layout, Menu, Modal } from 'antd';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { ClubIcon, LogOutIcon } from 'lucide-react';
import { GrTextWrap } from 'react-icons/gr';
import { BsQuestionCircle } from 'react-icons/bs';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { PiBookOpenText } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
const { Sider } = Layout;
const DashboardSidebar = () => {
      const pathname = usePathname();
      const activeKey: string = pathname.split('/').pop() ?? '';

      const handleLogout = () => {
            Modal.confirm({
                  title: 'Confirm Logout',
                  content: 'Are you sure you want to log out?',
                  okText: 'Yes',
                  cancelText: 'No',
                  centered: true,
                  icon: <LogOutIcon className="mx-2" color="#006830" />,
                  okButtonProps: {
                        style: {
                              backgroundColor: '#006830',
                              borderColor: '#006830',
                        },
                  },
                  cancelButtonProps: {
                        style: {
                              backgroundColor: 'transparent',
                              borderColor: '#414446',
                        },
                  },
                  onOk: () => {
                        // dispatch(removeUser());
                  },
            });
      };

      // const menuItems = sidebarItemsGenerator(sidebarItems, handleLogout);
      return (
            <ConfigProvider
                  theme={{
                        token: {
                              colorText: '#414446',
                              colorPrimary: '#006830',
                        },
                        components: {
                              Menu: {
                                    itemSelectedBg: '#006830',
                                    itemSelectedColor: 'white',
                                    itemBorderRadius: '30px 0px 0px 30px' as any,
                              },
                        },
                  }}
            >
                  <Sider width={250} theme="light" breakpoint="lg" collapsedWidth="0">
                        <Link href="/">
                              <div
                                    style={{
                                          margin: '0 20px',
                                          padding: '20px 0',
                                    }}
                              >
                                    <Image className="mx-auto" height={100} width={100} src={Logo} alt="" />
                              </div>
                        </Link>

                        <Menu
                              theme="light"
                              mode="inline"
                              selectedKeys={[activeKey]}
                              items={[
                                    {
                                          key: 'dashboard',
                                          icon: <ClubIcon size={20} />,
                                          label: <Link href="/dashboard">Clubs</Link>,
                                    },
                                    {
                                          key: 'blogs-management',
                                          icon: <GrTextWrap size={20} />,
                                          label: <Link href="/blogs-management">Blogs</Link>,
                                    },
                                    {
                                          key: 'faqs-management',
                                          icon: <BsQuestionCircle size={20} />,
                                          label: <Link href="/faqs-management">FAQs</Link>,
                                    },
                                    {
                                          key: 'privacy-policy-management',
                                          icon: <MdOutlinePrivacyTip size={20} />,
                                          label: <Link href="/privacy-policy-management">Privacy Policy</Link>,
                                    },
                                    {
                                          key: 'terms-and-conditions-management',
                                          icon: <PiBookOpenText size={20} />,
                                          label: <Link href="/terms-and-conditions-management">Terms & Conditions</Link>,
                                    },
                                    {
                                          key: 'logout',
                                          //   icon: <LogOutIcon size={20} />,
                                          label: (
                                                <button className="w-full flex items-center gap-2 text-center " onClick={handleLogout}>
                                                      <LogOutIcon size={20} />
                                                      Logout
                                                </button>
                                          ),
                                    },
                              ]}
                        />
                  </Sider>
            </ConfigProvider>
      );
};

export default DashboardSidebar;
