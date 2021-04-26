import axios from "axios";
import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_MENU_ITEMS_FAIL,
  ADD_MENU_ITEMS_REQUEST,
  ADD_MENU_ITEMS_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_MENU_CATEGORY_FAIL,
  GET_MENU_CATEGORY_REQUEST,
  GET_MENU_CATEGORY_SUCCESS,
  GET_MENU_ITEMS_FAIL,
  GET_MENU_ITEMS_REQUEST,
  GET_MENU_ITEMS_SUCCESS,
  GET_MENU_ITEM_FAIL,
  GET_MENU_ITEM_REQUEST,
  GET_MENU_ITEM_SUCCESS,
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

export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/menu/category/${id}/delete`, config);

    dispatch({ type: DELETE_CATEGORY_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createMenuItem = (item) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_MENU_ITEMS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post("/api/menu/additems", item, config);

    dispatch({ type: ADD_MENU_ITEMS_SUCCESS });
  } catch (error) {
    dispatch({
      type: ADD_MENU_ITEMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMenuItems = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MENU_ITEMS_REQUEST });

    const { data } = await axios.get("/api/menu/items");

    dispatch({ type: GET_MENU_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MENU_ITEMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMenuItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MENU_ITEM_REQUEST });

    const { data } = await axios.get(`/api/menu/item/${id}`);

    dispatch({ type: GET_MENU_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MENU_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MENU_CATEGORY_REQUEST });

    const { data } = await axios.get("/api/menu/category");

    dispatch({ type: GET_MENU_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MENU_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
