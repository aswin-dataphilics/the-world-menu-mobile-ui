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
import { useDispatch } from "react-redux";
import { ADD_MENU_ITEMS_RESET } from "../../constants/menuItemsConstants";

const ItemsListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ADD_MENU_ITEMS_RESET });
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
          <Grid item style={{ marginTop: 29 }} xs={12}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>{"Item Name"}</TableCell>
                  <TableCell>{"Category"}</TableCell>
                  <TableCell>{"Price"}</TableCell>
                  <TableCell>{"Extra Option(s)"}</TableCell>
                  <TableCell align="right">{"Action"}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover style={{ fontSize: 18 }}>
                  <TableCell>{"Chicken Kadhai"}</TableCell>
                  <TableCell>{"Non Veg"}</TableCell>
                  <TableCell>{"Rs: 280"}</TableCell>
                  <TableCell>{"4"}</TableCell>
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
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ItemsListScreen;
