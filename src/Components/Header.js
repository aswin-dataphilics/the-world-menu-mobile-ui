import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import MenuItemsDrawer from "./MenuDrawer";
import {
  SettingsApplications,
  ShoppingCart,
  SearchOutlined,
} from "@material-ui/icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      color="default"
      component={Box}
      display="flex"
      flexDirection="column"
    >
      <Toolbar>
        <Typography>{"FoodTech"}</Typography>
        <IconButton component={Box} ml="auto" color="inherit" aria-label="Cart">
          <ShoppingCart />
        </IconButton>
        <MenuItemsDrawer open={open} onClose={() => setOpen(!open)} />
      </Toolbar>
      <Box display="flex" flexDirection="row" pb={1} px={1}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{ fontWeight: "bold" }}
          onClick={() => setOpen(!open)}
        >
          {"Menu"}
        </Button>
        <IconButton
          style={{ marginLeft: "auto", marginRight: 5 }}
          color="inherit"
          aria-label="Filter"
          size="small"
        >
          <SearchOutlined />
        </IconButton>
        <IconButton color="inherit" aria-label="Filter" size="small">
          <SettingsApplications />
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default Header;
