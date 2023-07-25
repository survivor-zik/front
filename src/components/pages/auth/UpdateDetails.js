import React, { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import axios from "axios";
const UpdateDetails = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });
  const [pFiled, setPfield] = useState(true);
  const [emailFiled, setEmailfield] = useState(true);
  const [neNameFiled, setnewNamefield] = useState(true);
  const [ageFiled, setAgefield] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {};

    // Extract the username separately as it is always necessary
    const username = data.get("username");
    if (!username) {
      setError({
        status: true,
        msg: "Username is required.",
        type: "error",
      });
      return;
    }

    // Check if password is enabled and not empty, then add to actualData
    if (!pFiled) {
      const password = data.get("password");
      if (password) {
        actualData.password = password;
      }
    }

    // Check if email is enabled and not empty, then add to actualData
    if (!emailFiled) {
      const email = data.get("email");
      if (email) {
        actualData.email = email;
      }
    }

    // Check if name is enabled and not empty, then add to actualData
    if (!neNameFiled) {
      const name = data.get("name");
      if (name) {
        actualData.name = name;
      }
    }

    // Check if age is enabled and not empty, then add to actualData
    if (!ageFiled) {
      const age = data.get("age");
      if (age) {
        actualData.age = age;
      }
    }


    // Send the actualData to the backend using Axios PUT request
    axios
      .put("/userdetails/" + username + "/", actualData)
      .then((response) => {
        if (response.data.status) {
          setError({
            status: true,
            msg: response.data.message,
            type: "error",
          });
        } else {
          setError({
            status: true,
            msg: response.data.message,
            type: "success",
          });
        }
      })
      .catch((error) => {
        // Handle the error here if needed
        setError({
          status: true,
          msg: "Issues in format of Email or Username",
          type: "error",
        });
      });
  };

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
        <h4>
          Update Details username is mandatory (Enter details you want to
          update)
        </h4>
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
