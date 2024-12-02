import HowToJoin from '@/components/pages/home/HowToJoin';
import ExploreClubs from '@/components/pages/home/ExploreClubs';
import GallerySlider from '@/components/pages/home/GallerySlider';
import EssentialItems from '@/components/pages/home/EssentialItems';
import InsideTheClub from '@/components/pages/home/InsideTheClub';

type Props = {};

const HomePage = () => {
      return (
            <main>
                  <HowToJoin />
                  <ExploreClubs />
                  <GallerySlider />
                  <EssentialItems />
                  <InsideTheClub />
            </main>
      );
};

export default HomePage;
