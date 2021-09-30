import React, { useEffect, useState } from "react";
import {
  ListItem,
  Collapse,
  List,
  Typography,
  SwipeableDrawer,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getMenuBar, getMenuSections } from "../actions/menuItemsActions";
import Loader from "./Loder";
import { Fragment } from "react";
import {
  ExitToAppOutlined,
  ExpandLess,
  ExpandLessOutlined,
  ExpandMore,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Loder from "./Loder";
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
  const [current, setCurrent] = useState(-1);
  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
  };
  const { loading, category } = useSelector((state) => state.allMenuBar);
  const [opensub, setOpenSub] = useState(false);
  useEffect(() => {
    dispatch(getMenuBar());
  }, [getMenuBar]);

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={onClose}
      onClose={onClose}
      style={{ height: "50vh", width: "100vh" }}
    >
      {loading ? (
        <Loder />
      ) : (
        <Fragment>
          {category.map((cat) => (
            <Accordion
              square
              expanded={current === cat._id}
              onChange={changeState(cat._id)}
            >
              <AccordionSummary expandIcon={<ExpandLessOutlined />}>
                <Typography>{cat.title}</Typography>
                <Divider/>
              </AccordionSummary>
              {cat.sub_category.length>0&&cat.sub_category.map(sub=><AccordionDetails textAlign='center'>{sub.title}</AccordionDetails>)}
            </Accordion>
          ))}
        </Fragment>
      )}
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

      {/* <List disablePadding>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            {" "}
            {<span ref={topOfList} />}
            {menusections.map((data, index) => (
              
            ))}
          </Fragment>
        )}
        <ListItem onClick={onClose} button component={Typography} paragraph>
                food
              </ListItem>
      </List> */}
    </SwipeableDrawer>
  );
};

export default MenuItemsDrawer;
