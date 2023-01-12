import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/useList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
