import CannabisClubDetails from '@/components/pages/cannabis-club/details/CannabisClubDetails';

const CannabisClubDetailsPage = ({ params }: { params: { id: string } }) => {
      const { id } = params;
      return (
            <div>
                  <CannabisClubDetails id={id} />
            </div>
      );
};

export default CannabisClubDetailsPage;
