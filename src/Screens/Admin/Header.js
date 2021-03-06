import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    // history.push("/login");
    dispatch(logout());
  };

  return (
    <AppBar color="default" position="relative" style={{ marginBottom: 30 }}>
      <Toolbar>
        <Typography
          variant="h5"
          color="primary"
          component={Link}
          to={"/admin/dashboard"}
          style={{ textDecoration: "none" }}
        >
          FoodTech
        </Typography>

        <Box display="flex" flexDirection="row" ml={"auto"}>
          <Button
            color="inherit"
            size="large"
            component={Link}
            to={"/admin/itemscategory"}
          >
            {"Caterogry"}
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/admin/fooditems"
            size="large"
            style={{ marginLeft: 4 }}
          >
            {"Food Items"}
          </Button>
          {userInfo && (
            <Button
              color="inherit"
              size="large"
              onClick={logoutHandler}
              style={{ marginLeft: 4 }}
            >
              {`Logout, ${userInfo.name.split(" ")[0]}`}
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
