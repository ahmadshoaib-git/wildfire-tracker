import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './locationMarker';
import LocationInfoBox from './locationInfo';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const closeInfo = () => {
        setLocationInfo(null);
    }
    console.log("eventData >", eventData);
    let markers = [];
    eventData.forEach(ev => {
        if (ev.categories[0].id === 8) {
            ev.geometries.forEach(geo => {
                markers.push(
                    <LocationMarker
                        lat={geo.coordinates[1]}
                        lng={geo.coordinates[0]}
                        onClick={() => {
                            setLocationInfo(null);
                            setTimeout(function(){ 
                                setLocationInfo({
                                    id: ev.id,
                                    title: ev.title,
                                    sources: ev.sources,
                                    lat: geo.coordinates[1],
                                    lng: geo.coordinates[0],
                                    category: ev.categories[0].title
                                })
                             }, 100);
                        }}
                    />
                );
            })
        }
    });
    const MAP_KEY = 'YOUR_GOOGLE_MAP_KEY';
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: MAP_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {/* <LocationMarker lat={center.lat} lng={center.lng}/> */}
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} closeInfo={closeInfo} />}
        </div>
    );
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}
export default Map;