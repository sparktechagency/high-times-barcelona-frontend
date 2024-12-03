import PrivacyPolicy from '@/components/privacy-policy/PrivacyPolicy';
import PageHeader from '@/components/shared/PageHeader';

const PrivacyPolicyPage = () => {
      return (
            <div className="bg-[#fafaf7] min-h-screen ">
                  <PageHeader title="Privacy Policy" />
                  <PrivacyPolicy />
            </div>
      );
};

export default PrivacyPolicyPage;
