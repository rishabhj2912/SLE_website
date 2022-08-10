import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Login from "./components/common/Login";
import Navbar from "./components/templates/Navbar";
import Sidebar from "./components/templates/Sidebar"
import Profile from "./components/users/Profile";
import Test from "./components/users/Tests";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
const Layout2 = () => {
  return (
    <div>
      <Sidebar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="tests" element={<Test />}/> */}
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route path="tests" element={<Test />}/>
          <Route path="profile" element={<Profile />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
