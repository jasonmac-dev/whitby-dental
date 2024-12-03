import { useTheme } from "@emotion/react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import SEOHead from "../components/Seo";

const About = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <SEOHead
        title="Whitby Dental Clinic - About"
        description="Welcome to Whitby Dental Clinic. Providing exceptional dental care for your family."
        keywords="dentist, Whitby, dental clinic, oral health, family dentistry"
        canonical="images/home.webp"
        image="/images/home.webp"
        page="About"
      />
      <Box>
        <Box sx={styles.imageContainer}>
          <Typography variant="h1">Welcome to Whitby Dental Clinic</Typography>
          <Typography variant="h6">
            Delivering Exceptional Dental Care with a Personal Touch
          </Typography>
        </Box>
        <Box
          sx={[
            styles.intro,
            isMobile && { flexDirection: "column", height: "fit-content" },
          ]}
        >
          <Box
            component={"img"}
            alt="Dentist in consulting room"
            loading="lazy"
            src="https://media.istockphoto.com/id/1371009338/photo/portrait-of-confident-a-young-dentist-working-in-his-consulting-room.jpg?s=612x612&w=0&k=20&c=I212vN7lPpAOwGKRoEY9kYWunJaMj9vH2g-8YBGc2MI="
            sx={{
              width: isMobile ? "100%" : "40%",
              height: "90%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <Stack direction={"column"} flex={1}>
            <Typography variant="h3" color="black">
              Dr. Atorina (Tina) Sotoadeh
            </Typography>
            <Typography variant="h6" color="black" mb={"5%"}>
              DMD, MSD
            </Typography>
            <Typography variant="body2" color="black">
              Dr. Sotoadeh, a dedicated general dentist, earned her Doctor of
              Dental Surgery from the University of Toronto. As a proud member
              of both the Ontario Dental Association and the Royal College of
              Dental Surgeons of Ontario, Dr. Sotoadeh upholds the highest
              standards of dental care. She continuously enriches her knowledge
              by attending advanced courses and lectures to stay at the
              forefront of modern dentistry. <br />
              <br />
              With a passion for all aspects of oral health, Dr. Sotoadeh is
              recognized for her comprehensive expertise and compassionate
              approach. Her practice, located at Whitby Dental Clinic, has been
              a trusted part of the community since she began working in Whitby
              in 1997. Known for creating a warm, welcoming environment, Dr.
              Sotoadeh takes pride in delivering exceptional care tailored to
              each patient’s needs. Schedule an appointment today and experience
              the personalized, friendly service that has made her a valued
              presence in the Whitby community.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export const getStyles = (theme) => ({
  imageContainer: {
    background:
      "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(/images/bg-service.webp)",
    width: "100%",
    height: "80vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  intro: {
    width: "inherit",
    height: "80vh",
    display: "flex",
    flexDirection: "row",
    padding: "5%",
    gap: "20px",
  },
});
export default About;
