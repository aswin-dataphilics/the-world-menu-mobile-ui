import React from "react";
import {
  ListItem,
  Drawer,
  List,
  Typography,
  SwipeableDrawer,
} from "@material-ui/core";
import { MailIcon } from "@material-ui/icons/Mail";
import { Person, SettingsApplications } from "@material-ui/icons";

const MenuItemsDrawer = ({ open, onClose }) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={onClose}
      onClose={onClose}
    >
      <List disablePadding>
        <ListItem button component={Typography} variant="h6">
          All Day Menu
        </ListItem>
        <ListItem button>
          <Person />
          &nbsp;Breakfast
        </ListItem>
        <ListItem button>
          <SettingsApplications />
          &nbsp;Starter
        </ListItem>
        <ListItem button>
          <Person />
          &nbsp;Popular
        </ListItem>
        <ListItem button>
          <Person />
          &nbsp;Desert
        </ListItem>
        <ListItem button>
          <Person />
          &nbsp;Dinner
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default MenuItemsDrawer;
