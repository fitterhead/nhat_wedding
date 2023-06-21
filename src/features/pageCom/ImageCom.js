import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getImageList } from "./contentSlice";
import { useEffect } from "react";
function ImageCom({ data }) {
  const imageList = useSelector((state) => state.content?.imageList);
  const randomList = useSelector((state) => state.content?.randomImageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageList());
  }, [dispatch]);

  //   const convertedKey = parseInt(key);
  //   console.log(data, "data");

  //   console.log(convertedKey,"convertedKey")
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      //   style={{ minHeight: "100vh" }}
    >
      {randomList?.slice(data, data + 2).map((item) => (
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              // maxWidth: "500px",
              // maxHeight: "500px",
              paddingBottom:"1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={item}
              alt={Math.random()}
              style={{
                maxWidth: "95%",
                maxHeight: "50%",
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ImageCom;
