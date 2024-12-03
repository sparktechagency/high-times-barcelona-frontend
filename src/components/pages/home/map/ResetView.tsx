import Image from 'next/image';
import MarkerImage2 from '@/assets/images/maps/markar2.svg';
import { useMap } from 'react-leaflet';
interface ResetViewProps {
      center?: [number, number];
      onReset?: () => void;
}
const ResetView = ({ center = [40.7128, -74.006], onReset }: ResetViewProps) => {
      const map = useMap();

      const handleResetView = () => {
            map.setView(center, 13);
            onReset?.();
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
