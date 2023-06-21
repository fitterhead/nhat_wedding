import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { GOOGLE_DRIVE_API, GOOGLE_FOLDER_ID } from "../../app/config";
import axios from "axios";

const initialState = {
  isloading: false,
  error: null,
  imageList: [],
  randomImageList: [],
};

const slice = createSlice({
  name: "content",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getImageListSuccess(state, action) {
      state.isLoading = false;
      state.imageList = action.payload;
    },
    getRandomListSuccess(state, action) {
      state.isLoading = false;
      state.randomImageList = action.payload;
    },
  },
});

export default slice.reducer;

/* -------------------------------------------------------------------------- */
/*                              get list of image                             */
/* -------------------------------------------------------------------------- */

export const getImageList = () => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${GOOGLE_FOLDER_ID}'+in+parents&key=${GOOGLE_DRIVE_API}`;

  try {
    const response = await axios.get(apiUrl);
    dispatch(slice.actions.getImageListSuccess(response.data.files));
    dispatch(randomImageList(response.data.files));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
};

export const randomImageList = (array) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  const randomValues = [];

  try {
    while (randomValues.length < 10) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomValue = array[randomIndex];
      if (!randomValues.includes(randomValue)) {
        const imageUrl = `https://drive.google.com/uc?id=${randomValue.id}`;

        randomValues.push(imageUrl);
      }
    }
    dispatch(slice.actions.getRandomListSuccess(randomValues));
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
  }
};
