import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledImageList = styled(ImageList)(({ theme }) => ({
  // width: 500,
  // height: 450,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const WeddingMemory = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?limit=24");
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchImageData();
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      spacing={2}
    >
      <Grid item md={6} xs={12}>
        <Typography variant="h1" align="center" gutterBottom>
          Pre-wedding photos
        </Typography>
        <StyledImageList variant="quilted" cols={4} rowHeight={121}>
          {imageData.slice(0, 12).map((item) => (
            <ImageListItem
              key={item.id}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.download_url, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </StyledImageList>
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="h1" align="center" gutterBottom>
          Ceremony photos
        </Typography>
        <StyledImageList variant="quilted" cols={4} rowHeight={121}>
          {imageData.slice(12, 24).map((item) => (
            <ImageListItem
              key={item.id}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.download_url, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </StyledImageList>
      </Grid>
    </Grid>
  );
};

export default WeddingMemory;
