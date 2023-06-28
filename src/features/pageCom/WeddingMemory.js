import React, { useEffect, useState } from "react";
import { Grid, Skeleton } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getImageList } from "./contentSlice";
import { Pagination } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const StyledImageList = styled(ImageList)(({ theme }) => ({
  // width: "100vw",
  height: 600,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    cols: 2,
  },
}));

const WeddingMemory = () => {
  const imageUrl = useSelector((state) => state.content?.imageUrl);
  const dispatch = useDispatch();

  /* ------------------------------- pagination ------------------------------- */

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const imagesPerPage = 6;
  const totalImages = imageUrl.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = imageUrl.slice(startIndex, endIndex);
  const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(getImageList());
  }, [dispatch]);

  /* ------------------------------- change page ------------------------------ */
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [totalPages]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        // minHeight: "60vh",
        padding: "0rem 1rem 6rem 1rem",
      }}
      spacing={2}
    >
      <Grid item md={12} xs={12}>
        <Typography variant="h2" align="center" gutterBottom>
          PRE-WEDDING PHOTOS
        </Typography>
        <StyledImageList
          variant="quilted"
          cols={isScreenSmall ? 2 : 3}
          rows={1}
          rowHeight="50%"
          // sx={{minHeight:"600px"}}
        >
          {currentImages.map((item) => (
            <ImageListItem
              key={item}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              {isLoading ? (
                <Skeleton variant="rectangular" 
                height={121}
                 />
              ) : (
                <img
                  src={item}
                  // src={`https://drive.google.com/uc?id=${item.id}`}
                  height={121}
                  alt={item}
                  loading="lazy"
                  onLoad={handleImageLoad}
                />
              )}
            </ImageListItem>
          ))}
        </StyledImageList>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          // variant="outlined"
          // shape="rounded"
          color="primary"
          style={{display:"flex",justifyContent:"center"}}
        />
      </Grid>
      {/* <Grid item md={12} xs={12}>
        <Typography variant="h2" align="center" gutterBottom>
          CEREMONY PHOTOS
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
      </Grid> */}
      
    </Grid>
  );
};

export default WeddingMemory;
