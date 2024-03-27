import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/dashboard/Dashboard";
import NewProject from "./pages/projects/newProject";
import Register from "./pages/auth/register";
import NewBlog from "./pages/blog/newBlog";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/resetPassword";
import ChangePassword from "./pages/auth/changePassword";
import Projects from "./pages/projects/projects";
import { AuthProvider } from "./components/auth/AuthContext";
import { ModalProvider } from "./components/auth/ModalContext";
import ProjectList from "./pages/projects/projectList";
import UpdateProject from "./pages/projects/updateProject";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/resetpassword" element={<ResetPassword />} />
            <Route exact path="/changepassword" element={<ChangePassword />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/list" element={<ProjectList />} />
            <Route exact path="/projects/newproject" element={<NewProject />} />
            <Route exact path="/projects/:projectId" element={<UpdateProject />} />
            <Route exact path="/blogs/newblog" element={<NewBlog />} />
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
