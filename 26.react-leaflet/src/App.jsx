import { Icon } from "leaflet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

// Coordenadas centrales y nivel de zoom inicial del mapa
const center = [0.8180362, -77.5892683];
const zoom = 15;

const markers = [
  { geocode: [0.8180362, -77.5892683], popUp: "Paylus Estudio 1" },
  { geocode: [0.8080362, -77.5692683], popUp: "Paylus Estudio 2" },
  { geocode: [0.8184362, -77.5895686], popUp: "Paylus Estudio 3" },
  { geocode: [0.8180962, -77.5992683], popUp: "Paylus Estudio 3" },
]

const markerIcon = new Icon({
  iconUrl: './paylus-estudio.png',
  iconSize: [38, 38],
  className: 'paylus-marker'
})

// Comp: muestra la posición actual del mapa
function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter()); // Posición actual del mapa

  // Fn: Reiniciar la vista del mapa a la posición y zoom inicial
  const onReset = useCallback(() => {
    map.setView(center, zoom);
  }, [map]);

  // Fn: actualizar la posición cuando el mapa se mueve
  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  // Efecto secundario al evento de movimiento del mapa
  useEffect(() => {
    map.on('move', onMove);
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  return (
    <p style={{ padding: '1rem' }}>
      Latitud: {position.lat.toFixed(4)}, longitud: {position.lng.toFixed(4)}{' '}
      <button onClick={onReset}>Reiniciar</button>
    </p>
  );
}

// Comp: maneja el estado del mapa y renderiza el contenedor del mapa
export default function App() {
  // Estado para almacenar la referencia del mapa
  const [map, setMap] = useState(null);

  // Memoizar el contenedor del mapa para evitar renderizaciones innecesarias
  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        ref={setMap}
        style={{ height: '90vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          {markers.map((marker, i) => (
            <Marker
              key={i}
              position={marker.geocode}
              icon={markerIcon}
            >
              <Popup><strong>{marker.popUp}</strong></Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    ),
    [], // Dependencias vacías para memoizar solo una vez
  );

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}
