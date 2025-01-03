import { GoogleMap, LoadScript } from "@react-google-maps/api";

const EducationalContactMap = () => {
  const mapContainerStyle = {
    width: "600px",
    height: "450px",
  };

  const center = {
    lat: 44.4268, // Latitude for Bucharest
    lng: 26.1025, // Longitude for Bucharest
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
};

export default EducationalContactMap;
