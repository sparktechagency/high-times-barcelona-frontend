'use client';
import { Collapse } from 'antd';
import Image from 'next/image';
import { CgChevronDown } from 'react-icons/cg';
import MembersIcon from '@/assets/images/faq-images/Frame 1.png';
import AgeIcon from '@/assets/images/faq-images/Frame 1 (1).png';
import NoPhotosIcon from '@/assets/images/faq-images/Frame 1707481610.png';
import CashIcon from '@/assets/images/faq-images/Frame 1707481610 (1).png';
import NoSuitcaseIcon from '@/assets/images/faq-images/Frame 1707481610 (2).png';
import ConsumptionIcon from '@/assets/images/faq-images/Frame 1707481610 (3).png';
import FaqImage from '@/assets/images/faq-images/faq-image.png';
import Ganja from '@/assets/images/ganja2.svg';
interface Rule {
      icon: any;
      title: string;
      description: string;
}

const ClubRules = () => {
      const rules: Rule[] = [
            {
                  icon: MembersIcon,
                  title: 'Members only',
                  description: 'Only members can enter the club. To join, you need an invitation or apply through the club.',
            },
            {
                  icon: AgeIcon,
                  title: 'Age limit',
                  description: 'Must be of legal age to enter and consume.',
            },
            {
                  icon: NoPhotosIcon,
                  title: 'No Photos',
                  description: 'Photography is strictly prohibited inside the club.',
            },
            {
                  icon: CashIcon,
                  title: 'Cash only',
                  description: 'We only accept cash payments for all transactions.',
            },
            {
                  icon: NoSuitcaseIcon,
                  title: 'No suitcases',
                  description: 'Large bags and suitcases are not permitted.',
            },
            {
                  icon: ConsumptionIcon,
                  title: 'Responsible Consumption',
                  description: 'Please consume responsibly and follow club guidelines.',
            },
      ];

      const panelStyle = {
            marginBottom: 15,
            background: 'transparent',
            borderRadius: '20px',
            border: '1px solid #00863D',
            padding: '4px',
            fontSize: '14px',
      };

      const getItems = () =>
            rules.map((rule, index) => ({
                  key: String(index + 1),
                  label: (
                        <p className="text-xl text-black flex items-center gap-2">
                              <Image className="size-[48px]" src={rule.icon} alt={rule.title} width={1000} height={1000} /> {rule.title}
                        </p>
                  ),
                  children: <p className="text-sm text-[#414141]">{rule.description}</p>,
                  style: panelStyle,
            }));

      return (
            <section className="py-20 bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div className="container">
                        <div className="flex flex-col items-center mb-16">
                              <Image src={Ganja} alt="Cannabis" width={40} height={40} className="mb-4" />
                              <h2 className="text-4xl md:text-5xl title-font font-bold text-black mb-6">Cannabis</h2>
                              <h3 className="text-4xl md:text-5xl font-bold title-font text-[#00A651]">Social Club Basic Rules</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start">
                              <div>
                                    <Collapse
                                          style={{
                                                backgroundColor: 'transparent',
                                          }}
                                          defaultActiveKey={['1', '2']}
                                          bordered={false}
                                          items={getItems()}
                                          expandIconPosition="end"
                                          expandIcon={() => <CgChevronDown size={24} color="#00863D" />}
                                          size="large"
                                    />
                              </div>
                              <div className="md:w-[589px] mx-auto md:h-[714px]">
                                    <Image src={FaqImage} alt="Cannabis" width={500} height={500} className="w-full h-full" />
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ClubRules;
