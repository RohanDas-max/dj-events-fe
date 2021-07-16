import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";

const EventMap = ({ evt }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12,
  });

  useEffect(() => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(evt.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);

  if (loading) return false;
  console.log(lat, lng);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vt) => setViewport(vt)}
    >
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        <Image src="/images/pin.svg" height={30} width={30} />
      </Marker>
    </ReactMapGL>
  );
};

export default EventMap;
