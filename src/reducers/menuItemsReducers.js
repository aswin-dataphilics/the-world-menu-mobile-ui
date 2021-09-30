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
  GET_OUTLETS_REQUEST,
  GET_OUTLETS_FAIL,
  GET_OUTLETS_SUCCESS,
  GET_MSTYPE_REQUEST,
  GET_MSTYPE_FAIL,
  GET_MSTYPE_SUCCESS,
  GET_MENU_BAR_REQUEST,
  GET_MENU_BAR_SUCCESS,
  GET_MENU_BAR_FAIL,
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

export const allMenuSectionReducer = (state = { menusections: [] }, action) => {
  switch (action.type) {
    case GET_MENU_SECTION_REQUEST:
      return { loading: true };
    case GET_MENU_SECTION_SUCCESS:
      return { loading: false, menusections: action.payload };
    case GET_MENU_SECTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuItemsReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS_REQUEST:
      return { ...state, loading: true };
    case GET_MENU_ITEMS_SUCCESS:
      return { loading: false, items: action.payload.items };
    case GET_MENU_ITEMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuItemReducer = (state = { item: {} }, action) => {
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

export const allMsTypeReducer = (state = { mstype: [] }, action) => {
  switch (action.type) {
    case GET_MSTYPE_REQUEST:
      return { ...state, loading: true };
    case GET_MSTYPE_SUCCESS:
      return {
        loading: false,
        mstype: action.payload,
        id: action.payload.id,
      };
    case GET_MSTYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allOutletsReducer = (state = { outlets: [] }, action) => {
  switch (action.type) {
    case GET_OUTLETS_REQUEST:
      return { loading: true, ...state };
    case GET_OUTLETS_SUCCESS:
      return { loading: false, outlets: action.payload };
    case GET_OUTLETS_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const getMenuBarReducer = (state = { category: [] }, action) => {
  switch (action.type) {
    case GET_MENU_BAR_REQUEST:
      return { loading: true, ...state };
    case GET_MENU_BAR_SUCCESS:
      return { loading: false, category: action.payload };
    case GET_MENU_BAR_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
