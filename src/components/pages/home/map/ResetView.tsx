import Image from 'next/image';
import MarkerImage2 from '@/assets/images/maps/markar2.svg';
import { useMap } from 'react-leaflet';

const ResetView = ({ center }: { center: [number, number] }) => {
      const map = useMap();

      const handleResetView = () => {
            map.setView(center, 13);
      };

      return (
            <Image
                  onClick={handleResetView}
                  src={MarkerImage2.src}
                  alt="Reset Map"
                  width={40}
                  height={40}
                  className="rounded-full z-[1000] cursor-pointer"
            />
      );
};

export default ResetView;
