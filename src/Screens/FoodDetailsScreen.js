import React from "react";
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

const FoodDetailsScreen = ({ history }) => {
  return (
    <Box pt={8} pr={1}>
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

          <Typography style={{ marginLeft: 8 }}>ITEM NAME</Typography>
        </Grid>

        <Grid item xs={12}>
          <Box position="sticky" component="form">
            <Select
              variant="outlined"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={"1"}
              label="Age"
              style={{ height: 40 }}
              fullWidth
            >
              <MenuItem disabled selected>
                {"Sub Catgory"}
              </MenuItem>
              <MenuItem>{"Soft Drink"}</MenuItem>
              <MenuItem>{"Cold Drink"}</MenuItem>
            </Select>
          </Box>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                deserunt odit praesentium. Vero corrupti itaque officiis libero
                porro alias eaque!
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
              <Typography style={{ fontSize: 12 }}>2 People</Typography>
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
              <Typography style={{ fontSize: 12 }}>12 mins</Typography>
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
              <Typography style={{ fontSize: 12 }}>227 kcal.</Typography>
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
              <Typography>ITEM NAME</Typography>
              <Box display="flex" flexDirection="row">
                <Typography
                  style={{
                    fontSize: 12,
                    color: grey[500],
                  }}
                >
                  {"Descert"}
                </Typography>
                <Typography
                  style={{
                    fontSize: 12,
                    marginLeft: "auto",
                  }}
                >
                  Rs. {"69.00"}
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
