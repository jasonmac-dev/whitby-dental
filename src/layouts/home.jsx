import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  Stack,
  ImageList,
  ImageListItem,
  Icon,
} from "@mui/material";
import Header, { RatingBox, ReviewsSection } from "../components";
import { useTheme } from "@emotion/react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useGoogleMaps } from "../context/GoogleMapsContext";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultCenter = { lat: 43.883436580934536, lng: -78.94318945767206 };
  const defaultZoom = 17;
  const { setMap, setMaps } = useGoogleMaps();
  const handleApiLoaded = ({ map, maps }) => {
    setMap(map);
    setMaps(maps); 
  };

  const Marker = ({ lat, lng, text }) => (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -100%)",
      }}
    >
      <img
        src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
        alt={text}
        style={{
          height: "40px",
          width: "25px",
        }}
      />
    </div>
  );

  const textOverview = {
    body: "We’re conveniently located in a central and easily accessible area in Whitby. Our clinic is situated in a professional office building, designed to provide a welcoming and comfortable environment for all our patients.",
    location: "301 Brock St N, Whitby, ON L1N 4H8, Canada",
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          backgroundImage:
            "url(https://whitbydentalclinic.com/wp-content/uploads/home.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "500px" : "80vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          display={"flex"}
          alignItems={"left"}
          justifyContent={isMobile ? "" : "center"}
          flexGrow={"1"}
          pl={"30px"}
          flexDirection={"column"}
          gap={"20px"}
          mt={isMobile ? "150px" : "200px"}
        >
          <RatingBox />
          <Typography variant="h1">WHITBY DENTAL CLINIC</Typography>
          <Typography variant="h3">We Care About Your Smile</Typography>
          <Button
            sx={{
              width: "180px",
              backgroundColor: "rgba(255, 0, 0)",
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.8)", // Slightly faded red on hover
              },
            }}
          >
            <Typography variant="button">BOOK ONLINE</Typography>
          </Button>
          <Box
            component={"a"}
            href="tel:9056687797"
            sx={{ textDecoration: "none", width: "180px" }}
          >
            <Typography variant="button"> Call (905) 668-7797</Typography>
          </Box>
        </Box>
      </Box>
      <ReviewsSection />
      <Box
        sx={{
          backgroundColor: "#E3E5E1",
          height: "fit-content",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          px: "10vw",
          py: "40px",
        }}
      >
        <Stack
          width={isMobile ? "100%" : "40%"}
          flex={1}
          justifyContent={"center"}
        >
          <ImageList
            sx={{
              width: isMobile ? "100%" : "30vw",
              height: "55vh",
              borderRadius: "20px",
            }}
            cols={2}
          >
            <ImageListItem rows={3}>
              <img
                src={`https://whitbydentalclinic.com/wp-content/uploads/chair-2584260_1920.jpg`}
                loading="lazy"
                alt=""
              />
            </ImageListItem>
            <ImageListItem rows={3}>
              <img
                src={`https://whitbydentalclinic.com/wp-content/uploads/chair-2584260_1920.jpg`}
                loading="lazy"
                alt=""
              />
            </ImageListItem>
            <ImageListItem rows={2}>
              <img
                src={`https://whitbydentalclinic.com/wp-content/uploads/chair-2584260_1920.jpg`}
                loading="lazy"
                alt=""
              />
            </ImageListItem>
            <ImageListItem rows={2}>
              <img
                src={`https://whitbydentalclinic.com/wp-content/uploads/chair-2584260_1920.jpg`}
                loading="lazy"
                alt=""
              />
            </ImageListItem>
          </ImageList>
        </Stack>
        <Stack
          width={isMobile ? "100%" : "60%"}
          pt="5vh"
          direction={"column"}
          gap={"3vh"}
          height={"80%"}
          flex={1}
        >
          <Typography variant="h2" color="black">
            Visit Us
          </Typography>
          <Typography variant="body1" color="black">
            {textOverview.body}
          </Typography>
          <Stack direction={"column"}>
            <Box display="flex" alignItems="flex-start">
              <Icon fontSize="large" sx={{ overflow: "unset" }}>
                <LocationOnIcon />
              </Icon>
              <Typography color="black" mt={0.5}>
                {textOverview.location}
              </Typography>
            </Box>
            <Typography
              component={"a"}
              href="https://www.google.com/maps/place/301+Brock+St+N,+Whitby,+ON+L1N+4H8,+Canada"
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" //
              sx={{
                color: "inherit",
                fontWeight: "bold",

                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Icon
                fontSize="large"
                sx={{ overflow: "unset", height: "fit-content" }}
              ></Icon>
              Get Directions
            </Typography>
            <Box display="flex" alignItems="flex-start">
              <Icon fontSize="large" sx={{ overflow: "unset" }}>
                <AccessTimeFilledIcon />
              </Icon>
              <Typography color="black" mt={0.5}>
                Monday: 9:15am – 4:00pm <br /> Tuesday: 11:00am – 7:00pm <br />
                Wednesday - Thursday: 9:15am – 4:00pm <br /> Friday: Closed{" "}
                <br />
                Saturday: 9:00am – 3:00pm
              </Typography>
            </Box>
            <Box pt={"2vh"} flexDirection={"row"} display={"flex"}>
              <Icon
                fontSize="large"
                sx={{ overflow: "unset", height: "fit-content" }}
              ></Icon>
              <RatingBox />
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box
        height={"30vh"}
        width={"79.85%"}
        pb={"10vw"}
        px="10vw"
        sx={{ bgcolor: (theme) => theme.palette.custom.Primary2 }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,libraries: "places", }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={handleApiLoaded}
        >
          <Marker lat={43.883436580934536} lng={-78.94318945767206} />
        </GoogleMapReact>
      </Box>
    </Box>
  );
};

export default Home;
