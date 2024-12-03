'use client';
import { Collapse, ConfigProvider } from 'antd';
import { CgChevronDown } from 'react-icons/cg';

interface FaqItem {
      title: string;
      description: string;
}

const Faq = () => {
      const faqs: FaqItem[] = [
            {
                  title: 'Why are Cannabis Clubs Members Only?',
                  description:
                        'In Spain, cannabis use is limited to private spaces like homes or Cannabis Social Clubs. These clubs, requiring membership, operate within legal limits to provide a safe environment. Joining typically requires an invitation, and members receive a card upon approval.',
            },
            {
                  title: 'Do I need to register each time I visit a coffee shop in Barcelona?',
                  description:
                        'Once you are a registered member of a cannabis club, you do not need to register again for each visit. Your membership allows you regular access to the club.',
            },
            {
                  title: 'Is the personal information I provide for my membership safe?',
                  description:
                        'Cannabis social clubs in Barcelona take data protection seriously and handle all personal information in accordance with privacy laws. Your information is kept secure and only used for membership purposes.',
            },
            {
                  title: 'Can tourists become members of Cannabis Social Clubs?',
                  description:
                        "Yes, tourists can become members of cannabis social clubs in Barcelona, but they need to follow the proper registration process and meet the club's requirements.",
            },
            {
                  title: 'Are Barcelona weed cafés open on Sundays?',
                  description:
                        "Most cannabis clubs in Barcelona operate seven days a week, including Sundays, though hours may vary. It's best to check with your specific club for their operating hours.",
            },
            {
                  title: 'Can I register online for a Cannabis Social Club?',
                  description:
                        'While some clubs offer pre-registration online, the final registration process typically requires an in-person visit to complete the membership process and verify identification.',
            },
            {
                  title: "Can I bring a guest to the coffee shop I'm a member of?",
                  description:
                        'Most cannabis clubs have specific policies regarding guests. Generally, members can sponsor new members, but guests cannot enter without becoming members themselves.',
            },
            {
                  title: 'For how long does my Cannabis Club Membership remain effective?',
                  description:
                        'Membership duration varies by club. Some offer annual memberships, while others may have different terms. Check with your specific club for their membership duration policies.',
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
            faqs.map((faq, index) => ({
                  key: String(index + 1),
                  label: <h3 className="text-lg font-medium">{faq.title}</h3>,
                  children: <p className="text-sm text-[#414141]">{faq.description}</p>,
                  style: panelStyle,
            }));

      return (
            <section className="py-20">
                  <div className="container">
                        <div className="flex flex-col items-center mb-16">
                              <h3 className="text-4xl md:text-5xl font-medium">
                                    Frequently Asked <span className="text-[#00A651]">Questions</span>
                              </h3>
                        </div>

                        <div className="max-w-[792px] mx-auto">
                              <div>
                                    <Collapse
                                          style={{
                                                backgroundColor: 'transparent',
                                          }}
                                          defaultActiveKey={['1']}
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

export default Faq;
