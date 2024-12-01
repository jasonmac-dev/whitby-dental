import { useTheme } from "@emotion/react";
import {
  Box,
  Typography,
  Rating,
  Stack,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/less/pagination";
const ReviewTextBox = ({ data, loading }) => {
  const reviews = data || [];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const capitalizeFirstLetter = (val) => {
    if (!val) return "";
    return String(val)
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const SkeletonBox = () => (
    <Box
      bgcolor={"#F4F6F3"}
      borderRadius={"10px"}
      height={"15vh"}
      width={isMobile ? "auto" : "40%"}
      padding={2}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-between"
    >
      <Skeleton
        animation="wave"
        variant="rectangular"
        height="20px"
        width="50%"
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton
        animation="wave"
        variant="text"
        width="80%"
        sx={{ marginBottom: "10px" }}
      />
      <Skeleton animation="wave" variant="text" width="60%" />
    </Box>
  );
  return isMobile ? (
    <Box overflow={"visible"}>
      <style>
        {`
          .swiper-pagination {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            margin-top:20px;
          }
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: gray;
            opacity: 0.5;
            margin: 0 10px;
            border-radius: 50%;
            display: inline-block;
            transition: transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: black;
            transform: scale(1.2);
            opacity:0.3;
          }
        `}
      </style>
      <SwiperMobile reviews={reviews || []} />
    </Box>
  ) : (
    <Box display="flex" flexDirection="column" flex={1} gap={2}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection={!isMobile ? "row" : "column"}
        gap={2}
        width="100%"
        sx={{
          userSelect:"none",
          MozUserSelect:"none",
          msUserSelect: "none"
        }}
      >
        {!loading > 0
          ? reviews.slice(0, 2).map((review, index) => (
              <Box
                key={index}
                bgcolor={"#F4F6F3"}
                borderRadius={"10px"}
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
                  <Box>
                    <hr
                      style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "black",
                        border: "none",
                      }}
                    />
                    <Typography variant="body2" color="black" fontWeight="bold">
                      - {capitalizeFirstLetter(review.author_name)}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))
          : Array(2)
              .fill(0)
              .map((_, index) => <SkeletonBox key={index} />)}
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
        {!loading
          ? reviews.slice(2, 4).map((review, index) => (
              <Box
                key={index}
                bgcolor={"#F4F6F3"}
                borderRadius={"10px"}
                width={isMobile ? "auto" : "40%"}
                padding={2}
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                display={"flex"}
                flexDirection={"column"}
                sx={{
                  userSelect:"none",
                  MozUserSelect:"none",
                  msUserSelect: "none"
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
                  <Box>
                    <hr
                      style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "black",
                        border: "none",
                      }}
                    />
                    <Typography variant="body2" color="black" fontWeight="bold">
                      - {capitalizeFirstLetter(review.author_name)}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))
          : Array(2)
              .fill(0)
              .map((_, index) => <SkeletonBox key={index} />)}
      </Box>
    </Box>
  );
};

export const SwiperMobile = ({ reviews }) => {
  const capitalizeFirstLetter = (val) => {
    if (!val) return "";
    return String(val)
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      slideToClickedSlide={true}
      direction="horizontal"
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      autoplay={{
        delay: 3400,
        disableOnInteraction: false,
      }}
      watchSlidesProgress={true}
      centeredSlides={true}
      loop={reviews.length > 1}
      style={{ width: "100%", height: "fit-content", overflow: "visible" }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <Box
            key={index}
            bgcolor={"#F4F6F3"}
            borderRadius={"10px"}
            width={"auto"}
            padding={2}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            display={"flex"}
            flexDirection={"column"}
            height={"15vh"}
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
              <Box>
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                    border: "none",
                  }}
                />
                <Typography variant="body2" color="black" fontWeight="bold">
                  - {capitalizeFirstLetter(review.author_name)}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ReviewTextBox;
