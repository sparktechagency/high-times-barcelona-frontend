import CannabisClubDetails from '@/components/pages/cannabis-club/details/CannabisClubDetails';
import PageHeader from '@/components/shared/PageHeader';

const CannabisClubDetailsPage = ({ params }: { params: { id: string } }) => {
      const { id } = params;
      return (
            <div>
                  <PageHeader title="Mano Verde" />
                  <CannabisClubDetails id={id} />
            </div>
      );
};

export default CannabisClubDetailsPage;
