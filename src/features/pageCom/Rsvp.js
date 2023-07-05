import React, { useState } from "react";
import {
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
  Card,
  Paper,
} from "@mui/material";
import RsvpModal from "../../components/utils/RsvpModal";
function Rsvp() {
  /* ---------------------------------- modal --------------------------------- */

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let random = null;
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "50vh",
        padding: "0rem 0rem 6rem 0rem",
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
        style={{ maxWidth: "400px" }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            paddingBottom: "2vh",
          }}
          image={"/header2.png"}
          // alt={item.imageAlt}
        />

        {/* <Card
        hover
          variant="outlined"
          style={{
            cursor: "pointer",
            margin: "0rem 6rem 0rem 6rem",
          }}
          sx={{
            padding: "0.5rem 1rem 0.5rem 1rem",
            borderRadius: "0.5rem",
            backgroundColor: "transparent",
            border: "1px solid #DFBB9D",
          }}
        > */}

        <Typography
          style={{
            cursor: "pointer",
            paddingLeft: "1rem",
            fontSize: "20px",
          }}
          onClick={() => handleOpen()}
          variant="body2"
          align="center"
        >
          <Button variant="outlined">Click here to RSVP</Button>
        </Typography>

        {/* </Card> */}
      </Grid>
      <RsvpModal open={open} onClose={handleClose} />
    </Grid>
  );
}

export default Rsvp;
