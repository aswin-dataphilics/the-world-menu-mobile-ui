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

const FoodDetailsScreen = ({ history, match }) => {
  const itemId = match.params.id;
  const dispatch = useDispatch();

  const menuItem = useSelector((state) => state.menuItem);
  const { loading, item, error } = menuItem;

  useEffect(() => {
    dispatch(getMenuItem(itemId));
  }, [dispatch]);

  return (
    <Box pt={13} pr={1}>
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
            onClick={() => history.push("/")}
          >
            <ArrowBack />
          </Button>

          <Typography style={{ marginLeft: 8 }}>{item.name}</Typography>
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
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent style={{ padding: 12, textAlign: "center" }}>
              <Fastfood fontSize="default" color="primary" />
              <Typography
                style={{
                  fontSize: 12,
                  color: grey[500],
                  marginTop: 6,
                  letterSpacing: 2,
                }}
              >
                SERVINGS
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                {item.servings} People
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent style={{ padding: 12, textAlign: "center" }}>
              <TimerRounded fontSize="default" color="primary" />
              <Typography
                style={{
                  fontSize: 12,
                  color: grey[500],
                  marginTop: 6,
                  letterSpacing: 2,
                }}
              >
                COOK TIME
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                {item.cooktime} mins
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent style={{ padding: 12, textAlign: "center" }}>
              <Fireplace fontSize="default" color="primary" />
              <Typography
                style={{
                  fontSize: 12,
                  color: grey[500],
                  marginTop: 6,
                  letterSpacing: 2,
                }}
              >
                ENERGY
              </Typography>
              <Typography style={{ fontSize: 12 }}>
                {item.energy} kcal.
              </Typography>
            </CardContent>
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
                  marginBottom: 4,
                  letterSpacing: 1,
                }}
              >
                {"INGREDIENTS"}
              </Typography>
              <Typography style={{ fontSize: "0.7rem", textAlign: "justify" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                deserunt odit praesentium. Vero corrupti itaque officiis libero
                porro alias eaque!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} style={{ paddingBottom: 12 }}>
          <Card>
            <CardMedia
              component="img"
              image="/images/nodles.jpg"
              alt="nodles"
              height={120}
            />
            <CardContent>
              <Typography>{item.name}</Typography>
              <Box display="flex" flexDirection="row">
                <Typography
                  style={{
                    fontSize: 12,
                    color: grey[500],
                  }}
                >
                  {item.category.name}
                </Typography>
                <Typography
                  style={{
                    fontSize: 12,
                    marginLeft: "auto",
                  }}
                >
                  Rs. {item.defaultPrice}
                </Typography>
              </Box>
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
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label={"Extra Cheese - Rs. 2.00"}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label={"Extra Honey - Rs. 2.00"}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label={"Extra Salt - Rs. 2.00"}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      name="checkedI"
                    />
                  }
                  label={"Extra Source - Rs. 2.00"}
                />
              </FormGroup>
            </CardContent>
            <CardActions style={{ paddingTop: 0 }}>
              <Button color="primary" variant="contained" fullWidth>
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodDetailsScreen;
