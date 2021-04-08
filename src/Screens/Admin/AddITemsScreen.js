import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Header from "./Header";
import Loader from "../../Components/Loder";
import { useDispatch, useSelector } from "react-redux";
import {
  createMenuItem,
  getMenuCategory,
} from "../../actions/menuItemsActions";

const AddItemsSCreen = ({ history }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("/images/burgar.jpg");
  const [description, setDescription] = useState("");
  const [servings, setServings] = useState(0);
  const [cooktime, setCooktime] = useState(0);
  const [price, setPrice] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const dispatch = useDispatch();

  const menuCategories = useSelector((state) => state.menuCategories);
  const {
    loading: menuCategoriesLoading,
    categories,
    error: menuCategoriesError,
  } = menuCategories;

  const addMenuItems = useSelector((state) => state.addMenuItems);
  const { loading, success, error } = addMenuItems;

  useEffect(() => {
    dispatch(getMenuCategory());
    if (success) {
      history.push("/admin/fooditems");
    }
  }, [dispatch, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createMenuItem({
        name,
        category,
        image,
        description,
        servings,
        cooktime,
        price,
        energy,
        ingredients,
      })
    );
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        {loading && <Loader />}
        {error && <Typography variant="error">{error}</Typography>}
        {menuCategoriesLoading ? (
          <Loader />
        ) : menuCategoriesError ? (
          <Typography variant="error">{menuCategoriesError}</Typography>
        ) : (
          <Grid container justify="center">
            <Grid item style={{ marginTop: 20 }} xs={5}>
              <Typography variant="h4" color="default">
                {"Add New Item"}
              </Typography>
              <Box component="form" onSubmit={submitHandler}>
                <TextField
                  variant="outlined"
                  placeholder="Enter Name..."
                  color="primary"
                  margin="normal"
                  type="text"
                  label="Item Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />

                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Age"
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat._id} value={cat._id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Enter Description..."
                  color="primary"
                  margin="normal"
                  type="text"
                  label="Enter Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  placeholder="Enter Serving..."
                  color="primary"
                  margin="normal"
                  type="number"
                  label="Serving"
                  value={servings}
                  onChange={(e) => setServings(e.target.value)}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  placeholder="Enter Cook Time..."
                  color="primary"
                  margin="normal"
                  type="number"
                  label="Cook Time"
                  value={cooktime}
                  onChange={(e) => setCooktime(e.target.value)}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  placeholder="Enter Energy..."
                  color="primary"
                  margin="normal"
                  type="number"
                  label="Energy"
                  value={energy}
                  onChange={(e) => setEnergy(e.target.value)}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  multiline
                  rows={3}
                  placeholder="Enter Ingredirent... (Seperate it by comas)"
                  color="primary"
                  margin="normal"
                  type="text"
                  label="Ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  placeholder="Enter Price..."
                  color="primary"
                  margin="normal"
                  type="number"
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  placeholder="Enter Image Path..."
                  color="primary"
                  margin="normal"
                  type="text"
                  label="Serving"
                  disabled
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  fullWidth
                />

                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    style={{ marginTop: 10, marginBottom: 10 }}
                    color="secondary"
                    component="span"
                  >
                    {"Upload Image"}
                  </Button>
                </label>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10, marginBottom: 10 }}
                  type="submit"
                  fullWidth
                >
                  {"Save Category"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default AddItemsSCreen;
