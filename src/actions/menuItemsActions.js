import axios from "axios";
import { useSelector } from "react-redux";
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
  GET_MENU_SECTION_FAIL,
  GET_MENU_SECTION_REQUEST,
  GET_MENU_SECTION_SUCCESS,
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

    // const {
    //   userLogin: { userInfo },
    // } = getState();
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // const { data } = await axios.get("/api/menu/category", config);

    const { data } = await axios.post(
      "/api/restro/menu/category/get",
      {
        mstype: "6102267351c26a0004fb37d2",
        menuSection: "611b71fe463a110004339942",
      },
      config
    );
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

export const getMenuItems = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MENU_ITEMS_REQUEST });
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(
      `/api/mobileui/items`,
      { outletId: id },
      config
    );
    let items = data.data;
    dispatch({ type: GET_MENU_ITEMS_SUCCESS, payload: { items, id } });
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

export const getMenuSections = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MENU_SECTION_REQUEST });
    const config = {
      "Content-Type": "application/json",
    };
    const { data } = await axios.post(
      `/api/mobileui/menu/sections`,
      { outletId: id },
      config
    );
    console.log(data);
    dispatch({ type: GET_MENU_SECTION_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: GET_MENU_SECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
