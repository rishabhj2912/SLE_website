import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default props => {
const navigate = useNavigate();

  return (<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Profile
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/tests")}>
            Tests/ Surveys Lists
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Menu>
 <a className="menu-item">
        <h1>Tests</h1>
      </a>
      <a className="menu-item" href="/">
        Add Test
      </a>
      <a className="menu-item" href="/register">
        Modify/Delete Test
      </a>
      <a className="menu-item">
        <h1>Surveys</h1>
      </a>
      <a className="menu-item" href="/login">
        Add Survey
      </a>
      <a className="menu-item" href="/">
        Modify/delete Survey
      </a>
      <a className="menu-item">
        <h1>Participants</h1>
      </a>
      <a className="menu-item" href="/">
        Add/Remove Participants
      </a>
    </Menu></div>
  );
};