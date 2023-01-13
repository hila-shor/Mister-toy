import React, { useState } from "react"
import GoogleMapReact from 'google-map-react'
import { utilService } from "../services/util.service.js"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export function GoogleMap() {

    const [coordinates, setCoordinates] = useState(getStoresLocations())
    const zoom = 11
    const defaultProps = {
      center: {
        lat: 32.08662,
        lng: 34.88512
      },
      zoom: 11
    }


    const handleClick = ({lat, lng }) => {
        setCoordinates( { lat, lng })
    }
    console.log(coordinates)

    function getStoresLocations(){
      const storesLocations=[
        { lat:32.08662, lng: 34.88512},
        {lat:32.0158 , lng:34.7874},
        { lat: 32.0853, lng: 34.7818 },
      ]
      return storesLocations
    }
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh', width: '90%', margin: 'auto' }}>
              <GoogleMapReact
                  onClick={handleClick}
                  bootstrapURLKeys={{ key: "AIzaSyBusihgRP4H-6UOz3ANoEylK57I2PBJ5Nw" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}>
                {coordinates.map((coordinate) =>
                  <AnyReactComponent key={utilService.makeId(3)}
                      lat={coordinate.lat}
                      lng={coordinate.lng}
                      text="🍎"/>
                )}
              </GoogleMapReact>

        </div>
    )   
}
