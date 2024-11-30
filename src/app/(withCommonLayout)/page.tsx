import HowToJoin from '@/components/pages/home/HowToJoin';
import ExploreClubs from '@/components/pages/home/ExploreClubs';
import GallerySlider from '@/components/pages/home/GallerySlider';

type Props = {};

const HomePage = () => {
      return (
            <main>
                  <HowToJoin />
                  <ExploreClubs />
                  <GallerySlider />
            </main>
      );
};

export default HomePage;
