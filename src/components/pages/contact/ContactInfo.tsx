import { FC } from 'react';
import Tele from '@/assets/images/contact/tele.png';
import Email from '@/assets/images/contact/email.png';
import Location from '@/assets/images/contact/location.png';
import Image from 'next/image';
const ContactInfo: FC = () => {
      return (
            <div className="container py-20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Phone Number */}
                        <div className="bg-white drop-shadow-lg rounded-xl p-8 text-center border border-t-[10px] border-t-primary">
                              <div className="w-20 h-20 mx-auto bg-[#F2FFF5] rounded-full flex items-center justify-center mb-6">
                                    <Image src={Tele} alt="Phone" />
                              </div>
                              <h3 className="text-xl font-medium mb-4">Phone Number</h3>
                              <div className="space-y-2">
                                    <p>(907) 555-0101</p>
                                    <p>(907) 555-0101</p>
                              </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white drop-shadow-lg rounded-xl p-8 text-center border border-t-[10px] border-t-primary">
                              <div className="w-20 h-20 mx-auto bg-[#F2FFF5] rounded-full flex items-center justify-center mb-6">
                                    <Image src={Email} alt="Email" />
                              </div>
                              <h3 className="text-xl font-medium mb-4">Email</h3>
                              <div className="space-y-2">
                                    <p>Demo@example.com</p>
                                    <p>Demo@example.com</p>
                              </div>
                        </div>

                        {/* Address */}
                        <div className="bg-white drop-shadow-lg rounded-xl p-8 text-center border border-t-[10px] border-t-primary">
                              <div className="w-20 h-20 mx-auto bg-[#F2FFF5] rounded-full flex items-center justify-center mb-6">
                                    <Image src={Location} alt="Location" />
                              </div>
                              <h3 className="text-xl font-medium mb-4">Address</h3>
                              <div className="space-y-2">
                                    <p>Royal Ln. Mesa, New Jersey 45463</p>
                                    <p>Thornridge Cir. Shiloh, Hawaii 81063</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ContactInfo;
