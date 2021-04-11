import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  IconButton,
  Checkbox,
} from "@material-ui/core";
import {
  Edit,
  Delete,
  Visibility,
  VisibilityOff,
  List,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Header from "./Header";
import Loader from "../../Components/Loder";
import { useDispatch, useSelector } from "react-redux";
import { ADD_MENU_ITEMS_RESET } from "../../constants/menuItemsConstants";
import { getMenuItems } from "../../actions/menuItemsActions";

const ItemsListScreen = () => {
  const dispatch = useDispatch();

  const menuItems = useSelector((state) => state.menuItems);
  const { loading, items, error } = menuItems;

  useEffect(() => {
    dispatch({ type: ADD_MENU_ITEMS_RESET });
    dispatch(getMenuItems());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} component={Box} display="flex" flexDirection="row">
            <Typography variant="h4" color="default">
              {"Food Items"}
            </Typography>
            <Button
              variant="contained"
              style={{ marginLeft: "auto" }}
              color="primary"
              component={Link}
              to="/admin/fooditems/add"
            >
              {"Add New"}
            </Button>
          </Grid>
          {loading ? (
            <Loader />
          ) : error ? (
            <Typography variant="error">{error}</Typography>
          ) : (
            <Grid item style={{ marginTop: 29 }} xs={12}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>{"Item Name"}</TableCell>
                    <TableCell>{"Category"}</TableCell>
                    <TableCell>{"Price"}</TableCell>
                    <TableCell>{"Extra Option(s)"}</TableCell>
                    <TableCell>{"Type"}</TableCell>
                    <TableCell align="right">{"Action"}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item) => (
                    <TableRow hover key={item._id} style={{ fontSize: 18 }}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category.name}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell align="center">
                        {item.extraOptions.length}
                      </TableCell>
                      <TableCell>
                        {item.type === 0 ? "Veg" : "Non-Veg"}
                      </TableCell>
                      <TableCell>
                        <Box
                          style={{ maxWidth: "fit-content" }}
                          display="flex"
                          flexDirection="row"
                          ml="auto"
                        >
                          <IconButton
                            color="inherit"
                            style={{ marginLeft: "auto" }}
                            arial-label="Edit"
                          >
                            <Edit />
                          </IconButton>
                          <IconButton color="inherit" arial-label="Remove">
                            <Delete />
                          </IconButton>
                          <Checkbox
                            icon={<VisibilityOff />}
                            checkedIcon={<Visibility />}
                            name="visibility"
                            color="primary"
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ItemsListScreen;
