'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L, { Map } from 'leaflet';
import MarkerImage from '@/assets/images/maps/marker.svg';
import MapCardImage from '@/assets/images/maps/map-card.jpg';
import Image from 'next/image';
import { Clock, Star } from 'lucide-react';
import { LuMapPin } from 'react-icons/lu';
import { AutoComplete, Input } from 'antd';
import { useState, useEffect } from 'react';
import ResetView from './ResetView';

const ClubMap = ({ selectedClub }: { selectedClub: string | null }) => {
      const [searchQuery, setSearchQuery] = useState('');
      const [map, setMap] = useState<Map | null>(null);

      const clubs = [
            {
                  name: 'Cannabis Barcelona',
                  location: [41.3851, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'Carrer, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
            },
            {
                  name: 'Green Point Cannabis Club',
                  location: [41.3962, 2.1963] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'De Girona, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
            },
            {
                  name: 'Five For Club',
                  location: [41.4044, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'Carrer, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
            },
            {
                  name: 'Cannabis Social Club',
                  location: [41.4054, 2.2023] as [number, number],
                  rating: 4.8,
                  hours: '11:00 - 23:00',
                  address: 'Carrer de la Marina, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '11:00',
                  endHour: '23:00',
            },
            {
                  name: 'The Green Cloud',
                  location: [41.3934, 2.1654] as [number, number],
                  rating: 4.7,
                  hours: '12:00 - 22:00',
                  address: 'Carrer de Valldonzella, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '12:00',
                  endHour: '22:00',
            },
            {
                  name: 'Green Planet',
                  location: [41.3894, 2.1943] as [number, number],
                  rating: 4.8,
                  hours: '10:00 - 00:00',
                  address: 'Carrer de la Llibreteria, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
            },
            {
                  name: 'The Joint',
                  location: [41.3954, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '11:00 - 23:00',
                  address: 'Carrer de Petrixol, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '11:00',
                  endHour: '23:00',
            },
      ];

      const customIcon = new Icon({
            iconUrl: MarkerImage.src,
            iconSize: [50, 50],
      });

      const filteredClubs = clubs.filter(
            (club) =>
                  club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  club.address.toLowerCase().includes(searchQuery.toLowerCase())
      );

      useEffect(() => {
            if (map && filteredClubs.length > 0) {
                  if (filteredClubs.length === 1) {
                        // Zoom to single result
                        map.setView(filteredClubs[0].location, 15);
                  } else {
                        // Create bounds for multiple results
                        const bounds = filteredClubs.reduce((bounds, club) => {
                              bounds.extend(club.location);
                              return bounds;
                        }, new L.LatLngBounds(filteredClubs[0].location, filteredClubs[0].location));
                        map.fitBounds(bounds, { padding: [50, 50] });
                  }
            }
      }, [filteredClubs, map]);

      useEffect(() => {
            if (map && selectedClub) {
                  const club = clubs.find((c) => c.name === selectedClub);
                  if (club) {
                        map.setView(club.location, 15);
                  }
            }
      }, [selectedClub, map]);

      const options = filteredClubs.map((club) => ({
            value: club.name,
            label: (
                  <div className="flex items-center gap-2">
                        <Image src={club.image} alt={club.name} width={30} height={30} className="rounded-full" />
                        {club.name}
                  </div>
            ),
      }));

      return (
            <div className="h-full">
                  <div className="h-full">
                        <MapContainer
                              center={[41.3851, 2.1734]}
                              zoom={13}
                              style={{
                                    height: 710,
                                    width: '100%',
                                    borderRadius: '10px',
                                    overflow: 'hidden', // Crucial to enforce borderRadius
                              }}
                              ref={setMap}
                        >
                              <div className="search-bar absolute top-4 left-20 z-[1000]">
                                    <AutoComplete
                                          options={options}
                                          onSelect={(value) => setSearchQuery(value)}
                                          onSearch={(value) => setSearchQuery(value)}
                                          style={{
                                                height: 46,
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

                              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                              {filteredClubs.map((club) => (
                                    <Marker key={club.name} position={club.location} icon={customIcon}>
                                          <Popup>
                                                <div className="w-[250px]">
                                                      <div className="relative h-[120px] mb-2">
                                                            <Image
                                                                  src={club.image}
                                                                  alt={club.name}
                                                                  fill
                                                                  className="object-cover rounded-lg"
                                                            />
                                                      </div>
                                                      <div>
                                                            <h3 className="text-lg font-semibold mb-1">{club.name}</h3>
                                                            <div className="flex items-center gap-1 mb-1">
                                                                  <Star size={14} className="text-yellow-400" />
                                                                  <span className="text-sm">{club.rating}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1 mb-1">
                                                                  <Clock size={14} className="text-gray-500" />
                                                                  <span className="text-sm">{club.hours}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                  <LuMapPin size={14} className="text-gray-500" />
                                                                  <span className="text-sm">{club.address}</span>
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
