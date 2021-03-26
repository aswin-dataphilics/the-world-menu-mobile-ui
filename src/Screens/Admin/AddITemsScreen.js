import React from "react";
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
  TextareaAutosize,
} from "@material-ui/core";
import Header from "./Header";

const AddItemsSCreen = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid item style={{ marginTop: 20 }} xs={5}>
            <Typography variant="h4" color="default">
              {"Add New Item"}
            </Typography>
            <Box component="form">
              <TextField
                variant="outlined"
                placeholder="Enter Name..."
                color="primary"
                margin="normal"
                type="text"
                label="Item Name"
                fullWidth
              />

              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel id="demo-simple-select-outlined-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={"age"}
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
                fullWidth
              />

              <TextField
                variant="outlined"
                placeholder="Enter Serving..."
                color="primary"
                margin="normal"
                type="number"
                label="Serving"
                fullWidth
              />

              <TextField
                variant="outlined"
                placeholder="Enter Cook Time..."
                color="primary"
                margin="normal"
                type="number"
                label="Cook Time"
                fullWidth
              />

              <TextField
                variant="outlined"
                placeholder="Enter Energy..."
                color="primary"
                margin="normal"
                type="number"
                label="Energy"
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
                fullWidth
              />

              <TextField
                variant="outlined"
                placeholder="Enter Price..."
                color="primary"
                margin="normal"
                type="number"
                label="Price"
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
                fullWidth
              >
                {"Save Category"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddItemsSCreen;
