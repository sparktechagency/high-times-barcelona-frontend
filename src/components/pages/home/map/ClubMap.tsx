'use client';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L, { Map } from 'leaflet';
import MarkerImage from '@/assets/images/maps/marker.svg';
import MapCardImage from '@/assets/images/maps/map-card.jpg';

import Image from 'next/image';

import { Clock, Star } from 'lucide-react';
import { LuMapPin } from 'react-icons/lu';
import { AutoComplete, ConfigProvider, Input } from 'antd';
import ResetView from './ResetView';
import { useState, useEffect } from 'react';

const ClubMap = () => {
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
            <div className="container py-20">
                  <div className="relative">
                        <MapContainer center={[41.3851, 2.1734]} zoom={13} style={{ height: '600px', width: '100%' }} ref={setMap}>
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

                              {filteredClubs.map((club, index) => (
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
