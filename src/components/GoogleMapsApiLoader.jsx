import React, { useEffect, useState } from "react";

const GoogleMapsLoader = ({ children }) => {
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setApiLoaded(true); // Set state when API is loaded
      document.body.appendChild(script);
    } else {
      setApiLoaded(true); // If script already exists, set state to true
    }
  }, []);

  if (!apiLoaded) {
    return <div>Loading Google Maps API...</div>; // Placeholder while API loads
  }

  return <>{children}</>;
};

export default GoogleMapsLoader;
