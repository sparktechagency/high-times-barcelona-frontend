import HowToJoin from '@/components/pages/home/HowToJoin';
import ExploreClubs from '@/components/pages/home/ExploreClubs';
import GallerySlider from '@/components/pages/home/GallerySlider';
import EssentialItems from '@/components/pages/home/EssentialItems';
import InsideTheClub from '@/components/pages/home/InsideTheClub';
import FAQSection from '@/components/pages/home/FAQSection';
import ClubGuideLines from '@/components/pages/home/ClubGuideLines';
import LeavingClub from '@/components/pages/home/LeavingClub';
import ClubVibe from '@/components/pages/home/ClubVibe';

type Props = {};

const HomePage = ({}: Props) => {
      return (
            <main>
                  <HowToJoin />
                  <ExploreClubs />
                  <GallerySlider />
                  <EssentialItems />
                  <InsideTheClub />
                  <FAQSection />
                  <ClubGuideLines />
                  <LeavingClub />
                  <ClubVibe />
            </main>
      );
};

export default HomePage;
