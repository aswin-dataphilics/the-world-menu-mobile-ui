import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Box,
  Grid,
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import Header from "./Components/Header";
import SideNavBar from "./Components/SideNavBar";
import MenuItemsScreen from "./Screens/MenuItemsScreen";
import FoodDetailsScreen from "./Screens/FoodDetailsScreen";
import LoginScreen from "./Screens/LoginScreen";
import AdminLoginScreen from "./Screens/Admin/LoginScreen";
import AdminDashboard from "./Screens/Admin/DashBoard";
import AdminItemsCategory from "./Screens/Admin/ItemsCategory";
import AdminAddItemsCategory from "./Screens/Admin/AddCategory";

function App() {
  // eslint-disable-next-line
  const [dark, setDark] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: "#47d147",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/admin" component={AdminLoginScreen} exact />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route
          path="/admin/itemscategory"
          component={AdminItemsCategory}
          exact
        />
        <Route
          path="/admin/itemscategory/add"
          component={AdminAddItemsCategory}
        />
        <Route>
          <Header />
          <Grid container>
            <Grid
              item
              xs={3}
              component={Box}
              display="flex"
              justifyContent="center"
            >
              <SideNavBar />
            </Grid>
            <Grid item xs={9}>
              <Switch>
                <Route path="/" component={MenuItemsScreen} exact />
                <Route path="/food" component={FoodDetailsScreen} />
              </Switch>
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
