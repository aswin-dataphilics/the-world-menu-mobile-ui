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
  ButtonGroup,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Header from "./Header";
import Loader from "../../Components/Loder";
import { useDispatch, useSelector } from "react-redux";
import {
  getMenuCategory,
  deleteCategory,
} from "../../actions/menuItemsActions";
import {
  ADD_CATEGORY_RESET,
  DELETE_CATEGORY_RESET,
} from "../../constants/menuItemsConstants";

const ItemsCategoryScreen = () => {
  const dispatch = useDispatch();

  const menuCategories = useSelector((state) => state.menuCategories);
  const { loading, categories, error } = menuCategories;

  const deleteMenuCategory = useSelector((state) => state.deleteMenuCategory);
  const {
    loading: deleteLoading,
    success: deleteSuccess,
    error: deleteError,
  } = deleteMenuCategory;

  useEffect(() => {
    dispatch({ type: DELETE_CATEGORY_RESET });
    dispatch({ type: ADD_CATEGORY_RESET });
    dispatch(getMenuCategory());
    if (deleteSuccess) {
      dispatch(getMenuCategory());
    }
  }, [dispatch, deleteSuccess]);

  const deleteHandler = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        {deleteLoading && <Loader />}
        {deleteError && <Typography color="error">{deleteError}</Typography>}
        {deleteSuccess && (
          <Typography color="secondary">{"Deleted..."}</Typography>
        )}
        <Grid container>
          <Grid item xs={12} component={Box} display="flex" flexDirection="row">
            <Typography variant="h4" color="default">
              {"Items Category"}
            </Typography>
            <Button
              variant="contained"
              style={{ marginLeft: "auto" }}
              color="primary"
              component={Link}
              to="/admin/itemscategory/add"
            >
              {"Add New"}
            </Button>
          </Grid>
          {loading ? (
            <Loader />
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <Grid item style={{ marginTop: 20 }} xs={12}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: 19 }}>
                      {"Category Name"}
                    </TableCell>
                    <TableCell style={{ fontSize: 19 }} align="right">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.map((category) => (
                    <TableRow hover key={category._id}>
                      <TableCell style={{ fontSize: 18 }}>
                        {category.name}
                      </TableCell>
                      <TableCell align="right">
                        <ButtonGroup size="small">
                          <Button variant="contained" color="primary">
                            <Edit />
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => deleteHandler(category._id)}
                          >
                            <Delete />
                          </Button>
                        </ButtonGroup>
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

export default ItemsCategoryScreen;
