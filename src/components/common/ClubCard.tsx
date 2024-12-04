import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';

type ClubCardProps = {
      name: string;
      location: [number, number];
      rating: number;
      hours: string;
      address: string;
      image: string;
      openingHour: string;
      endHour: string;
      onClick?: () => void;
};

const ClubCard = ({ club, onClick }: { club: ClubCardProps; onClick?: () => void }) => {
      return (
            <div 
                  className="relative w-full h-[200px] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={onClick}
            >
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0">
                        <Image src={club.image} alt={club.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute border-secondary top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
                        {club.rating} <BsStarFill color="#FFC313" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                        <div className="flex justify-between items-center">
                              <div>
                                    <h3 className="text-white text-xl font-bold mb-1">{club.name}</h3>
                                    <p className="text-gray-200 text-sm">{club.address}</p>
                              </div>
                              <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium 
                                    {isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                              >
                                    Open
                              </span>
                        </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
      );
};

export default ClubCard;
