import React, { useEffect, useState } from "react";
import {
  ListItem,
  Collapse,
  List,
  Typography,
  SwipeableDrawer,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../actions/menuItemsActions";

const MenuItemsDrawer = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const allMenuCategory = useSelector((state) => state.allMenuCategory);
  const { loading, category, error } = allMenuCategory;

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={onClose}
      onClose={onClose}
      style={{ height: "50vh", width: "100vh" }}
    >
      <List disablePadding>
        {category.map((cat) => (
          <ListItem button component={Typography} paragraph>
            {cat.name}
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default MenuItemsDrawer;
