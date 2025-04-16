export const GOOGLE_MAPS_KEY = Object.freeze({
  key: "AIzaSyC_jDlfRb0lO5o1NZh2PxwwB1OtHUnrTVw",
});

export const MAPS_GEO_CODE_API = (lat, lng) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_KEY.key}&sensor=true`;

export const MAPS_DEFAULT_MARKER_CENTER = {
  lat: 27.7103145,
  lng: 85.3221634,
  address: "Kathmandu, Nepal",
};
