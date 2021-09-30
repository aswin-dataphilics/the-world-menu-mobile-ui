import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducers";
import {
  allMenuSectionReducer,
  menuCategoriesReducer,
  deleteMenuCategoryReducer,
  menuItemsReducer,
  menuItemReducer,
  allMsTypeReducer,
  allOutletsReducer,
  getMenuBarReducer,
} from "./reducers/menuItemsReducers";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  outlets: allOutletsReducer,
  allMenusections: allMenuSectionReducer,
  menuCategories: menuCategoriesReducer,
  deleteMenuCategory: deleteMenuCategoryReducer,
  menuItems: menuItemsReducer,
  menuItem: menuItemReducer,
  allMsType : allMsTypeReducer,
  allMenuBar:getMenuBarReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
