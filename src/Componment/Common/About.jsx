import React, { useEffect, useState } from "react";
import { useModal } from "../context/SetModal";
import Services from "./Services";
import Map from "./GoogleMap/Map";
import { useForm } from "react-hook-form";
import { MAPS_DEFAULT_MARKER_CENTER } from "../../unitls/MapData";

const About = (rowData) => {
  const { setModal } = useModal();
  const { setValue, watch } = useForm({
    defaultValues: {
      longitude: "",
      latitude: "",
      location: "",
    },
  });
  const [mapsMarkerPosition, setMarkerPosition] = useState({});
  const value = watch();

  useEffect(() => {
    if (rowData) {
      setMarkerPosition({
        lat: +rowData?.latitude,
        lng: +rowData?.longitude,
        address: rowData?.location,
      });
    } else {
      setMarkerPosition(MAPS_DEFAULT_MARKER_CENTER);
    }
  }, [rowData]);

  useEffect(() => {
    if (mapsMarkerPosition) {
      setValue("longitude", mapsMarkerPosition?.lng || "");
      setValue("latitude", mapsMarkerPosition?.lat || "");
      setValue("location", mapsMarkerPosition?.address || "");
    }
  }, [mapsMarkerPosition]);

  const handleShow = () => {
    setModal("Add", <Services />, "sm");
  };
  return (
    <Map
      mapsMarkerPosition={mapsMarkerPosition}
      setMarkerPositions={setMarkerPosition}
    />
  );
};

export default About;
