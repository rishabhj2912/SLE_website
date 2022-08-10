import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Register = (props) => {
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [student_id, setStudy_id] = useState("");
  const [teacher_id, setPatient_id] = useState("");


  const onChangeStudy_id = (event) => {
    setStudy_id(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePatient_id = (event) => {
    setPatient_id(event.target.value);
  };

  const onChangeType = (event) => {
    setType(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeCpassword = (event) => {
    setCpassword(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setUsername("");
    setStudy_id("");
    setPatient_id("");
    setPassword("");
    setCpassword("");
    setType("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      type: type,
      name: name,
      username: username,
      student_id: student_id,
      teacher_id: teacher_id,
      password: password,
      cpassword: cpassword,
    };

    // error handling
    // if (newUser.contact.length !== 10) {
    //   alert("Invalid Phone Number!");
    //   setContact("");
    // }
    if (newUser.password.length < 8) {
      alert("Password is too short!");
      setPassword("");
      setCpassword("");
    }
    else if (newUser.password !== newUser.cpassword) {
      alert("Confirm password does not match!");
      setCpassword("");
    }
    else {
      axios
        .post("http://localhost:4000/user/register", newUser)
        .then((response) => {
          alert(response.data);
          navigate("/login");
        });

      resetInputs();
    }
  };

  return (
    <Grid container align={"center"} spacing={2}>

      {/* Role menu implementation */}
      <Grid item xs={12}>
        <Box sx={{ maxWidth: 500 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Role"
              onChange={onChangeType}
            >
              <MenuItem value="study">Study</MenuItem>
              <MenuItem value="patient">Patient</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      {/* Adjust space */}
      <Grid item xs={12}></Grid>

      {/* Form for parents */}
      {type === "study" &&
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name of the Study"
              variant="outlined"
              value={name}
              onChange={onChangeName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Create Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={cpassword}
              onChange={onChangeCpassword}
            />
          </Grid>
        </Grid>
      }

      {/* Form for teachers */}
      {type === "patient" &&
        <Grid container align={"center"} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={onChangeUsername}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Create Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={cpassword}
              onChange={onChangeCpassword}
            />
          </Grid>
        </Grid>
      }

      {/* Submit button */}
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
      </Grid>

    </Grid>
  );
};

export default Register;