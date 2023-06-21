import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import ImageCom from "./ImageCom";
function DressCode() {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const Circle = ({ color }) => (
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    ></Box>
  );
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        sx={12}
        spacing={2}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xl={12} md={12} xs={12} align="center">
          <Typography
            variant="h1"
            component="h2"
            align="center"
            // gutterBottom
            sx={{ paddingBottom: "5vh" }}
          >
            DRESS CODE
          </Typography>
        </Grid>
        <Grid item xl={12} md={12} xs={12} align="center">
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ paddingBottom: "5vh" }}
          >
            <Typography variant="letter2">D</Typography>ress code color palette
          </Typography>

          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xl={12}
            spacing={2}
            sx={{ paddingBottom: "7vh" }}
            gt
          >
            {colors.map((color, index) => (
              <Grid item key={index}>
                <Circle color={color} />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body1"
            component="h2"
            align="center"
            // gutterBottom
            // sx={{ paddingBottom: "5vh" }}
          >
            <Typography variant="letter2">W</Typography>e kindly request our
            guests to wear these colors for our special day.
          </Typography>
        </Grid>
        <Grid item xl={6} xs={6} align="center">
          <Typography variant="h1" align="center" gutterBottom>
            MEN
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <Typography variant="letter2">S</Typography>uit or a tuxedo with a
            dress shirt,
          </Typography>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Grid item xl={6} xs={6} align="center">
          <Typography variant="h1" align="center" gutterBottom>
            WOMAN
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            <Typography variant="letter2">L</Typography>ong gown or a cocktail
            dress.
          </Typography>
        </Grid>
      </Grid>
      <ImageCom data={8} />
    </Grid>
  );
}

export default DressCode;
