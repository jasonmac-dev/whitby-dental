import React, { createContext, useContext, useState, useEffect } from "react";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const [maps, setMaps] = useState(null); // Google Maps API
  const [map, setMap] = useState(null); // Google Maps instance
   // eslint-disable-next-line
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(true)
  const saveToCache = (key, value, duration) => {
    const expiryTime = Date.now() + duration;
    const cachedData = {
      value, // The actual data to be cached
      expiry: expiryTime, // Expiry timestamp
    };
    localStorage.setItem(key, JSON.stringify(cachedData));
  };
  const getFromCache = (key) => {
    const cachedData = localStorage.getItem(key);

    if (cachedData) {
      const { value, expiry } = JSON.parse(cachedData);
      // Check if the cache has expired
      if (Date.now() > expiry) {
        localStorage.removeItem(key); // Clear expired cache
        return null; // Indicate that the cache is invalid
      }
      return value; // Return cached value if valid
    }

    return null; // No cache exists
  };

  useEffect(() => {
    const placeId = "ChIJexkE0pgf1YkRKqxX-3ynCec";
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    const fetchReviews = async () => {
      const cachedData = getFromCache("googleReviews");
      if (cachedData) {
        setLoading(false)
        setReviews(cachedData.reviews);
        setAverageRating(cachedData.rating);
        return;
      }

      try {
        if (!map || !maps) {
          return;
        }
        const service = new maps.places.PlacesService(map);
        service.getDetails(
          { placeId, fields: ["reviews", "rating"] },
          (place, status) => {
            if (status === maps.places.PlacesServiceStatus.OK) {
              const reviews = place.reviews || [];
              const rating = place.rating || 0;
              setReviews(reviews);
              setAverageRating(rating);
              setLoading(false)
              saveToCache("googleReviews", { reviews, rating }, CACHE_DURATION);
            } else {
              console.error("Failed to fetch reviews:", status);
            }
          }
        );
      } catch (err) {
        console.error("Error initializing PlacesService:", err);
      }
    };
    fetchReviews()
  }, [map, maps]);

  return (
    <GoogleMapsContext.Provider value={{ map, maps, setMap, setMaps, reviews, averageRating, loading }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);