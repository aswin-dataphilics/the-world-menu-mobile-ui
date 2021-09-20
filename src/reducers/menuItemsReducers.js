import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_RESET,
  ADD_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_RESET,
  ADD_MENU_ITEMS_REQUEST,
  ADD_MENU_ITEMS_SUCCESS,
  ADD_MENU_ITEMS_FAIL,
  ADD_MENU_ITEMS_RESET,
  GET_MENU_ITEMS_REQUEST,
  GET_MENU_ITEMS_SUCCESS,
  GET_MENU_ITEMS_FAIL,
  GET_MENU_ITEM_REQUEST,
  GET_MENU_ITEM_SUCCESS,
  GET_MENU_ITEM_FAIL,
  GET_MENU_SECTION_REQUEST,
  GET_MENU_SECTION_SUCCESS,
  GET_MENU_SECTION_FAIL,
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

export const deleteMenuCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { loading: true };
    case DELETE_CATEGORY_SUCCESS:
      return { loading: false, success: true };
    case DELETE_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

export const addMenuItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MENU_ITEMS_REQUEST:
      return { loading: true };
    case ADD_MENU_ITEMS_SUCCESS:
      return { loading: false, success: true };
    case ADD_MENU_ITEMS_FAIL:
      return { loading: false, error: action.payload };
    case ADD_MENU_ITEMS_RESET:
      return {};
    default:
      return state;
  }
};

export const menuItemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS_REQUEST:
      return { ...state, loading: true };
    case GET_MENU_ITEMS_SUCCESS:
      return { loading: false, items: action.payload };
    case GET_MENU_ITEMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuItemReducer = (state = { item: { category: {} } }, action) => {
  switch (action.type) {
    case GET_MENU_ITEM_REQUEST:
      return { ...state, loading: true };
    case GET_MENU_ITEM_SUCCESS:
      return { loading: false, item: action.payload };
    case GET_MENU_ITEM_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

export const allMenuCategoryReducer = (state = { menusections: [] }, action) => {
  switch (action.type) {
    case GET_MENU_SECTION_REQUEST:
      return { ...state, loading: true };
    case GET_MENU_SECTION_SUCCESS:
      return {
        loading: false,
        menusections: action.payload,
        id: action.payload.id,
      };
    case GET_MENU_SECTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
