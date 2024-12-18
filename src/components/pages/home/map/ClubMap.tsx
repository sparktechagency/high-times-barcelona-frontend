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
import { AutoComplete, Button, Input } from 'antd';
import { useState, useEffect } from 'react';
import ResetView from './ResetView';
import { BsStarFill } from 'react-icons/bs';
import Ganja from '@/assets/images/ganja.svg';

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
                  isOpen: true,
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
                  isOpen: true,
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
                  isOpen: true,
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
                  isOpen: true,
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
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                              }}
                              ref={setMap}
                        >
                              <div className="search-bar absolute top-4 left-1/2 transform -translate-x-1/2 md:left-20 md:translate-x-0 z-[1000]">
                                    <AutoComplete
                                          options={options}
                                          onSelect={(value) => setSearchQuery(value)}
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
                                    <Marker key={club.name} position={club.location} icon={customIcon}>
                                          <Popup>
                                                <div className="w-[213px]  h-full">
                                                      <div className="mb-2">
                                                            <Image
                                                                  src={club.image}
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
                                                            <h3 className="text-lg text-primary font-semibold mb-1">{club.name}</h3>

                                                            <div className="flex items-start gap-1 mb-1">
                                                                  <Clock color="#FFC313" size={18} />
                                                                  <span className="text-sm">{club.hours}</span>
                                                            </div>
                                                            <div className="flex items-start gap-1">
                                                                  <LuMapPin color="#FFC313" size={18} />
                                                                  <span className="text-sm">{club.address}</span>
                                                            </div>
                                                            <div className="flex justify-center my-4">
                                                                  <Button
                                                                        style={{
                                                                              width: '100%',
                                                                        }}
                                                                        iconPosition="end"
                                                                        icon={<Image src={Ganja} alt="Ganja" />}
                                                                        type="primary"
                                                                  >
                                                                        Join Now
                                                                  </Button>
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
