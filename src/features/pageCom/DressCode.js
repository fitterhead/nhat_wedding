import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import ImageCom from "./ImageCom";
function DressCode() {
  const colors = [
    "#F19176",
    "#000000",
    "#8D8E65",
    "#BF4A33",
    "#BD6A44",
    "#9ABCB3",
    "#666A3F",
    "#68141B",
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
        style={{
          minHeight: "70vh",
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="script2"
          component="h2"
          align="center"
          sx={{ paddingTop: "10vh" }}
        >
          Dresscode
        </Typography>
        <Typography
          variant="body1"
          component="h2"
          align="center"
          // sx={{ paddingBottom: "5vh" }}
        >
          PLEASE COME IN FORMAL ATTIRE
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
              Evening gown, cocktail dress or dressy jumpsuit
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
          sx={{ padding: "5vh" }}
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
          We kindly encourage our guests to dress in our color pallete on our
          special day
        </Typography>
      </Grid>
    </Grid>
  );
}

export default DressCode;
