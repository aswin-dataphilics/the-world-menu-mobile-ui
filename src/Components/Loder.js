import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

const Loder = () => {
  return (
    <Grid container justify="center">
      <Grid item md={6} xs={10} style={{ textAlign: "center" }}>
        <CircularProgress size={90} thickness={2} color="primary" />
      </Grid>
    </Grid>
  );
};

export default Loder;
