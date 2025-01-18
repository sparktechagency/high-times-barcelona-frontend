'use client';
import { Dispatch, SetStateAction } from 'react';
import NavItems from './NavItems';
import { Avatar, Button, Drawer, Dropdown, Space } from 'antd';
import { TbChevronDown } from 'react-icons/tb';
import Image from 'next/image';
import Ganja from '@/assets/images/ganja.svg';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { removeAccessToken } from '@/utils/tokenManagement';
import { logout } from '@/redux/features/auth/authSlice';
const MobileDrawer = ({ open, setOpen, items }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>>; items: any[] }) => {
      const onClose = () => {
            setOpen(!open);
      };

      const { user } = useAppSelector((state) => state.auth);
      const router = useRouter();
      const dispatch = useAppDispatch();
      const handleLogout = () => {
            dispatch(logout());
            removeAccessToken();
            router.push('/login');
      };
      return (
            <Drawer
                  style={{
                        backgroundColor: '#F9FDF9',
                  }}
                  placement="right"
                  onClose={onClose}
                  open={open}
            >
                  <div className="flex flex-col text-start items-center px-4 gap-8">
                        <NavItems items={items} onClose={onClose} />

                        {user && (
                              <Dropdown
                                    className="block md:hidden"
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
                                                      <Avatar src={'https://randomuser.me/api/portraits/lego/2.jpg'} />
                                                </div>
                                                <TbChevronDown />
                                          </Space>
                                    </Button>
                              </Dropdown>
                        )}
                  </div>
            </Drawer>
      );
};

export default MobileDrawer;
