'use client';
import { Collapse } from 'antd';
import Image from 'next/image';
import { CgChevronDown } from 'react-icons/cg';

import FaqImage from '@/assets/images/faq-images/faq-image.png';
import Ganja from '@/assets/images/ganja2.svg';
import { useTranslations } from 'next-intl';
import { MdCardMembership } from 'react-icons/md';
import { TbNumber18Small } from 'react-icons/tb';
import { LuCameraOff } from 'react-icons/lu';
import { BsCashCoin } from 'react-icons/bs';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';
import { GiWineGlass } from 'react-icons/gi';
interface Rule {
      icon: any;
      title: string;
      description: string;
}

const ClubRules = () => {
      const t = useTranslations('club-rule-section');
      const rules: Rule[] = [
            {
                  icon: <MdCardMembership className="text-primary" size={28} />,
                  title: t('card.rule1.title'),
                  description: t('card.rule1.description'),
            },
            {
                  icon: <TbNumber18Small className="text-primary" size={28} />,
                  title: t('card.rule2.title'),
                  description: t('card.rule2.description'),
            },
            {
                  icon: <LuCameraOff className="text-primary" size={28} />,
                  title: t('card.rule3.title'),
                  description: t('card.rule3.description'),
            },
            {
                  icon: <BsCashCoin className="text-primary" size={28} />,
                  title: t('card.rule4.title'),
                  description: t('card.rule4.description'),
            },
            {
                  icon: <PiSuitcaseSimpleDuotone className="text-primary" size={28} />,
                  title: t('card.rule5.title'),
                  description: t('card.rule5.description'),
            },
            {
                  icon: <GiWineGlass className="text-primary" size={28} />,
                  title: t('card.rule6.title'),
                  description: t('card.rule6.description'),
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
                              {rule.icon} {rule.title}
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
                                          className="cursor-default-class"
                                          collapsible="icon"
                                          style={{
                                                backgroundColor: 'transparent',
                                          }}
                                          bordered={false}
                                          items={getItems()}
                                          expandIconPosition="end"
                                          expandIcon={() => (
                                                <CgChevronDown style={{ display: 'none' }} className="hidden" size={24} color="#00863D" />
                                          )}
                                          size="large"
                                    />
                              </div>
                              <div className="md:w-[589px] mx-auto md:h-[604px]">
                                    <Image src={FaqImage} alt="Cannabis" width={500} height={500} className="w-full h-full" />
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ClubRules;
