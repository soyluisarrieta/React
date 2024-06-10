import { useCallback, useEffect, useMemo, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"

const center = [0.8216, 282.3678]
const zoom = 15

function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [map])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  return (
    <p style={{padding: '1rem'}}>
      Latitud: {position.lat.toFixed(4)}, longitud: {position.lng.toFixed(4)}{' '}
      <button onClick={onClick}>Reiniciar</button>
    </p>
  )
}

export function ExternalState() {
  const [map, setMap] = useState(null)

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        ref={setMap}
        style={{height: '90vh'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    [],
  )

  return (
    <div>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  )
}