import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";

const Profile = (props) => {

  let navigate = useNavigate();
  const auth_token = localStorage.getItem("token");

  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [study_id, setStudy_id] = useState("");
  const [patient_id, setPatient_id] = useState("");
  const [test_arr, setTest_arr] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangeStudy_id = (event) => {
    setStudy_id(event.target.value);
  };

  const onChangePatient_id = (event) => {
    setPatient_id(event.target.value);
  };
  const onChangeTest_arr = (event) => {
    setTest_arr(event.target.value);
  };

  useEffect(() => {

    const auth_token = localStorage.getItem("token");

    if (auth_token == null) {
      navigate("/")
    }

    const token = {
      authToken: auth_token
    }

    axios
      .post("http://localhost:4000/user/getuser", token)
      .then((response) => {
        if (response.data.type === "student") {
          setId(response.data._id);
          setType(response.data.type);
          setName(response.data.name);
          setEmail(response.data.email);
          setSection(response.data.section);
          setContact(response.data.contact);
          setStudy_id(response.data.study_id);
          setCurr_class(response.data.curr_class);
        }
        if (response.data.type === "teacher") {
          setId(response.data._id);
          setType(response.data.type);
          setName(response.data.name);
          setEmail(response.data.email);
          setContact(response.data.contact);
          setPatient_id(response.data.patient_id);
          setTest_arr(response.data.test_arr);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      authToken: auth_token,
      id: id,
      type: type,
      name: name,
      email: email,
      contact: contact,
      section: section,
      curr_class: curr_class,
      study_id: study_id,
      patient_id: patient_id,
      test_arr: test_arr
    };

    axios
      .post("http://localhost:4000/user/update/", newUser)
      .then((response) => {
        console.log("Updated! " + response.data.name)
        console.log(response.data);
      })
      .catch(err => { console.log(err); })
  };

  return (
    <div>
      <br />
      <br />
      <Grid container align={"center"} spacing={2}>
        {type === "student" &&
          <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Student's Name"
                variant="outlined"
                value={name}
                onChange={onChangeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                value={contact}
                onChange={onChangeContact}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Roll Number"
                variant="outlined"
                value={study_id}
                onChange={onChangeStudy_id}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl size="large" style={{ width: 235, align: 'center' }}>
                <InputLabel id="select-Batch" >Class</InputLabel>
                <Select
                  labelId="select-Batch"
                  id="Batch-simple-select"
                  value={curr_class}
                  label="Class"
                  onChange={onChangeCurr_class}
                  xs={12}
                >
                  <MenuItem value={"001"}>Nursery</MenuItem>
                  <MenuItem value={"002"}>Junior K.G.</MenuItem>
                  <MenuItem value={"003"}>Senior K.G.</MenuItem>
                  <MenuItem value={"101"}>1</MenuItem>
                  <MenuItem value={"102"}>2</MenuItem>
                  <MenuItem value={"103"}>3</MenuItem>
                  <MenuItem value={"104"}>4</MenuItem>
                  <MenuItem value={"105"}>5</MenuItem>
                  <MenuItem value={"106"}>6</MenuItem>
                  <MenuItem value={"107"}>7</MenuItem>
                  <MenuItem value={"108"}>8</MenuItem>
                  <MenuItem value={"109"}>9</MenuItem>
                  <MenuItem value={"110"}>10</MenuItem>
                  <MenuItem value={"111"}>11</MenuItem>
                  <MenuItem value={"112"}>12</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl size="large" style={{ width: 235, align: 'center' }}>
                <InputLabel id="select-Batch" >Section</InputLabel>
                <Select
                  labelId="select-Batch"
                  id="Batch-simple-select"
                  value={section}
                  label="Section"
                  onChange={onChangeSection}
                  xs={12}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        }
        {type === "teacher" &&
          <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={onChangeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                value={contact}
                onChange={onChangeContact}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Teacher ID"
                variant="outlined"
                value={patient_id}
                onChange={onChangePatient_id}
              />
            </Grid>
          </Grid>
        }
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;