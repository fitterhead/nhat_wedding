import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
function Invitation() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item align="center">
        <Typography
          variant="h7"
          component="h2"
          align="center"
          sx={{ paddingBottom: "10vh" }}
        >
          INVITATION
        </Typography>
        <Typography variant="body2" component="h2" align="center" gutterBottom sx={{ paddingBottom: "10vh" }} >
          SAVE THE DATE!
        </Typography>
        <Typography variant="h8" component="h2" align="center" gutterBottom sx={{ paddingBottom: "10vh" }}>
          Goda Yousaku & Tran Minh Nhat
        </Typography>
        <Typography variant="body2" align="center" gutterBottom sx={{ paddingBottom: "10vh" }}>
          Invite you to celebrate their wedding on
          <br /> 17:00 Saturday 23.09.2023 <br />
          Maison De Charme - Restaurant & Events
          <br /> Trần Xuân Soạn st, Tân Hưng ward, District 7, Hồ Chí Minh city
        </Typography>
        <Button variant="contained">
          <Typography variant="h1" component="h2" align="center" gutterBottom>
            Click here to RSVP{" "}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Invitation;
