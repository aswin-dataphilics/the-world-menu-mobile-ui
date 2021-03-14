import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useState } from "react";

const LoginScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setOtpGenerated(true);
  };

  const submitOtpHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMobile("");
    setOtpGenerated(false);
    setOtp("");
    history.push("/");
  };
  return (
    <>
      <Box component="form" mx={4} mt={8} onSubmit={submitHandler}>
        <TextField
          id="name"
          variant="outlined"
          label="Name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          type="text"
          margin="normal"
          disabled={otpGenerated}
        />

        <TextField
          id="name"
          variant="outlined"
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          type="email"
          margin="normal"
          required
          disabled={otpGenerated}
        />

        <TextField
          id="name"
          variant="outlined"
          label="Mobile No."
          placeholder="Enter Mobile No."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          fullWidth
          type="text"
          margin="normal"
          required
          disabled={otpGenerated}
        />

        <Button
          // component={Box}
          // mt={2}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={otpGenerated}
        >
          Request OTP
        </Button>
      </Box>
      {otpGenerated && (
        <Box
          component="form"
          mx={4}
          mt={4}
          autoComplete="off"
          onSubmit={submitOtpHandler}
        >
          <TextField
            id="name"
            variant="outlined"
            label="OTP"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
            type="number"
            margin="normal"
            required
          />

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Box>
      )}
    </>
  );
};

export default LoginScreen;
