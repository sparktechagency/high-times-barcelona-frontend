import { ConfigProvider, Layout, Menu, Modal } from 'antd';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { ClubIcon } from 'lucide-react';
import { GrTextWrap } from 'react-icons/gr';
import { BsQuestionCircle } from 'react-icons/bs';
import { FcPrivacy } from 'react-icons/fc';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { PiBookOpenText } from 'react-icons/pi';
const { Sider } = Layout;
const DashboardSidebar = () => {
      const handleLogout = () => {
            Modal.confirm({
                  title: 'Confirm Logout',
                  content: 'Are you sure you want to log out?',
                  okText: 'Yes',
                  cancelText: 'No',
                  centered: true,
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
                              defaultSelectedKeys={['dashboard']}
                              items={[
                                    {
                                          key: 'dashboard',
                                          icon: <ClubIcon size={20} />,
                                          label: <Link href="/dashboard">Clubs</Link>,
                                    },
                                    {
                                          key: '',
                                          icon: <GrTextWrap size={20} />,
                                          label: <Link href="/dashboard/blogs">Blogs</Link>,
                                    },
                                    {
                                          key: 'faqs',
                                          icon: <BsQuestionCircle size={20} />,
                                          label: <Link href="/dashboard/faqs">FAQs</Link>,
                                    },
                                    {
                                          key: 'privacy-policy',
                                          icon: <MdOutlinePrivacyTip size={20} />,
                                          label: <Link href="/dashboard/privacy-policy">Privacy Policy</Link>,
                                    },
                                    {
                                          key: 'terms-and-conditions',
                                          icon: <PiBookOpenText size={20} />,
                                          label: <Link href="/dashboard/terms-and-conditions">Terms & Conditions</Link>,
                                    },
                              ]}
                        />
                  </Sider>
            </ConfigProvider>
      );
};

export default DashboardSidebar;
