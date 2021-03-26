import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  IconButton,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Header from "./Header";

const useStyles = makeStyles((theme) => {});

const AddCategoryScreen = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid item style={{ marginTop: 20 }} xs={5}>
            <Typography variant="h4" color="default">
              {"Add New Category"}
            </Typography>
            <Box component="form">
              <TextField
                variant="outlined"
                placeholder="Enter Name..."
                color="primary"
                margin="normal"
                type="text"
                label="Category Name"
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

export default AddCategoryScreen;
