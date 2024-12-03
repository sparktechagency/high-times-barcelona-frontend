import React from 'react';

const TermsAndCondition = () => {
      return (
            <div className="container py-20">
                  <div className="space-y-8">
                        {/* Introduction */}
                        <div>
                              <p className="text-[#1B2F2B] leading-relaxed">
                                    We are excited to have you here. By using our website, you agree to the following terms and conditions
                                    designed to ensure a secure, transparent, and enjoyable experience for all our visitors. These
                                    guidelines help protect both your rights as a user and our responsibilities as a service provider.
                                    Please take a moment to review these terms carefully.
                              </p>
                        </div>

                        {/* Age Restrictions */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Age Restrictions</h2>
                              <p className="text-[#1B2F2B]">
                                    You must be at least 18 years old to access or use this website. By using our services, you confirm that
                                    you meet this requirement.
                              </p>
                        </div>

                        {/* Responsible Use */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsible Use</h2>
                              <p className="text-[#1B2F2B]">
                                    We provide information and resources about cannabis culture for educational and recreational purposes.
                                    We do not promote or facilitate illegal activities. Please use our services responsibly and in
                                    compliance with local laws.
                              </p>
                        </div>

                        {/* Membership and Social Clubs */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Membership and Social Clubs</h2>
                              <p className="text-[#1B2F2B]">
                                    Our website provides information about cannabis social clubs. We do not own or operate these clubs, and
                                    access to them is subject to their terms and policies. Always verify their rules before visiting.
                              </p>
                        </div>

                        {/* Content Accuracy */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Content Accuracy</h2>
                              <p className="text-[#1B2F2B]">
                                    We strive to keep the information on our website accurate and up-to-date. However, we do not guarantee
                                    the completeness or accuracy of the content. Users are encouraged to verify information independently.
                              </p>
                        </div>

                        {/* Personal Data */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Data</h2>
                              <p className="text-[#1B2F2B]">
                                    Your privacy is important to us. By using our site, you agree to our{' '}
                                    <a href="/privacy-policy" className="text-primary hover:underline">
                                          Privacy Policy
                                    </a>
                                    . We use cookies to enhance your browsing experience and analyze site traffic.
                              </p>
                        </div>

                        {/* Prohibited Activities */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prohibited Activities</h2>
                              <p className="text-[#1B2F2B]">While using our website, you agree not to:</p>
                              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#1B2F2B]">
                                    <li>Use the website for unlawful purposes.</li>
                                    <li>Post misleading or harmful content.</li>
                                    <li>Attempt to access restricted areas or compromise site security.</li>
                              </ul>
                        </div>

                        {/* Third-Party Links */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Links</h2>
                              <p className="text-[#1B2F2B]">
                                    Our website may include links to third-party websites or services. We are not responsible for the
                                    content or actions of these external sites.
                              </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
                              <p className="text-[#1B2F2B]">
                                    We are not liable for any damages arising from the use of our website or the reliance on its content.
                                    Use our website at your own risk.
                              </p>
                        </div>

                        {/* Changes to Terms */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
                              <p className="text-[#1B2F2B]">
                                    We reserve the right to update these Terms and Conditions at any time. Updates will be posted on this
                                    page, and continued use of the website constitutes acceptance of the changes.
                              </p>
                        </div>

                        {/* Contact Us */}
                        <div>
                              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                              <p className="text-[#1B2F2B]">
                                    If you have any questions or concerns about these Terms and Conditions, feel free to contact us through
                                    our{' '}
                                    <a href="/contact-us" className="text-primary hover:underline">
                                          Contact Page
                                    </a>
                                    .
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default TermsAndCondition;
