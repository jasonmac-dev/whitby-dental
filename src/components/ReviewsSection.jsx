import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import ReviewTextBox from "./ReviewTextBox";
import { useTheme } from "@emotion/react";
const ReviewsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
  const data = getFromCache("googleReviews");
  return (
    <Box backgroundColor="#fff0">
      <Stack direction={"column"}>
        <Stack flex={1} gap={"3vh"} direction={isMobile? "column":"row"} p={"5%"} pt={"5vh"}>
          <Stack direction={"column"} flex={1}>
            <Typography
              variant="h4"
              fontSize={isMobile? "1.5rem !important":"2.5rem !important"}
              fontWeight={"700 !important"}
              lineHeight="1.2em !important"
              color="black"
              fontFamily={"'Noto Serif JP', Georgia, 'Times New Roman', serif"}
              textAlign={isMobile? "center": ""}
            >
              Generous words from our <br />
              patients
            </Typography>
          </Stack>
          <ReviewTextBox data={data?.reviews} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReviewsSection;
