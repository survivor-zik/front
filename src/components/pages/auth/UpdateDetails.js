import React, { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
const UpdateDetails = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const [pFiled, setPfield] = useState(true);
  const [emailFiled, setEmailfield] = useState(true);
  const [neNameFiled, setnewNamefield] = useState(true);
  const [ageFiled, setAgefield] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Ramis')
    const data = new FormData(event.currentTarget);
    const actualData = {};
    
    // data.get("username")?actualData .username=data.get("username") :""
    // data.get("password")?actualData .password=data.get("password") :""
    // data.get("email")?actualData .email=data.get("email"): ""
    // data.get("name")?actualData .name=data.get("name") :""
    // data.get("age")?actualData .name=data.get("age") :""

    // const notNullProperties = Object.keys(actualData).filter(
    //   (key) => actualData[key] === null
    // );

    // console.log("Properties null:", notNullProperties);
    if (
      data.get("username") && !pFiled
        ? data.get("password")
        : true && !emailFiled
        ? data.get("email")
        : true && !neNameFiled
        ? data.get("name")
        : true && ageFiled
        ? data.get("age")
        : true
    ) {
          console.log('work') 
      
    } else {
      console.log("Field are required");
    }
  };
  const UpdateData = () => {};

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 600,
          mx: 4,
        }}
      >
        <h4>Update Details (Enter details you want to update)</h4>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          id="details-change-form"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            id="username"
            label="Enter your existing username"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            id="password"
            type="password"
            label="Enter new password"
            disabled={pFiled}
          />
          <Button onClick={() => setPfield(false)}>Edit Password</Button>
          <TextField
            margin="normal"
            fullWidth
            name="email"
            id="email"
            type="email"
            label="Enter your new email "
            disabled={emailFiled}
          />
          <Button onClick={() => setEmailfield(false)}>Edit Email</Button>

          <TextField
            margin="normal"
            fullWidth
            name="name"
            id="name"
            label="Enter your new name"
            disabled={neNameFiled}
          />
          <Button onClick={() => setnewNamefield(false)}>Edit Name</Button>

          <TextField
            margin="normal"
            fullWidth
            name="age"
            id="age"
            label="Enter your new Age"
            disabled={ageFiled}
          />
          <Button onClick={() => setAgefield(false)}>Edit Age</Button>

          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Update
            </Button>
          </Box>
          {error.status ? (
            <Alert severity={error.type}>{error.msg} </Alert>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default UpdateDetails;
