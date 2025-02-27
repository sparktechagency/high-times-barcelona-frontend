import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L, { Map } from 'leaflet';
import MarkerImage from '@/assets/images/maps/marker.svg';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { LuMapPin } from 'react-icons/lu';
import { AutoComplete, Button, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import ResetView from './ResetView';
import { BsStarFill } from 'react-icons/bs';
import { getImageUrl } from '@/utils/getImageUrl';
import { TClub } from '@/redux/features/club/clubApi';

type TProps = {
      approvedClubs: TClub[];
      selectedClub: TClub | null;
      setSelectedClub: (club: TClub | null) => void;
};
const ClubMap = ({ approvedClubs, selectedClub, setSelectedClub }: TProps) => {
      const [searchQuery, setSearchQuery] = useState('');
      const [map, setMap] = useState<Map | null>(null);

      const customIcon = new Icon({
            iconUrl: MarkerImage.src,
            iconSize: [50, 50],
      });

      const filteredClubs = approvedClubs.filter(
            (club) =>
                  club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  club.address.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Adjust map view based on `selectedClub`
      useEffect(() => {
            if (map && selectedClub) {
                  map.setView([selectedClub.location.latitude, selectedClub.location.longitude], 15);
            }
      }, [selectedClub, map]);

      console.log(filteredClubs);
      const options = filteredClubs.map((club) => ({
            value: club.name,
            club: club,
            label: (
                  <div className="flex items-center gap-2">
                        <Image src={getImageUrl(club.image)} alt={club.name} width={30} height={30} className="rounded-full" />
                        {club.name}
                  </div>
            ),
      }));

      return (
            <div className="h-full">
                  <MapContainer
                        center={[41.3851, 2.1734]}
                        zoom={13}
                        style={{
                              height: '100%',
                              width: '100%',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                        ref={setMap}
                  >
                        <div className="search-bar absolute top-4 left-1/2 transform -translate-x-1/2 md:left-20 md:translate-x-0 z-[1000]">
                              <AutoComplete
                                    options={options}
                                    onSelect={(value) => {
                                          const selectedOption = options.find((option) => option.value === value);
                                          if (selectedOption) {
                                                setSelectedClub(selectedOption.club);
                                          }
                                    }}
                                    onSearch={(value) => setSearchQuery(value)}
                                    style={{
                                          height: 46,
                                          minWidth: 250,
                                          borderRadius: 24,
                                          backgroundColor: '#fff',
                                          borderColor: 'transparent',
                                          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    }}
                              >
                                    <Input
                                          placeholder="Search clubs..."
                                          value={searchQuery}
                                          style={{
                                                minWidth: 200,
                                                height: 46,
                                                borderRadius: 24,
                                                backgroundColor: '#fff',
                                                borderColor: 'transparent',
                                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                          }}
                                          suffix={<ResetView center={[41.3851, 2.1734]} onReset={() => setSearchQuery('')} />}
                                    />
                              </AutoComplete>
                        </div>

                        <TileLayer
                              url={`https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ`}
                              attribution='Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                        />
                        {filteredClubs.map((club) => (
                              <Marker key={club._id} position={[club.location.latitude, club.location.longitude]} icon={customIcon}>
                                    <Popup>
                                          <div className="w-[213px] h-full">
                                                <div className="mb-2">
                                                      <Image
                                                            src={getImageUrl(club.image)}
                                                            alt={club.name}
                                                            width={1000}
                                                            height={120}
                                                            className="object-cover rounded-lg w-full h-full"
                                                      />
                                                </div>
                                                <div className="absolute border-secondary top-6 left-6 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
                                                      {club.rating} <BsStarFill color="#FFC313" />
                                                </div>
                                                <div>
                                                      <h5 className="text-lg text-primary  mb-1 font-semibold">{club.name}</h5>
                                                      <div className="flex items-center gap-3 mb-1">
                                                            <Clock className="flex-shrink-0" color="#FFC313" size={18} />
                                                            <span className="text-sm">
                                                                  {club.openingHour} - {club.closingHour}
                                                            </span>
                                                      </div>
                                                      <div className="flex items-start gap-3">
                                                            <LuMapPin className="flex-shrink-0" color="#FFC313" size={18} />
                                                            <span className="text-sm break-words">{club.address}</span>
                                                      </div>
                                                </div>
                                                <div className="my-2">
                                                      <Button
                                                            href={`/cannabis-club/${club._id}`}
                                                            style={{
                                                                  height: 32,
                                                                  width: '100%',
                                                                  color: '#000000',
                                                            }}
                                                            type="primary"
                                                      >
                                                            Join Now
                                                      </Button>
                                                </div>
                                          </div>
                                    </Popup>
                              </Marker>
                        ))}
                  </MapContainer>
            </div>
      );
};

export default ClubMap;
