import React, { useState, useEffect, useCallback } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const styles = getStyles(theme);
  const location = useLocation();
  const nav = useNavigate();
  const handleScroll = useCallback(() => {
    if (!isMobile) {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsHidden(false); // Show navbar
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > window.innerHeight * 0.3
      ) {
        setIsHidden(true); // Hide navbar
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY, isMobile]); // Dependency array includes lastScrollY

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (props) => {
    nav(props);
  };
  const imageUrl = "/images/whitby-dental-clinic-logo.webp";
  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="navigation"
      aria-describedby="A navigation element for the home page"
    >
      <Stack direction="column" spacing={2} sx={{ p: 2, mt: "10%" }}>
        <Button sx={styles.buttonDrawer}>Home</Button>
        <Button sx={styles.buttonDrawer}>About</Button>
        <Button sx={styles.buttonDrawer}>
          Canadian Dental Care Plan (CDCP)
        </Button>
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
          <Typography variant="button" sx={{ textWrapMode: "nowrap" }}>
            BOOK ONLINE
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
  return (
    <Box
      sx={[
        styles.layout,
        isMobile && { position: "absolute" },
        !isMobile && {
          top: 0,
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.3s ease-in-out",
          zIndex: "10"
        },
      ]}
    >
      {!isMobile ? (
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"sticky"}
          backgroundColor={"#ffffff"}
          
          role="navigation"
          aria-describedby="A navigation element for the home page"
        >
          <Stack
            direction={"row"}
            width={"40vw"}
            justifyContent={"flex-end"}
            gap={"15%"}
          >
            <Button
              sx={[
                styles.button,
                location.pathname === "/" && { color: "black !important" },
              ]}
              onClick={() => handleClick("/")}
            >
              Home
            </Button>

            <Button
              sx={[
                styles.button,
                location.pathname === "/About" && { color: "black !important" },
              ]}
              onClick={() => handleClick("About")}
            >
              About
            </Button>

            <Button sx={[styles.button, { mr: "10%", textWrap: "nowrap" }]}>
              {!isTablet ? "Canadian Dental Care Plan (CDCP)" : "CDCP"}
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
            <img src={imageUrl} style={styles.image} alt="Whitby Dental Logo" />
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
              <Typography variant="button" sx={{ textWrapMode: "nowrap" }}>
                BOOK ONLINE
              </Typography>
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
            <img
              src={imageUrl}
              style={styles.imageMobile}
              alt="Whitby Dental Logo"
            />
          </Box>

          <IconButton
            color="Black"
            edge="end"
            sx={{ zIndex: "100", position: "fixed", right: "0", mr: "0" }}
            aria-label="Toggle drawer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
          >
            <Box
              sx={{
                width: "250px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconButton
                color="Black"
                sx={{ position: "fixed", top: 0, right: 0 }}
                onClick={() => setDrawerOpen(false)}
                aria-label="Toggle drawer close"
              >
                <CloseIcon fontSize="large" />
              </IconButton>

              {/* Drawer Content */}
              {drawerContent}
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

const getStyles = (theme) => ({
  layout: {
    height: "10vh",
    width: "100%",
    position: "sticky",
  },
  image: {
    width: "130px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  imageMobile: {
    width: "150px",
  },
  button: {
    alignitems: "center",
    height: "40px",
    color: "#BC0821",
    fontWeight: "600",
  },
  buttonDrawer: {
    alignitems: "center",
    height: "40px",
    color: "black",
    paddingBottom: "10px",
    borderRadius: "0",
    borderBottom: "1px rgb(0,0,0,0.2) solid",
  },
});
export default Header;
