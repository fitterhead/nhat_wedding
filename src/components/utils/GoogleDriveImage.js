import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { google } from "googleapis";

// Create a new instance of the Drive API client
const drive = google.drive({
  version: "v3",
  auth: "AIzaSyBpkC2eK8SMUeLqzVWrRdCfjcjaduPOwSM", // Replace with your own API key
});

const GoogleDriveImage = ({ fileId }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Retrieve the file metadata using the file ID
        const response = await drive.files.get({
          fileId: fileId,
          fields: "webContentLink",
        });

        // Extract the webContentLink from the response
        const { webContentLink } = response.data;

        // Set the image source URL
        setImageSrc(webContentLink);
      } catch (error) {
        console.error("Error retrieving image from Google Drive:", error);
      }
    };

    fetchImage();
  }, [fileId]);

  return (
    <Box sx={{ maxWidth: "100%" }}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Google Driv"
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </Box>
  );
};

export default GoogleDriveImage;
