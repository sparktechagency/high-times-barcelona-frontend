'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import Ganja from '@/assets/images/ganja.svg';

import { AiOutlineMenu } from 'react-icons/ai';

import { useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { Avatar, Button, Dropdown, Modal, Select, Space } from 'antd';

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
            { value: 'es', label: 'Spanish', shortLabel: 'ES' },
            { value: 'fr', label: 'French', shortLabel: 'FR' },
            { value: 'it', label: 'Italian', shortLabel: 'IT' },
            { value: 'de', label: 'German', shortLabel: 'DE' },
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

      const handleLanguageChange = (data: any) => {
            const supportedLocales = ['en', 'es', 'fr', 'it', 'de'];
            const parts = pathname.split('/').filter(Boolean);
            if (supportedLocales.includes(parts[0])) {
                  parts[0] = data.value;
            } else {
                  parts.unshift(data.value);
            }
            const newPath = `/${parts.join('/')}`;
            router.push(newPath);
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
                                          defaultValue={pathname.split('/')[1]}
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
                                          onChange={(value) => handleLanguageChange(value)}
                                          optionRender={customLabel}
                                    />

                                    {user && (
                                          <Dropdown
                                                className="hidden md:block"
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
                                                      <div className="bg-[#FFFAE2] p-2 rounded-full">
                                                            <Avatar src={'https://randomuser.me/api/portraits/lego/2.jpg'} />
                                                      </div>
                                                      <TbChevronDown />
                                                </Button>
                                          </Dropdown>
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
