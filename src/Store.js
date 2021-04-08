import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducers";
import {
  addMenuCategoryReducer,
  menuCategoriesReducer,
} from "./reducers/menuItemsReducers";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  addMenuCategory: addMenuCategoryReducer,
  menuCategories: menuCategoriesReducer,
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
