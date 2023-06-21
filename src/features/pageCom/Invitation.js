import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./Invitation.css"; // Import the CSS file for styling
import RsvpModal from "../../components/utils/RsvpModal";
function Invitation() {
  const [showTypo1, setShowTypo1] = useState(false);
  const [showTypo2, setShowTypo2] = useState(false);
  const [showTypo3, setShowTypo3] = useState(false);
  const [showTypo4, setShowTypo4] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowTypo1(true);
    }, 0); // Delay for typo1: 0ms

    const timeout2 = setTimeout(() => {
      setShowTypo2(true);
    }, 100); // Delay for typo2: 1000ms (1 second)

    const timeout3 = setTimeout(() => {
      setShowTypo3(true);
    }, 200); // Delay for typo3: 2000ms (2 seconds)
    const timeout4 = setTimeout(() => {
      setShowTypo4(true);
    }, 300); // Delay for typo3: 2000ms (2 seconds)

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);
  /* ---------------------------------- modal --------------------------------- */

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          className={`typo1 ${showTypo1 ? "show" : ""}`}
          component="h2"
          align="center"
          sx={{ paddingBottom: "6vh" }}
        >
          INVITATION
        </Typography>
        <Typography
          className={`typo2 ${showTypo2 ? "show" : ""}`}
          variant="body1"
          component="h2"
          align="center"
          gutterBottom
          sx={{ paddingBottom: "6vh" }}
        >
          <Typography variant="letter2">S</Typography>ave the date:
        </Typography>
        <Typography
          className={`typo3 ${showTypo3 ? "show" : ""}`}
          variant="display1"
          component="h2"
          align="center"
          gutterBottom
          sx={{ paddingBottom: "6vh" }}
        >
          <Typography variant="letter">G</Typography>
          oda Yousaku
          <br /> &<br />
          <Typography variant="letter">T</Typography>ran Minh Nhat
        </Typography>
        <Typography
          className={`typo4 ${showTypo4 ? "show" : ""}`}
          variant="body1"
          align="center"
          gutterBottom
          sx={{ paddingBottom: "6vh" }}
        >
          <Typography variant="letter2">I</Typography>
          nvite you to celebrate their wedding on
          <br />
          <Typography variant="h2">17:00 Saturday 23.09.2023</Typography>
          <Typography variant="letter2">M</Typography>aison De Charme - Restaurant & Events
          <br /> <Typography variant="letter2">T</Typography>rần Xuân Soạn st, Tân Hưng ward, District 7, Hồ Chí Minh city
        </Typography>
        {/* <Button onClick={handleOpen} variant="contained">
          <Typography variant="h1" component="h2" align="center">
            Map
          </Typography>
        </Button> */}
        <Button onClick={handleOpen} variant="outlined">
          <Typography sx={{fontSize:"12px"}} variant="h1" component="h2" align="center">
            Click here to RSVP
          </Typography>
        </Button>
        <RsvpModal open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export default Invitation;
