import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import menuItems from "../MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../actions/menuItemsActions";
import { Fragment } from "react";
import Loader from "../Components/Loder";
//import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: "142%",
      // alignItems: "center",
      marginLeft: "-19%",
      marginRight: "30%",
    },
    //justifyContent: "center",
  },
}));

const MenuItemsScreen = ({ match }) => {
  let menusectionId = match.params.menusectionId;
  const classes = useStyles();
  const outletId = match.params.outletId;
  const brandId = match.params.brandId;
  const msTypeId = match.params.msTypeId;
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.menuItems);
  console.log(items);
  useEffect(() => {
    dispatch(getMenuItems(outletId, msTypeId));
  }, [getMenuItems]);

  return (
    <Box pt={13} pr={1}>
      <Grid container spacing={1}>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            {items !== null && items !== undefined && items.length > 0 ? (
              <Fragment>
                {" "}
                {items.map((item) => (
                  <Grid item key={item._id} xs={12}>
                    <Card
                      className={classes.root}
                      onClick={() => {
                        localStorage.setItem("item", JSON.stringify(item));
                      }}
                    >
                      <CardActionArea>
                        <Grid container>
                          <Grid item xs={5}>
                            <CardMedia
                              component="img"
                              image={
                                item.image === "path"
                                  ? `/images/nodles.jpg`
                                  : `${item.image}`
                              }
                              alt={item.name}
                              title={item.name}
                              height={120}
                              width="100%"
                            />
                          </Grid>
                          <Grid item xs={7}>
                            <CardContent
                              component={Box}
                              style={{
                                padding: 3,
                                paddingLeft: 6,
                                paddingRight: 6,
                              }}
                              display="flex"
                              flexDirection="column"
                            >
                              <Typography
                                style={{ fontWeight: "normal", fontSize: 18 }}
                              >
                                {item.name} {"  "}{" "}
                                <img
                                  src={`/images/${item.special_tags}.jpg`}
                                  alt="no tag"
                                  style={{
                                    height: "15px",
                                    width: "15px",
                                  }}
                                />{" "}
                                {`${item.health_options}`}
                                <img
                                  src={`/images/${item.food_type}.png`}
                                  alt=""
                                  style={{
                                    height: "15px",
                                    width: "15px",
                                    float: "right",
                                  }}
                                />
                              </Typography>
                              <Typography
                                style={{ fontSize: 10, marginTop: 10 }}
                              >
                                {`${item.desctiption.slice(0, 35)}...`}
                              </Typography>
                              <Typography
                                style={{ fontSize: 14, marginTop: 13 }}
                              >
                                <br />
                              </Typography>
                              <Typography
                                style={{ fontSize: 15, marginTop: 10 }}
                              >
                                {item.price}
                                {item.addons.length > 0 && (
                                  <Link
                                    to={`/${brandId}/${outletId}/${menusectionId}/${msTypeId}/${item._id}`}
                                    style={{
                                      float: "right",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Add
                                  </Link>
                                )}
                              </Typography>
                            </CardContent>
                          </Grid>
                        </Grid>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Fragment>
            ) : (
              <h1>No items</h1>
            )}
          </Fragment>
        )}
      </Grid>
    </Box>
  );
};
{
  /* <div class="card">
                      <img
                       // src={item.image==''?`/images/nodles.jpg`:`${item.image}`}
                        src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg" class="card-img-top" 
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <img src='/images/veg-img.png' style={{width:'15px',height:'15px', float:'right',marginTop:'-28px',marginRight: '-14px'}} alt='img'/>
                        <p className="card-text">
                        {`${item.desctiption.slice(1, 35)}...`}
                        </p>
                        <p className="card-text">
                        {item.price}
                        </p>
                      </div>
                    </div> */
}
export default MenuItemsScreen;
