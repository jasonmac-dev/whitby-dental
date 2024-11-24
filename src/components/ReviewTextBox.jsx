import { useTheme } from "@emotion/react";
import { Box, Typography, Rating, Stack, useMediaQuery } from "@mui/material";

const ReviewTextBox = (props) => {
  const reviews = props.data;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const capitalizeFirstLetter = (val) => {
    if (!val) return "";
    return String(val)
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Box display="flex" flexDirection="column" flex={1} gap={2}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={!isMobile ? "row" : "column"}
        gap={2}
        width="100%"
      >
        {reviews.slice(0, 2).map((review, index) => (
          <Box
            key={index}
            bgcolor={"#F4F6F3"}
            borderRadius={"10px"}
            height={"15vh"}
            width={isMobile ? "auto" : "40%"}
            padding={2}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            display={"flex"}
            flexDirection={"column"}
            sx={{
              color: (theme) => theme.palette.custom.textFaded,
            }}
          >
            <Rating
              value={review?.rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ color: "#ffb400", my: "10px" }}
            />
            <Stack
              flexDirection={"column"}
              justifyContent={"space-between"}
              height={"100%"}
            >
              <Typography
                variant="body2"
                color="black"
                sx={{ fontWeight: "600" }}
              >
                {review.text}
              </Typography>

              <Typography variant="body2" color="black" fontWeight="bold">
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                    border: "none",
                  }}
                />
                - {capitalizeFirstLetter(review.author_name)}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={!isMobile ? "row" : "column"}
        gap={2}
        width="100%"
        sx={{
            color: (theme) => theme.palette.custom.textFaded,
          }}
      >
        {reviews.slice(2, 4).map((review, index) => (
          <Box
            key={index}
            bgcolor={"#F4F6F3"}
            borderRadius={"10px"}
            height={"15vh"}
            width={isMobile ? "auto" : "40%"}
            padding={2}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            display={"flex"}
            flexDirection={"column"}
          >
            <Rating
              value={review?.rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ color: "#ffb400", my: "10px" }}
            />
            <Stack
              flexDirection={"column"}
              justifyContent={"space-between"}
              height={"100%"}
            >
              <Typography
                variant="body2"
                color="black"
                sx={{ fontWeight: "600" }}
              >
                {review.text}
              </Typography>

              <Typography variant="body2" color="black" fontWeight="bold">
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                    border: "none",
                  }}
                />
                - {capitalizeFirstLetter(review.author_name)}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewTextBox;