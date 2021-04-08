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
  CircularProgress,
} from "@material-ui/core";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { createItemsCategory } from "../../actions/menuItemsActions";

const AddCategoryScreen = ({ history }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const addMenuCategory = useSelector((state) => state.addMenuCategory);
  const { loading, success, error } = addMenuCategory;

  useEffect(() => {
    if (success) {
      history.push("/admin/itemscategory");
    }
  }, [success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createItemsCategory({ name }));
  };
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid item style={{ marginTop: 20 }} xs={5}>
            <Typography variant="h4" color="default">
              {"Add New Category"}
            </Typography>
            {error && (
              <Typography paragraph color="secondary">
                {error}
              </Typography>
            )}
            <Box component="form" onSubmit={submitHandler}>
              <TextField
                variant="outlined"
                placeholder="Enter Name..."
                color="primary"
                margin="normal"
                type="text"
                label="Category Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />

              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel id="demo-simple-select-outlined-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"age"}
                  onChange={"handleChange"}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 10 }}
                type="submit"
                fullWidth
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} />
                    &nbsp;{"Saving..."}
                  </>
                ) : (
                  "Save Category"
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddCategoryScreen;
