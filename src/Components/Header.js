import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Header = () => {
  
  return (
    <AppBar color="default">
      <Toolbar>
        <Typography>{"FoodTech"}</Typography>
        <IconButton
          component={Box}
          ml="auto"
          edge="end"
          color="inherit"
          aria-label="Cart"
        >
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
