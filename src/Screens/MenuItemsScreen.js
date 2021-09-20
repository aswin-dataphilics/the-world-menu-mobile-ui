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
const MenuItemsScreen = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.outletId;
  localStorage.setItem("outletId", id);
  let data = [];
  const menuItems = useSelector((state) => state.menuItems);

  const { loading, error, items } = menuItems;
  console.log(items.items);
  // let loading = false;
  // let error = false;
  // let items = [{ _id: 1, name: "test", description: "test", price: 10 }];

  useEffect(() => {
    dispatch(getMenuItems(id));
  }, [dispatch]);

  return (
    <Box pt={13} pr={1}>
      <Grid container spacing={1}>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            {items.items !== null && items.items !== undefined ? (
              <Fragment>
                {" "}
                {items.items.map((item) => (
                  <Grid item key={item._id}>
                    <Card>
                      <CardActionArea component={Link} to={`/food/${item._id}`}>
                        <Grid container>
                          <Grid item xs={5}>
                            {/* <div style={{width:'200px',height:'100px'}}>
                              <img
                              width='100%'
                            //  style={{objectFit:'none'}}
                                src={
                                  item.image === ""
                                    ? `/images/nodles.jpg`
                                    : `${item.image}`
                                }
                                alt=""
                              />
                            </div> */}

                            <CardImg
                              top
                              width="100%"
                              style={{objectFit:'cover'}}
                             // height="200px"
                              src={
                                item.image === ""
                                  ? `/images/nodles.jpg`
                                  : `${item.image}`
                              }
                            />

                              

                            {/* <CardMedia
                              component="img"
                              image={
                                item.image === ""
                                  ? `/images/nodles.jpg`
                                  : `${item.image}`
                              }
                              // image={`https://prashant-api.herokuapp.com/${item.image}`}
                              alt={item.name}
                              title={item.name}
                              //height='150px'
                              width="100%"
                            /> */}
                            {/* <img src={item.image===''?`/images/nodles.jpg`:`${item.image}`} alt="no img" />
                            </CardMedia> */}
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
                                style={{ fontWeight: "bold", fontSize: 18 }}
                              >
                                {item.name}
                                <div style={{ float: "right" }}>
                                  <img
                                    src={"/images/vegiterian.png"}
                                    style={{ width: "15px", height: "15px" }}
                                  />
                                  {/* <img src={'/images/non-veg.png'} style={{width:'15px',height:'15px'}}/>
                        <img src={'/images/eggiterian.png'} style={{width:'15px',height:'15px'}}/> */}
                                </div>
                              </Typography>
                              <Typography
                                style={{ fontSize: 10, marginTop: 10 }}
                              >
                                {/* {`${item.description.slice(1, 35)}...`} */}
                                {item.description}
                              </Typography>
                              <Typography
                                style={{ fontSize: 14, marginTop: 13 }}
                              >
                                {item.price}
                              </Typography>
                            </CardContent>
                          </Grid>
                        </Grid>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}{" "}
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

export default MenuItemsScreen;
