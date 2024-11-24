import { useEffect, useState } from "react";
import { Rating, Box, Typography } from "@mui/material";

const RatingBox = () => {
  // eslint-disable-next-line
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

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
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    const cachedData = getFromCache("googleReviews");

    if (cachedData) {
      // Use cached data
      setReviews(cachedData.reviews);
      setAverageRating(cachedData.rating);
    } else {
      // Fetch reviews using Google PlacesService
      const fetchReviews = () => {
        const map = new window.google.maps.Map(document.createElement("div"));
        const service = new window.google.maps.places.PlacesService(map);

        service.getDetails(
          { placeId, fields: ["reviews", "rating"] },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              const reviews = place.reviews || [];
              const rating = place.rating || 0;

              setReviews(reviews);
              setAverageRating(rating);

              // Cache the fetched data
              saveToCache("googleReviews", { reviews, rating }, CACHE_DURATION);
            } else {
              console.error("Failed to fetch reviews:", status);
            }
          }
        );
      };

      if (window.google && window.google.maps) {
        fetchReviews();
      } else {
        console.error("Google Maps JavaScript API not loaded.");
      }
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        backgroundColor: "transparent",
        borderRadius: "8px",
        padding: "10px 10px 10px  0px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        maxWidth: "fit-content",
      }}
    >
      {/* Stars */}
      <Rating
        value={averageRating}
        precision={0.5}
        readOnly
        size="md"
        sx={{ color: "#ffb400" }}
      />

      {/* Numerical Rating */}
      <Typography
        component="a"
        href="https://www.google.com/search?q=whitby+dental+clinic&sca_esv=9bc7cd2d6745352a&hl=en&sxsrf=ADLYWIIhVZ4kcuoT2AiWCpMHyxNqqCNo_w%3A1732428707102&ei=o8NCZ8z5BYiv0PEP3JzfyAQ&oq=whitby+dent&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3doaXRieSBkZW50KgIIADIKECMYgAQYJxiKBTILEAAYgAQYkQIYigUyERAuGIAEGJECGMcBGIoFGK8BMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyBRAAGIAEMgoQABiABBhDGIoFMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAESJgOUABY5ghwAHgBkAEAmAGBAaABzgiqAQM1Lja4AQPIAQD4AQGYAgugAugIwgIQEAAYgAQYsQMYQxiDARiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEY1AIYigXCAhEQLhiABBixAxjRAxiDARjHAcICEBAuGIAEGEMYxwEYigUYrwHCAggQABiABBixA8ICCxAuGIAEGLEDGIMBwgIEECMYJ8ICChAuGIAEGEMYigXCAg4QLhiABBixAxjRAxjHAcICBRAuGIAEwgITEC4YgAQYQxjHARiYBRiKBRivAZgDAJIHAzUuNqAHt7YB&sclient=gws-wiz-serp#lrd=0x89d51f98d204197b:0xe709a77cfb57ac2a,1,,,,"
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer" // Adds security for external links
        variant="body2"
        sx={{
          color: "white", // Use parent text color
          textDecoration: "none", // Remove underline
          "&:hover": {
            textDecoration: "underline", // Add underline on hover
          },
        }}
      >
        5-Star reviews
      </Typography>
    </Box>
  );
};

export default RatingBox;
