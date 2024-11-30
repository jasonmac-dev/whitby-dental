import { Rating, Box, Typography,Skeleton } from "@mui/material";
import { useGoogleMaps } from "../context/GoogleMapsContext";
const RatingBox = () => {
  const { averageRating, loading } = useGoogleMaps();
  return loading ? (
    <Skeleton
    animation="wave"
    variant="rectangular"
    height="45px"
    width="13%"
    sx={{ marginBottom: "10px", borderRadius:"10px" }}
  />
  ) : (
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
        Google Reviews
      </Typography>
    </Box>
  );
};

export default RatingBox;
