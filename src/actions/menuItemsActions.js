import axios from "axios";
import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../constants/menuItemsConstants";

export const createItemsCategory = (category) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_CATEGORY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post("/api/menu/addcategory", category, config);

    dispatch({ type: ADD_CATEGORY_SUCCESS });
  } catch (error) {
    dispatch({
      type: ADD_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMenuCategory = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_CATEGORY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/menu/category", config);

    dispatch({ type: GET_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
