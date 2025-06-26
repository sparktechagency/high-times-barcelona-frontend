'use client';

import CannabisClubDetails from '@/components/pages/cannabis-club/details/CannabisClubDetails';
import PageHeader from '@/components/shared/PageHeader';
import { useGetSingleClubQuery } from '@/redux/features/club/clubApi';

const CannabisClubDetailsPage = ({ params }: { params: { id: string } }) => {
      const { data: club } = useGetSingleClubQuery(params.id);

      return (
            <div>
                  <PageHeader title={`${club?.name}`} />
                  <CannabisClubDetails club={club!} />
            </div>
      );
};

export default CannabisClubDetailsPage;
