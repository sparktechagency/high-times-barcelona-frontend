'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import Ganja from '@/assets/images/ganja.svg';

import { AiOutlineMenu } from 'react-icons/ai';

import { useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { Button, Dropdown, Modal, Select, Space } from 'antd';

import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import { TbChevronDown, TbWorld } from 'react-icons/tb';
import { LogOutIcon } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';
import { removeAccessToken } from '@/utils/tokenManagement';

const Navbar = () => {
      const [showDrawer, setShowDrawer] = useState(false);
      const pathname = usePathname();
      const router = useRouter();
      const dispatch = useAppDispatch();
      const { user } = useAppSelector((state) => state.auth);
      const items =
            pathname === '/'
                  ? [
                          { label: 'Home', path: '/' },
                          { label: 'Cannabis Club', path: '/#cannabis-clubs' },
                          { label: 'FAQs', path: '/faqs' },
                          { label: 'Blogs', path: '/blogs' },
                          { label: 'Contact', path: '/contact-us' },
                    ]
                  : [
                          { label: 'Home', path: '/' },
                          { label: 'FAQs', path: '/faqs' },
                          { label: 'Blogs', path: '/blogs' },
                          { label: 'Contact', path: '/contact-us' },
                    ];
      const languageOptions = [
            { value: 'en', label: 'English', shortLabel: 'EN' },
            { value: 'it', label: 'Italian', shortLabel: 'IT' },
            { value: 'fr', label: 'French', shortLabel: 'FR' },
            { value: 'es', label: 'Spanish', shortLabel: 'ES' },
            { value: 'de', label: 'German', shortLabel: 'DE' },
            { value: 'nl', label: 'Dutch', shortLabel: 'NL' },
      ];

      const customLabel = (option: any) => (
            <div className="flex items-center gap-2">
                  <span>{option.label}</span>
            </div>
      );

      const handleLogout = () => {
            Modal.confirm({
                  title: 'Confirm Logout',
                  content: 'Are you sure you want to log out?',
                  okText: 'Yes',
                  cancelText: 'No',
                  centered: true,
                  icon: <LogOutIcon className="mx-2" size={20} color="#006830" />,
                  okButtonProps: {
                        style: {
                              backgroundColor: '#006830',
                              borderColor: '#006830',
                        },
                  },
                  cancelButtonProps: {
                        style: {
                              backgroundColor: '#006830',
                              borderColor: '#006830',
                              color: '#fff',
                        },
                  },
                  onOk: () => {
                        dispatch(logout());
                        removeAccessToken();
                  },
            });
      };

      return (
            <header className={`bg-[#F9FDF9] shadow-lg`}>
                  <nav className="container  h-[90px]  relative z-[99]">
                        <div className="flex justify-between items-center h-full">
                              {/* Logo */}
                              <Link href={'/'}>
                                    <Image alt="Logo" src={Logo} width={131} height={30} />
                              </Link>
                              {/* Nav Items for Desktop */}
                              <div className="hidden md:flex bg-[#fffae2] p-2 px-3 h-12 rounded-lg items-center gap-8">
                                    <NavItems items={items} />
                              </div>
                              <div className="flex md:items-center w-full md:w-auto justify-end md:justify-center space-x-6">
                                    <div className="hidden md:block">
                                          <Button
                                                href="/#cannabis-clubs"
                                                iconPosition="end"
                                                icon={<Image src={Ganja} alt="Ganja" />}
                                                type="primary"
                                          >
                                                Join Now
                                          </Button>
                                    </div>

                                    <Select
                                          defaultValue="en"
                                          options={languageOptions}
                                          variant={'borderless'}
                                          prefix={<TbWorld size={20} />}
                                          suffixIcon={
                                                <div className="ml-1">
                                                      <TbChevronDown size={20} />
                                                </div>
                                          }
                                          labelInValue
                                          optionLabelProp="shortLabel"
                                          menuItemSelectedIcon={null}
                                          onChange={(value) => console.log(value)}
                                          optionRender={customLabel}
                                    />

                                    {user ? (
                                          <Dropdown
                                                trigger={['click']}
                                                menu={{
                                                      items: [
                                                            {
                                                                  label: 'Dashboard',
                                                                  key: 'dashboard',
                                                                  onClick: () => router.push('/dashboard'),
                                                            },
                                                            {
                                                                  label: 'Logout',
                                                                  key: 'logout',
                                                                  onClick: () => handleLogout(),
                                                            },
                                                      ],
                                                }}
                                                placement="bottomRight"
                                                arrow={{
                                                      pointAtCenter: true,
                                                }}
                                          >
                                                <Button type="text" className="text-primaryText">
                                                      <Space>
                                                            <div className="bg-[#FFFAE2] p-2 rounded-full">
                                                                  <Image src={Ganja} alt="Ganja" width={20} height={20} />
                                                            </div>
                                                            <TbChevronDown />
                                                      </Space>
                                                </Button>
                                          </Dropdown>
                                    ) : (
                                          <Button href="/login" iconPosition="end" icon={<Image src={Ganja} alt="Ganja" />} type="primary">
                                                Login
                                          </Button>
                                    )}
                              </div>
                              <div className="md:hidden">
                                    <AiOutlineMenu
                                          onClick={() => setShowDrawer(!showDrawer)}
                                          className="text-primaryText cursor-pointer"
                                          size={24}
                                    />
                              </div>
                        </div>
                  </nav>

                  {/* Mobile Drawer */}
                  <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
            </header>
      );
};

export default Navbar;
