import { Layout } from 'antd';
const { Header } = Layout;
import Ganja from '@/assets/images/ganja.svg';
import Image from 'next/image';

const HeaderDashboard = () => {
      return (
            <Header style={{ backgroundColor: '#fff' }} className="h-20 bg-white w-full overflow-hidden">
                  <div className="flex items-center justify-end gap-5 h-full">
                        <div>
                              {/* Profile */}
                              <div className="flex items-center gap-3 rounded-md p-2">
                                    <Image
                                          width={48}
                                          height={48}
                                          src={Ganja}
                                          alt="Profile"
                                          className="w-11 h-11 rounded-full border-2 border-green-100"
                                    />
                                    <h2 className=" text-sm font-semibold">Admin Dashboard</h2>
                              </div>
                        </div>
                  </div>
            </Header>
      );
};

export default HeaderDashboard;
