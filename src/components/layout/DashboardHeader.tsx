import { Layout } from 'antd';
const { Header } = Layout;

const HeaderDashboard = () => {
      return (
            <Header style={{ backgroundColor: '#fff' }} className="h-20 bg-white w-full overflow-hidden">
                  <div className="flex items-center justify-end gap-5 h-full">
                        <div>
                              {/* Profile */}
                              <div className="flex items-center gap-3 rounded-md p-2">
                                    <img
                                          src="https://via.placeholder.com/44"
                                          alt="Profile"
                                          className="w-11 h-11 rounded-full border-2 border-yellow-400"
                                    />
                                    <h2 className=" text-sm font-semibold">Admin Dashboard</h2>
                              </div>
                        </div>
                  </div>
            </Header>
      );
};

export default HeaderDashboard;
