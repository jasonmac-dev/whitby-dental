import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const styles = getStyles(theme);
  const imageUrl =
    "https://whitbydentalclinic.com/wp-content/uploads/whitby-dental-clinic-logo.png";
  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <Stack direction="column" spacing={2} sx={{ p: 2, mt: "10%" }}>
        <Button sx={styles.buttonDrawer}>Home</Button>
        <Button sx={styles.buttonDrawer}>About</Button>
        <Button sx={styles.buttonDrawer}>Canadian Dental Care Plan (CDCP)</Button>
        <Button sx={styles.buttonDrawer}>SERVICES</Button>
        <Button sx={styles.buttonDrawer}>CONTACT</Button>
        <Button
              sx={{
                backgroundColor: "rgba(255, 0, 0)",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.8)", // Slightly faded red on hover
                },
              }}
            >
              <Typography variant="button" sx={{textWrapMode:"nowrap"}}>BOOK ONLINE</Typography>
            </Button>
      </Stack>
    </Box>
  );
  return (
    <Box sx={[styles.layout, isMobile && { backgroundSize: "contain" }]}>
      {!isMobile ? (
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"row"}
            width={"40vw"}
            justifyContent={"flex-end"}
            gap={"15%"}
          >
            <Button sx={styles.button}>Home</Button>

            <Button sx={styles.button}>About</Button>

            <Button sx={[styles.button, { mr: "10%" }]}>
              Canadian Dental Care Plan (CDCP)
            </Button>
          </Stack>
          <Box
            sx={{
              flex: 1,
              maxWidth: "10%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={imageUrl} style={styles.image} alt="Logo" />
          </Box>
          <Stack direction={"row"} width={"42vw"} gap={"20%"}>
            <Button sx={[styles.button, { ml: "10%" }]}>SERVICES</Button>
            <Button sx={styles.button}>CONTACT</Button>
            <Button
              sx={{
                width: "180px",
                backgroundColor: "rgba(255, 0, 0)",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.8)", // Slightly faded red on hover
                },
              }}
            >
              <Typography variant="button" sx={{textWrapMode:"nowrap"}}>BOOK ONLINE</Typography>
            </Button>
          </Stack>
        </Stack>
      ) : (
        <>
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            width="100%"
          >
            <img src={imageUrl} style={styles.imageMobile} alt="" />
          </Box>

          <IconButton
            color="Black"
            edge="end"
            sx={{ zIndex: "10000", position: "absolute", right: "0", mr: "0" }}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
          >
            {drawerContent}
          </Drawer>
        </>
      )}
    </Box>
  );
};

const getStyles = (theme) => ({
  layout: {
    height: "10vh",
    width: "100vw",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  image: {
    width: "200px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  imageMobile: {
    width: "150px",
  },
  button: {
    alignitems: "center",
    height: "40px",
    color: "black",
  },
  buttonDrawer: {
    alignitems: "center",
    height: "40px",
    color: "black",
    paddingBottom:"10px",
    borderRadius: "0",
    borderBottom: "1px rgb(0,0,0,0.2) solid"
  }
});
export default Header;
