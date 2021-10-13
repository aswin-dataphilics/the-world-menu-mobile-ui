import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  ArrowBack,
  Fastfood,
  TimerRounded,
  Fireplace,
} from "@material-ui/icons";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { grey } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItem } from "../actions/menuItemsActions";
import Loder from "../Components/Loder";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width:'68%',
     // alignItems: "center",
      marginLeft: "17%",
      marginRight: "30%",
    },
    //justifyContent: "center",
  }
}));

const FoodDetailsScreen = ({ history, match }) => {
  let menusectionId = match.params.menusectionId;
  const outletId = match.params.outletId;
  const classes = useStyles();
  const brandId = match.params.brandId;
  const msTypeId = match.params.msTypeId;
  const itemId = match.params.itemId;
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.menuItems);
  const { item, loading } = useSelector((state) => state.menuItem);
  useEffect(() => {
    dispatch(getMenuItem(itemId));
  }, [dispatch]);

  return (
    <Box className={classes.root} pt={14} pr={1}>
      {loading ? (
        <Loder />
      ) : (
        <Grid container spacing={1}>
          <Grid
            item
            component={Box}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Button
              variant="outlined"
              style={{ paddingLeft: 0, paddingRight: 0 }}
              color="default"
              size="small"
              onClick={() => history.goBack()}
            >
              <ArrowBack />
            </Button>
          </Grid>

          {/* <Grid item xs={12}>
          <Card>
            <CardContent
              component={Box}
              display="flex"
              flexDirection="column"
              style={{ padding: 7 }}
            >
              <Typography
                style={{
                  fontSize: 12,
                  color: grey[500],
                  marginBottom: 4,
                  letterSpacing: 1,
                }}
              >
                {"DESCRIPTION"}
              </Typography>
              <Typography style={{ fontSize: "0.7rem", textAlign: "justify" }}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid> */}

          <Grid item xs={12} style={{ paddingBottom: 12 }}>
            <Card>
              <CardMedia
                component="img"
                image="/images/nodles.jpg"
                alt="nodles"
                height={200}
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent
                component={Box}
                display="flex"
                flexDirection="column"
                style={{ padding: 7 }}
              >
                <Typography
                  style={{
                    fontSize: 12,
                    color: grey[500],
                    // marginBottom: 4,
                    letterSpacing: 1,
                  }}
                >
                  <img
                    src={`/images/Vegeterian.png`}
                    alt=""
                    style={{ height: "15px", width: "15px" }}
                  />
                  <span style={{ marginLeft: "4px", fontSize: "12px" }}>
                    {item.name}
                  </span>

                  <h5 style={{ float: "right", fontSize: 15, margin: 0 }}>
                    10
                  </h5>
                </Typography>
                <Typography
                  style={{ fontSize: "0.7rem", textAlign: "justify" }}
                >
                  {item.desctiption}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <CardContent>
            <Typography
              style={{
                fontSize: 12,
                color: grey[500],
                marginTop: 8,
                letterSpacing: 1,
              }}
            >
              {"ADD OPTIONS"}
            </Typography>
            <FormGroup>
              {item.addons&&item.addons.map((add) => (
                <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    name="checkedI"
                  />
                }
                label={`Extra ${add.description} - Rs. ${add.price}.00`}
              />
              ))}
              {/* {item.addons.map(add=>{
                  <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label={`Extra Cheese - Rs. ${add.price}.00`}
                />
               })} */}
            </FormGroup>
          </CardContent>
        </Grid>
      )}
    </Box>
  );
};

export default FoodDetailsScreen;
