import ContactUs from '@/components/pages/contact/ContactForm';
import ContactInfo from '@/components/pages/contact/ContactInfo';
import PageHeader from '@/components/shared/PageHeader';

const ContactUsPage = () => {
      return (
            <div className="bg-[#f6fdf7] pb-20">
                  <PageHeader title="Contact Us" />
                  <ContactInfo />
                  <ContactUs />
            </div>
      );
};

export default ContactUsPage;
