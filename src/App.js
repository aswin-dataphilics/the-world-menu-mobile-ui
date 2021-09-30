import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Box,
  Grid,
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./Store";
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";
import MenuItemsScreen from "./Screens/MenuItemsScreen";
import FoodDetailsScreen from "./Screens/FoodDetailsScreen";
import LoginScreen from "./Screens/LoginScreen";
import AdminLoginScreen from "./Screens/Admin/LoginScreen";
import AdminDashboardScreen from "./Screens/Admin/DashBoardScreen";
import AdminItemsCategoryScreen from "./Screens/Admin/ItemsCategoryScreen";
import AdminAddItemsCategoryScreen from "./Screens/Admin/AddCategoryScreen";
import AdminFoodItemsListScreen from "./Screens/Admin/ItemsListScreen";
import AdminAddFoodItemsListScreen from "./Screens/Admin/AddITemsScreen";
import DisplayOutlets from "./Screens/DisplayOutlets";
import DisplayMenuSectionTypes from "./Screens/DisplayMenuSectionTypes";
import DisplayMenuSections from "./Screens/DisplayMenuSections";

function App() {
  // eslint-disable-next-line
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: "#47d147",
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Grid xs={12} md={12} lg={12}>
          <Switch>
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/admin/dashboard" component={AdminDashboardScreen} />
            <Route
              path="/admin/itemscategory"
              component={AdminItemsCategoryScreen}
              exact
            />
            <Route
              path="/admin/itemscategory/add"
              component={AdminAddItemsCategoryScreen}
            />
            <Route
              path="/admin/fooditems"
              component={AdminFoodItemsListScreen}
              exact
            />
            <Route
              path="/admin/fooditems/add"
              component={AdminAddFoodItemsListScreen}
            />
            <Route path="/admin" component={AdminLoginScreen} exact />
            <Route path="/:brandId" component={DisplayOutlets} exact />
            <Route
              path="/:brandId/:outletId"
              component={DisplayMenuSectionTypes}
              exact
            />
            <Route
              path="/:brandId/:outletId/:menusectionId"
              component={DisplayMenuSections}
              exact
            />

            <Route>
              <Header />
              <Grid container xs={12} md={12} lg={12} >
                {/* `<Grid
                item
                xs={3}
                component={Box}
                display="flex"
                justifyContent="center"
              >
                <SideNavBar />
              </Grid>` */}
                <Grid item xs={12} md={12} lg={12} style={{ marginLeft: 9 }}>
                  <Switch>
                    <Route
                      path="/:brandId/:outletId/:menusectionId/:msTypeId"
                      component={MenuItemsScreen}
                      exact
                    />
                    {/* <Route path="/:outletId" component={MenuItemsScreen} exact /> */}
                    <Route
                      path="/:brandId/:outletId/:menusectionId/:msTypeId/:itemId"
                      component={FoodDetailsScreen}
                      exact
                    />
                  </Switch>
                </Grid>
              </Grid>
            </Route>
          </Switch>
        </Grid>
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
