'use client';
import { Collapse } from 'antd';
import Image from 'next/image';
import { CgChevronDown } from 'react-icons/cg';
import CoffeeShopIcon from '@/assets/images/basic-vocabulary/Frame 1.png';
import CannabisClubIcon from '@/assets/images/basic-vocabulary/Frame 1 (1).png';
import CafeIcon from '@/assets/images/basic-vocabulary/Frame 1 (2).png';
import ShopIcon from '@/assets/images/basic-vocabulary/Frame 1 (3).png';
import GrowshopIcon from '@/assets/images/basic-vocabulary/Frame 1 (4).png';
import BasicVocabularyImage from '@/assets/images/basic-vocabulary/basic-vocabulary.png';
import Ganja from '@/assets/images/ganja2.svg';

interface Rule {
      icon: any;
      title: string;
      description: string;
}

const BasicVocabulary = () => {
      const rules: Rule[] = [
            {
                  icon: CoffeeShopIcon,
                  title: 'Coffee Shop',
                  description:
                        'Coffee shops are establishments in Amsterdam where you can buy and use marijuana. Access to coffeeshops is open to everyone over the age of 18, but the amount that one visitor can purchase is limited to 5 grams per day. In such places, cannabis is sold alongside typical coffee shop fare, including food and drink.',
            },
            {
                  icon: CannabisClubIcon,
                  title: 'Cannabis Club',
                  description:
                        'A private members-only establishment where cannabis can be consumed in a social setting. These clubs often offer a variety of strains and consumption methods in a controlled, safe environment.',
            },
            {
                  icon: CafeIcon,
                  title: 'Cannabis Cafe',
                  description:
                        'Similar to coffee shops but with a stronger focus on food service. These establishments often offer cannabis-infused foods and beverages alongside regular menu items.',
            },
            {
                  icon: ShopIcon,
                  title: 'Cannabis Shop',
                  description:
                        'Retail establishments specializing in cannabis products, including flowers, edibles, and accessories. These shops typically offer expert advice and product information.',
            },
            {
                  icon: GrowshopIcon,
                  title: 'Growshop',
                  description:
                        'Specialized stores that sell equipment and supplies for growing cannabis, including seeds, nutrients, lighting, and other cultivation necessities.',
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
                              <Image unoptimized className="size-[48px]" src={rule.icon} alt={rule.title} width={1000} height={1000} />
                              {rule.title}
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
                              <div className="flex gap-4">
                                    <h2 className="text-4xl md:text-5xl title-font font-bold text-black mb-2">Basic</h2>
                                    <h3 className="text-4xl md:text-5xl title-font font-bold text-[#00A651]">Vocabulary</h3>
                              </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start">
                              <div className="md:w-[589px] mx-auto md:h-[714px]">
                                    <Image src={BasicVocabularyImage} alt="Cannabis" width={500} height={500} className="w-full h-full" />
                              </div>
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
                        </div>
                  </div>
            </section>
      );
};

export default BasicVocabulary;
