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
  const [search, setSearch] = useState(false);

  return (
    <AppBar
      color="default"
      component={Box}
      display="flex"
      flexDirection="column"
    >
      <Toolbar style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Typography>{"FoodTech"}</Typography>
        <IconButton
          component={Box}
          size="small"
          ml="auto"
          color="inherit"
          aria-label="Cart"
          style={{ marginLeft: "auto" }}
        >
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
        {search && (
          <input
            placeholder="Search..."
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              borderRadius: 20,
              marginLeft: "auto",
              borderColor: "#eee",
              borderWidth: 1,
              paddingLeft: 10,
              width: "100%",
              marginLeft: 5,
              marginRight: 5,
            }}
          />
        )}
        <IconButton
          style={
            !search
              ? { marginLeft: "auto", marginRight: 5 }
              : { marginRight: 5 }
          }
          color="inherit"
          aria-label="Filter"
          size="small"
          onClick={() => setSearch(!search)}
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
