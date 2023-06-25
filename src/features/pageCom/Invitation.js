import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography, Box, Card } from "@mui/material";
import "./Invitation.css"; // Import the CSS file for styling
import RsvpModal from "../../components/utils/RsvpModal";
import { GOOGLE_DRIVE_API, GOOGLE_FOLDER_ID } from "../../app/config";
import { useDispatch, useSelector } from "react-redux";
import { getImageList } from "./contentSlice";
import ImageCom from "./ImageCom";

function Invitation() {
  /* ---------------------------------- modal --------------------------------- */

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let random = null;
  /* ---------------------------- get random value ---------------------------- */
  const key = 1;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/FIN_0355.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Content for the first Grid item */}
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "white", paddingBottom: "6vh" }}
        >
          SAVE THE DATE
        </Typography>
        <Typography
          variant="script1"
          align="center"
          sx={{ color: "white", marginLeft: "-3rem" }}
        >
          <Typography variant="script4">G</Typography>
          oda Yusaku
          <Typography
            sx={{ paddingLeft: "0.7em", color: "white" }}
            variant="script3"
          >
            &
          </Typography>
        </Typography>
        <Typography
          variant="script1"
          align="center"
          sx={{ color: "white", paddingBottom: "6vh", marginLeft: "1rem" }}
        >
          Tran Minh Nhat
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: "white" }}>
          17:00PM SATURDAY
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: "white" }}>
          23 SEPTEMBER 2023
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          height: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{ paddingBottom: "6vh" }}
        >
          Together with their families,
          <Typography variant="h3" align="center">
            Maison De Charme - Restaurant & Events
          </Typography>
          Trần Xuân Soạn st, Tân Hưng ward, District 7, <br />
          Hồ Chí Minh city
        </Typography>
        <Card
          variant="outlined"
          sx={{
            padding: "0.5rem 1rem 0.5rem 1rem",
            borderRadius: "0.5rem",
            backgroundColor: "transparent",
            border: "1px solid #DFBB9D",
          }}
        >
          <Typography
            onClick={() => handleOpen()}
            variant="body1"
            align="center"
          >
            CLICK HERE TO RSVP
          </Typography>
        </Card>
      </Grid>
      <RsvpModal open={open} onClose={handleClose} />
    </Grid>
  );
}

export default Invitation;

// <Typography
// variant="h1"
// component="h2"
// align="center"
// sx={{ paddingBottom: "6vh" }}
// >
// INVITATION
// </Typography>
// <Typography
// variant="body1"
// component="h2"
// align="center"
// gutterBottom
// sx={{ paddingBottom: "6vh" }}
// >
// <Typography variant="letter2">S</Typography>ave the date:
// </Typography>
// <Typography
// variant="display1"
// component="h2"
// align="center"
// gutterBottom
// sx={{ paddingBottom: "6vh" }}
// >
// <Typography variant="letter">G</Typography>
// oda Yousaku
// <br /> &<br />
// <Typography variant="letter">T</Typography>ran Minh Nhat
// </Typography>
// <Typography
// variant="body1"
// align="center"
// gutterBottom
// sx={{ paddingBottom: "6vh" }}
// >
// <Typography variant="letter2">I</Typography>
// nvite you to celebrate their wedding on
// <br />
// <Typography variant="h2">17:00 Saturday 23.09.2023</Typography>
// <Typography variant="letter2">M</Typography>aison De Charme -
// Restaurant & Events
// <br /> <Typography variant="letter2">T</Typography>rần Xuân Soạn st,
// Tân Hưng ward, District 7, Hồ Chí Minh city
// </Typography>

// <Typography>
// <Button
//   onClick={handleOpen}
//   sx={{ maxWidth: "50%" }}
//   variant="outlined"
// >
//   <Typography
//     sx={{ fontSize: "12px" }}
//     variant="h1"
//     component="h1"
//     align="center"
//   >
//     Click here to RSVP
//   </Typography>
// </Button>
// </Typography>

// <RsvpModal open={open} onClose={handleClose} />
