import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";
const Map = () => {
  const mapOptions = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 10,
  };

  const handleApiLoaded = (map, maps) => {
    const searchBox = new maps.places.SearchBox(
      document.getElementById("search-box")
    );

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }
      console.log("places :>> ", places[0].geometry.location.lat());
      console.log("places :>> ", places[0].geometry.location.lng());

      const place = places[0];
      map.setCenter(place.geometry.location);
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <input
        id="search-box"
        type="text"
        placeholder="Search for a location"
        style={{ position: "absolute", top: "20px", left: "30%", zIndex: 1 }}
      />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
          libraries: ["places"],
        }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <Marker key={0} position={{ lat: 23.0497594, lng: 72.51673 }} />
        <Marker key={1} position={{ lat: 21.1592889, lng: 72.6664031 }} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
