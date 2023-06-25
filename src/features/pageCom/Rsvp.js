import React from "react";
import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
function Rsvp() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        // minHeight: "100vh",
        padding: "0rem",
        backgroundColor: "#F1DEC9",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
        align="center"
        // style={{ minHeight: "100vh" }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "auto", objectFit: "cover" }}
          image={"/header2.png"}
          // alt={item.imageAlt}
        />
        <Typography
          variant="body1"
          component="h2"
          align="center"
          sx={{ paddingTop: "5vh" }}
        >
          YES! I WOULDN’T MISSED IT
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          align="center"
          sx={{ paddingBottom: "5vh" }}
        >
          NO, SADLY DECLINES
        </Typography>
        <Typography
          variant="script3"
          component="h2"
          align="center"
          sx={{ paddingBottom: "10vh" }}
        >
          I promise to dance/sing if you play:
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Rsvp;
