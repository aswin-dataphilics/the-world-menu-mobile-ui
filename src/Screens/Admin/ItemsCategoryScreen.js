import React from "react";
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

const ItemsCategoryScreen = () => {
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
                  <TableCell align="right">
                    <ButtonGroup size="small">
                      <Button variant="contained" color="primary">
                        <Edit />
                      </Button>
                      <Button variant="contained" color="secondary">
                        <Delete />
                      </Button>
                    </ButtonGroup>
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

export default ItemsCategoryScreen;
