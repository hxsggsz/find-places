import { MapProps } from './types'
import { Modal } from '../modal/modal'
import { gql, useQuery } from '@apollo/client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Image from 'next/image'
import styled from 'styled-components'
import { MapWrapper } from '.'

const QUERY = gql`
  query Pins {
    pins {
      id
      name
      image
      latitude
      longitude
      description
    } 
  }
`
const Styledimage = styled.div`
  /* width: 220px;
  height: 160px; */
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
`

export const Map = () => {
  const { data } = useQuery<MapProps>(QUERY)
  // utilizando o GraqhQL via client side porque
  // a lib de mapas Leaflet não tem compatibilidade
  // com server-side

  const pins = data?.pins

  return (
    <MapWrapper>
      <MapContainer center={[51.505, -0.09]} worldCopyJump={true} style={{ width: '100vw', height: '100vh' }} minZoom={2} zoom={2} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pins?.map(place => (
          <Marker key={place.id} position={[place.latitude, place.longitude]} title={place.name}>
            <Popup >
              <Modal.Container>
                <Modal.Title>
                  <h1>{place.name}</h1>
                </Modal.Title>
                <Modal.Body>
                  <p>{place.description}</p>
                  <Styledimage>
                    <Image style={{ borderRadius: 10 }} width={200} height={150} src={place.image} alt={place.name} />
                  </Styledimage>
                </Modal.Body>
              </Modal.Container>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  )
}

export default Map