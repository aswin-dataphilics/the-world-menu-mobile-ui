import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles =

const CartDrawer = () => {
  return (
    <SwipeableDrawer open={true}>
      <List disablePadding>
        <ListItem>
          <Grid container>
            <Grid item xs={2}>
              <img src="/images/burger.jpg" alt="burger" />
            </Grid>
            <Grid item xs={10}>
              <Box display="flex" flexDirection="column">
                <Typography paragraph>ITEM NAME</Typography>
              </Box>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider />
    </SwipeableDrawer>
  );
};

export default CartDrawer;
