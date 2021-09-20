import React, { useEffect, useState } from "react";
import {
  ListItem,
  Collapse,
  List,
  Typography,
  SwipeableDrawer,
  ListItemText,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMenuSections } from "../actions/menuItemsActions";
import Loader from "./Loder";
import { Fragment } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MenuItemsDrawer = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [opensub, setOpenSub] = useState(false);

  const allMenuCategory = useSelector((state) => state.allMenuCategory);
  // const { loading, category, error } = allMenuCategory;
  const { loading, error,menusections } = allMenuCategory;
  useEffect(() => {
    let id = localStorage.getItem('outletId')
    dispatch(getMenuSections(id)); // getting all menusections in the outlet
  }, [dispatch]);
  const topOfList = React.createRef();
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onOpen={onClose}
      onClose={onClose}
      style={{ height: "50vh", width: "100vh" }}
    >
      {/* <List>
        <ListItem>
          <ListItemText primary="food" onClick={() => setOpenSub(!opensub)} />
          {opensub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={opensub} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Category" />
            </ListItem>
          </List>
        </Collapse>
      </List> */}

      <List disablePadding>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            {" "}
            {<span ref={topOfList} />}
            {menusections.map((cat, index) => (
              <ListItem onClick={onClose} key={index} button component={Typography} paragraph>
                {cat.title}
              </ListItem>
            ))}
          </Fragment>
        )}
      </List>
    </SwipeableDrawer>
  );
};

export default MenuItemsDrawer;
