import HowToJoin from '@/components/pages/home/HowToJoin';
import ExploreClubs from '@/components/pages/home/ExploreClubs';
import GallerySlider from '@/components/pages/home/GallerySlider';
import EssentialItems from '@/components/pages/home/EssentialItems';

type Props = {};

const HomePage = () => {
      return (
            <main>
                  <HowToJoin />
                  <ExploreClubs />
                  <EssentialItems />
                  <GallerySlider />
            </main>
      );
};

export default HomePage;
