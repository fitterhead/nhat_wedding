import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
function Rsvp() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item align="center">
        <Typography
          variant="h1"
          component="h2"
          align="center"
          gutterBottom
          sx={{ paddingBottom: "10vh" }}
        >
          KINDLY RESPOND
        </Typography>

        <Typography
          variant="h1"
          component="h2"
          align="center"
          gutterBottom
          sx={{ paddingBottom: "10vh" }}
        >
          YES! WOULDN’T MISS IT <br />
          NO, SADLY DECLINES
          <br /> I promise to dance/sing if you play:
        </Typography>

        <Button variant="contained">
          <Typography variant="h1" component="h2" align="center" gutterBottom>
            QR DONATE CODE
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Rsvp;
