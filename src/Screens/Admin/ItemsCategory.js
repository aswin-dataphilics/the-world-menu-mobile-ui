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
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Header from "./Header";

const useStyles = makeStyles((theme) => {});

const ItemsCategory = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
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
                <TableRow hover>
                  <TableCell style={{ fontSize: 18 }}>Popular</TableCell>
                  <TableCell>
                    <Box display="flex" flexDirection="row">
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

export default ItemsCategory;
