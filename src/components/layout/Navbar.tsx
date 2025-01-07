'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import Ganja from '@/assets/images/ganja.svg';

import { AiOutlineMenu } from 'react-icons/ai';

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import { Button, Select } from 'antd';

import NavItems from './NavItems';
import MobileDrawer from './MobileDrawer';
import { TbChevronDown, TbWorld } from 'react-icons/tb';

const Navbar = () => {
      const [showDrawer, setShowDrawer] = useState(false);
      const pathname = usePathname();
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
                                    <Link className="hidden md:block" href="/">
                                          <Button iconPosition="end" icon={<Image src={Ganja} alt="Ganja" />} type="primary">
                                                Join Now
                                          </Button>
                                    </Link>

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

                                    <Link className="" href="/dashboard">
                                          <Button iconPosition="end" icon={<Image src={Ganja} alt="Ganja" />} type="text">
                                                Dashboard
                                          </Button>
                                    </Link>
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
