import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_RESET,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../constants/menuItemsConstants";

export const addMenuCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return { loading: true };
    case ADD_CATEGORY_SUCCESS:
      return { loading: false, success: true };
    case ADD_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    case ADD_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

export const menuCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case GET_CATEGORY_SUCCESS:
      return { loading: false, categories: action.payload };
    case GET_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
