import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import menuItems from "../MenuItems";

const MenuItemsScreen = () => {
  return (
    <Box pt={8} pr={1}>
      <Grid container spacing={1}>
        {menuItems.map((item) => (
          <Grid item key={item._id}>
            <Card>
              <CardActionArea component={Link} to="/food">
                <Grid container>
                  <Grid item xs={5}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      title={item.name}
                      height={120}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <CardContent
                      component={Box}
                      style={{ padding: 3, paddingLeft: 6, paddingRight: 6 }}
                      display="flex"
                      flexDirection="column"
                    >
                      <Typography
                        style={{ fontWeight: "normal", fontSize: 18 }}
                      >
                        {item.name}
                      </Typography>
                      <Typography style={{ fontSize: 10, marginTop: 10 }}>
                        {`${item.description.slice(1, 35)}...`}
                      </Typography>
                      <Typography style={{ fontSize: 14, marginTop: 13 }}>
                        Rs. {item.price}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuItemsScreen;
