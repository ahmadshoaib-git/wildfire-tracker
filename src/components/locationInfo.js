import React, { useState, useEffect } from 'react';
import crg from 'country-reverse-geocoding';
import Icon, { icon } from '@iconify/react';
import CloseIcon from '@iconify/icons-mdi/close-box';
import GlobeIcon from '@iconify/icons-mdi/globe';
import SourceIcon from '@iconify/icons-mdi/source-branch';
// https://maps.googleapis.com/maps/api/geocode/json?latlng=11.2742848,75.8013801&key=AIzaSyAhms0D3aH8vijX0zRA2SrhhgTtHEfXhBo
const LocationInfo = ({ info, closeInfo }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        console.log('Country ==> ', crg.country_reverse_geocoding().get_country(info.lat, info.lng))
    }, []);
    return (
        <div className="location-info">
            <h3>Event Location Info</h3>
            <div className="country-origin">
                <Icon icon={GlobeIcon} />
                <span>{crg.country_reverse_geocoding().get_country(info.lat, info.lng).name}</span>
            </div>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title.includes('Wildfire - ') ? info.title.replace('Wildfire - ', '') : info.title.replace('Wildfires - ', '')}</strong></li>
                <li>CATEGORY: <strong>{info.category}</strong></li>
            </ul>
            <div className="source-section">
                <Icon icon={SourceIcon} />
                <span>
                {
                    info.sources?.map(src => <a target="_blank" rel="noopener noreferrer" href={src.url} className="chip"> {src.id}</a>)
                }
                </span>
            </div>
            <div className="close-info">
                <Icon icon={CloseIcon} onClick={closeInfo} />
            </div>
        </div>
    );
}

export default LocationInfo;