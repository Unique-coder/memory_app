/* eslint-disable no-unused-vars */
import * as api from "../api/index.js";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the use

    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //log in the use

    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
