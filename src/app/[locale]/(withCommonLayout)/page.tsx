import HowToJoin from '@/components/pages/home/HowToJoin';
import ExploreClubs from '@/components/pages/home/ExploreClubs';
import GallerySlider from '@/components/pages/home/GallerySlider';
import EssentialItems from '@/components/pages/home/EssentialItems';
import InsideTheClub from '@/components/pages/home/InsideTheClub';
import FAQSection from '@/components/pages/home/FAQSection';
import ClubGuideLines from '@/components/pages/home/ClubGuideLines';
import LeavingClub from '@/components/pages/home/LeavingClub';
import ClubVibe from '@/components/pages/home/ClubVibe';
import ClubRules from '@/components/pages/home/ClubRules';
import BasicVocabulary from '@/components/pages/home/BasicVocabulary';
import dynamic from 'next/dynamic';
const ClubMapSection = dynamic(() => import('@/components/pages/home/ClubMapSection'), { ssr: false });

type Props = {};

const HomePage = ({}: Props) => {
      return (
            <main>
                  <ClubMapSection />
                  <HowToJoin />
                  <ExploreClubs />
                  <GallerySlider />
                  <EssentialItems />
                  <InsideTheClub />
                  <FAQSection />
                  <ClubGuideLines />
                  <LeavingClub />
                  <ClubVibe />
                  <ClubRules />
                  <BasicVocabulary />
            </main>
      );
};

export default HomePage;
