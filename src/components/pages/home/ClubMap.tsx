'use client';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerImage from '@/assets/images/maps/marker.svg';
import MapCardImage from '@/assets/images/maps/map-card.jpg';

import Image from 'next/image';

import { Clock, Star } from 'lucide-react';
import { LuMapPin } from 'react-icons/lu';
import { Input } from 'antd';
import ResetView from './map/ResetView';

const ClubMap = () => {
      const clubs = [
            {
                  name: 'Cannabis Barcelona',
                  location: [41.3851, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'Carrer de Sant Pere M s Baix, 7-9, 08003 Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
            },
            {
                  name: 'Green Point Cannabis Club',
                  location: [41.3962, 2.1963] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'Carrer de Girona, 120, 08009 Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
            },
      ];

      const customIcon = new Icon({
            iconUrl: MarkerImage.src,
            iconSize: [50, 50],
      });

      return (
            <div className="container py-20">
                  <div className="relative">
                        <MapContainer center={[41.3851, 2.1734]} zoom={13} style={{ height: '600px', width: '100%' }}>
                              {/* Search Bar */}
                              <div className="search-bar absolute top-4 left-20 z-[1000]">
                                    <Input
                                          placeholder="Search clubs..."
                                          style={{
                                                height: 46,
                                                borderRadius: 24,
                                                backgroundColor: '#fff',
                                                borderColor: 'transparent',
                                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                          }}
                                          suffix={<ResetView center={[41.3851, 2.1734]} />}
                                    />
                              </div>

                              {/* MapContainer */}
                              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                              {/* Reset View Button */}

                              {/* Club Markers */}
                              {clubs.map((club, index) => (
                                    <Marker key={index} position={club.location} icon={customIcon}>
                                          <Popup className="w-[300px] bg-white border rounded-xl border-primary">
                                                <div className="relative">
                                                      {/* Rating Badge */}
                                                      <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
                                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                            <span className="font-semibold text-sm">4.9</span>
                                                      </div>

                                                      {/* Main Image */}
                                                      <Image
                                                            src={club.image}
                                                            alt={club.name}
                                                            width={400}
                                                            height={300}
                                                            className="w-full h-48 object-cover rounded-xl"
                                                      />
                                                      <div className="my-2">
                                                            {/* Title */}
                                                            <h3 className="text-xl font-bold text-emerald-600">{club.name}</h3>
                                                            <div className="flex items-start gap-2">
                                                                  <p>
                                                                        <LuMapPin size={20} className="text-secondary mr-2" />
                                                                  </p>
                                                                  <p className="text-[17px]">{club.address}</p>
                                                            </div>
                                                            <div className="flex items-start gap-2 -mt-5">
                                                                  <p>
                                                                        <Clock size={20} className="text-secondary mr-2" />
                                                                  </p>
                                                                  <p className="text-[17px]">{club.openingHour + ' - ' + club.endHour}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </Popup>
                                    </Marker>
                              ))}
                        </MapContainer>
                  </div>
            </div>
      );
};

export default ClubMap;
