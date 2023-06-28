import React from "react";
import {
  Modal,
  Button,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "60vh",
  bgcolor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  textAlign: "center", // Align text to center
  "@media screen and (max-width: 600px)": { width: "90vw", height: "90vh" },
};

function RsvpModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScfsJVF7AAB89pUZtvwNk7dQILJ_dEQk51q0P7Z1M4_ARUJSg/viewform?embedded=true"
          width="100%"
          title="Form"
          height="100%"
          // frameborder="0"
          // marginheight="0"
          // marginwidth="0"
        >
          Loading…
        </iframe>
      </Box>
    </Modal>
  );
}

export default RsvpModal;
