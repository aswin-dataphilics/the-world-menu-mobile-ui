import React from "react";
import { Grid, Box, TextField, Button, Typography } from "@material-ui/core";
import { useState } from "react";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container justify="center" style={{ marginTop: 100 }}>
      <Grid item lg={4} md={7} xs={12}>
        <Box display="flex" textAlign="center" flexDirection="column">
          <Typography color="primary" variant="h3">
            {"FoodTech"}
          </Typography>
          <Typography color="textPrimary" paragraph>
            {"Login With Your Credientials"}
          </Typography>
        </Box>
        <Box component="form" onSubmit={submitHandler}>
          <TextField
            id="email"
            variant="outlined"
            label="Email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            type="email"
            margin="normal"
            required
          />

          <TextField
            id="password"
            variant="outlined"
            label="Password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            type="password"
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 12 }}
            fullWidth
          >
            {"Login"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
