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
  // width: 400,
  bgcolor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  textAlign: "center", // Align text to center
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
          src="https://docs.google.com/forms/d/e/1FAIpQLSegjJuyOPn-iroOTshqxF5FtKULd8j8dzn_rNw_zWIx4YWfZg/viewform?embedded=true"
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
