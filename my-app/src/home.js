import React, { useRef } from 'react';
import {MapContainer, TileLayer, SVGOverlay} from 'react-leaflet';
import {render} from 'react-dom';
import './home.css';


function App() {

  const position = [51.505, -0.09]
  const bounds = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <circle r="5" cx="10" cy="10" fill="red" />
      </SVGOverlay>
    </MapContainer>
  );

}

export default App;