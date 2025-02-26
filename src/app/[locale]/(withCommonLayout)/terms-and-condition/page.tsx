import TermsAndCondition from '@/components/pages/terms-and-condition/TermsAndCondition';
import PageHeader from '@/components/shared/PageHeader';

const TermsAndConditionPage = () => {
      return (
            <div className="bg-[#fafaf7] min-h-screen">
                  <PageHeader title="Terms & Conditions" />
                  <TermsAndCondition />
            </div>
      );
};

export default TermsAndConditionPage;
