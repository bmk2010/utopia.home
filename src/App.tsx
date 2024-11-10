import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleHome from "./pages/SingleHome";
import Login from "./pages/Login";
import LikesPage from "./pages/LikesPage";
import ProfilePage from "./pages/ProfilePage";
import AddHome from "./pages/AddHome";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SingleHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add" element={<AddHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

