'use client';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, ViewState } from 'react-map-gl';
import MarkerImage from '@/assets/images/ganja-leaf.png';

import Image from 'next/image';
import { TClub } from '@/redux/features/club/clubApi';

const CustomMap: React.FC<{ club: TClub }> = ({ club }) => {
      const [viewport, setViewport] = useState<ViewState>({
            latitude: 23.7935,
            longitude: 90.437,
            zoom: 5,
            bearing: 0,
            pitch: 0,
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
      });

      useEffect(() => {
            if (club) {
                  setViewport({
                        latitude: club?.location?.latitude || 23.7935,
                        longitude: club?.location?.longitude || 90.437,
                        zoom: 5,
                        bearing: 0,
                        pitch: 0,
                        padding: { top: 0, bottom: 0, left: 0, right: 0 },
                  });
            }
      }, [club]);

      const handleViewportChange = (newViewport: ViewState) => {
            setViewport(newViewport);
      };

      return (
            <ReactMapGL
                  style={{ width: '100%', height: '200px', borderRadius: '10px' }}
                  {...viewport}
                  onMove={(evt) => handleViewportChange(evt.viewState)}
                  mapboxAccessToken="pk.eyJ1Ijoib2huYWRpciIsImEiOiJjbGYzbXB2cG4wcjNsM3FuZGkyeXgzaGp3In0.UW7J5lIaWc-P3nXa2WmRxQ"
                  mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                  <Marker longitude={club?.location?.longitude || 90.437} latitude={club?.location?.latitude || 23.7935} anchor="bottom">
                        <Image src={MarkerImage} alt="marker" width={50} height={50} />
                  </Marker>
            </ReactMapGL>
      );
};

export default CustomMap;
