import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import ImageCom from "./ImageCom";
function DressCode() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "orange",
    "orange",
  ];
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
      style={{
        // minHeight: "100vh",
        padding: "0rem 1rem 0rem 1rem",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        align="center"
        style={{ minHeight: "80vh" }}
      >
        <Typography
          variant="script2"
          component="h2"
          align="center"
          // sx={{ paddingTop: "10vh" }}
        >
          Dresscode
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          align="center"
          // sx={{ paddingBottom: "5vh" }}
        >
          PLEASE COME IN FORMAR ATTIRE
        </Typography>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          // sx={{ padding: "1rem" }}
        >
          <Grid item xl={5} xs={5} align="center" sx={{ padding: "1rem" }}>
            <img
              src="/man.png"
              alt="Timeline"
              style={{ width: "auto", height: "30px" }}
            />
            <Typography variant="body1" align="center" gutterBottom>
              Suit, tuxedo, bow or tie ( optional ) and dress shoes
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item xl={5} xs={5} align="center" sx={{ padding: "1rem" }}>
            <img
              src="/woman.png"
              alt="Timeline"
              style={{ width: "auto", height: "30px" }}
            />
            <Typography variant="body1" align="center" gutterBottom>
              Evening gown, coktail dress or dressy jumpsuit
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xl={12}
          spacing={2}
          sx={{ padding: "3vh " }}
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
          sx={{ paddingBottom: "5vh" }}
        >
          We kindly encourage our guests to dress in our color palete on our
          special day
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DressCode;
