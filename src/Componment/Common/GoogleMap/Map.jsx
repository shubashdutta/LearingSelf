import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import {
  GOOGLE_MAPS_KEY,
  MAPS_DEFAULT_MARKER_CENTER,
} from "../../../unitls/MapData";

const Map = ({ mapsMarkerPosition, setMarkerPositions }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [markerData, setMarkerData] = useState(MAPS_DEFAULT_MARKER_CENTER);

  useEffect(() => {
    if (mapsMarkerPosition?.lat && mapsMarkerPosition?.lng) {
      setMarkerData({
        lat: mapsMarkerPosition.lat,
        lng: mapsMarkerPosition.lng,
        address: mapsMarkerPosition.address || "",
      });
    } else {
      setMarkerData(MAPS_DEFAULT_MARKER_CENTER);
    }
  }, [mapsMarkerPosition]);

  const onPlaceChange = () => {
    if (!autocomplete) return;

    const place = autocomplete.getPlace();
    if (place.geometry) {
      const newPosition = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        address: place.formatted_address,
      };
      setMarkerData(newPosition);
      setMarkerPositions(newPosition);
    } else {
      console.log("No geometry available for this place");
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_KEY.key} libraries={["places"]}>
      <div style={{ padding: "10px" }}>
        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChange}>
          <input
            type="text"
            value={markerData.address}
            onChange={(e) =>
              setMarkerData({ ...markerData, address: e.target.value })
            }
            placeholder="Search a location"
            style={{
              width: "100%",
              height: "32px",
              padding: "0 12px",
              borderRadius: "3px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              fontSize: "14px",
              outline: "none",
              textOverflow: "ellipsis",
            }}
          />
        </Autocomplete>

        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          center={markerData}
          zoom={12}
        >
          <Marker position={markerData} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
