import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
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
      >
        <Grid item xl={12} md={12} xs={12} align="center">
          <Typography variant="h7" component="h2" align="center" gutterBottom sx={{ paddingBottom: "10vh" }}>
            DRESS CODE
          </Typography>
        </Grid>
        <Grid item xl={12} md={12} xs={12} align="center">
          <Typography variant="h1" align="center" gutterBottom>
            Dress code color palette
          </Typography>

          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xl={12}
            spacing={2}
            gt
          >
            {colors.map((color, index) => (
              <Grid item key={index}>
                <Circle color={color} />
              </Grid>
            ))}
          </Grid>
          <Typography variant="body2" component="h2" align="center" gutterBottom sx={{ paddingBottom: "10vh" }}>
            We kindly request our guests to wear these colors for our special
            day.
          </Typography>
        </Grid>
        <Grid item xl={6} xs={6} align="center">
          <Typography variant="h1" align="center" gutterBottom>
            Men
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Suit or a tuxedo with a dress shirt,
          </Typography>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
        <Grid item xl={6} xs={6} align="center">
          <Typography variant="h1" align="center" gutterBottom>
            Woman
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Long gown or a cocktail dress.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DressCode;
