/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'

const googleMapsAPIKey = process.env.NEXT_PUBLIC_API_KEY;

const Emergency = () => {
    const [map, setMap] = useState(null);
    const [petHospitals, setPetHospitals] = useState([]);
    const [userMarker, setUserMarker] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null);

    useEffect(() => {
        const initMap = () => {
            const googleMap = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 0, lng: 0 },
                zoom: 8,
            });
            setMap(googleMap);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    // Center the map on the user's location
                    googleMap.setCenter(userLocation);

                    // Add a custom marker for the user's location with a label
                    const userMarker = new window.google.maps.Marker({
                        position: userLocation,
                        map: googleMap,
                        label: {
                            text: 'Your Location',
                            fontWeight: 'bold',
                        },
                        icon: {
                            url: 'https://img.icons8.com/color/48/map-pin.png',
                            scaledSize: new window.google.maps.Size(30, 30),
                        },
                    });
                    setUserMarker(userMarker);

                    // Find pet hospitals near the user's location
                    const service = new window.google.maps.places.PlacesService(googleMap);
                    service.nearbySearch({
                        location: userLocation,
                        radius: 5000,
                        type: 'veterinary_care'
                    }, (results, status) => {
                        if (status === 'OK') {
                            setPetHospitals(results);

                            // Add markers for each pet hospital with a default marker
                            results.forEach((hospital) => {
                                const marker = new window.google.maps.Marker({
                                    position: hospital.geometry.location,
                                    map: googleMap,
                                    title: hospital.name,
                                });

                                // Add a click event to show directions to the hospital and display hospital info
                                marker.addListener('click', () => {
                                    calculateAndDisplayRoute(userLocation, hospital.geometry.location);
                                    showHospitalInfo(marker, hospital);
                                });
                            });
                        }
                    });
                }, (error) => {
                    console.error(error);
                });
            }
        };

        const calculateAndDisplayRoute = (origin, destination) => {
            const request = {
                origin: origin,
                destination: destination,
                travelMode: 'DRIVING',
            };
            const directionsService = new window.google.maps.DirectionsService();
            const directionsDisplay = new window.google.maps.DirectionsRenderer();

            directionsService.route(request, (result, status) => {
                if (status === 'OK') {
                    directionsDisplay.setDirections(result);
                    directionsDisplay.setMap(map);
                } else {
                    console.error('Directions request failed due to ' + status);
                }
            });
        };

        const showHospitalInfo = (marker, hospital) => {
            if (infoWindow) {
                infoWindow.close();
            }

            const newInfoWindow = new window.google.maps.InfoWindow({
                content: `
                    <div>
                        <h2>${hospital.name}</h2>
                        <p>Address: ${hospital.vicinity}</p>
                    </div>
                `,
            });

            newInfoWindow.open(map, marker);
            setInfoWindow(newInfoWindow);
        };

        if (window.google) {
            initMap();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&libraries=places`;
            script.onload = initMap;
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div style={{ height: '100vh' }}>
            <div style={{ height: '100%' }}>
                <div className='text-black' id="map" style={{ width: '100%', height: '100%' }}></div>
            </div>
        </div>
    );
}

export default Emergency;