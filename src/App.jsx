// import React, { useEffect, useContext } from "react";
// import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { AuthContext } from "./components/auth/AuthContext";
// import "./css/style.css";
// import "./charts/ChartjsConfig";

// // Components imports...
// import Dashboard from "./pages/dashboard/Dashboard";
// import NewProject from "./pages/projects/newProject";
// import Register from "./pages/auth/register";
// import NewBlog from "./pages/blog/newBlog";
// import Login from "./pages/auth/login";
// import ResetPassword from "./pages/auth/resetPassword";
// import ChangePassword from "./pages/auth/changePassword";
// import Projects from "./pages/projects/projects";
// import { AuthProvider } from "./components/auth/AuthContext";
// import { ModalProvider } from "./components/auth/ModalContext";
// import ProjectsList from "./pages/projects/projectsList";
// import UpdateProject from "./pages/projects/updateProject";
// import Blogs from "./pages/blog/blogs";
// import BlogsList from "./pages/blog/blogsList";
// import ProjectDetail from "./pages/projects/projectDetail";
// import Users from "./pages/users/users";
// import UsersList from "./pages/users/usersList";

// function ProtectedRoute({ element, ...rest }) {
//   const { isAuthenticated } = useContext(AuthContext); // Get the isAuthenticated state from the AuthContext

//   // Render the element if the user is authenticated, otherwise redirect to the login page
//   return isAuthenticated ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// }

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     document.querySelector("html").style.scrollBehavior = "auto";
//     window.scroll({ top: 0 });
//     document.querySelector("html").style.scrollBehavior = "";
//   }, [location.pathname]);

//   return (
//     <>
//       <AuthProvider>
//         <ModalProvider>
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route exact path="/login" element={<Login />} />
//             <Route exact path="/register" element={<Register />} />
//             <Route exact path="/resetpassword" element={<ResetPassword />} />
//             {/* Wrap ProtectedRoutes in a Route or a React.Fragment */}
//             <Route element={<ProtectedRoute element={<ChangePassword />} />} path="/changepassword" />
//             <Route element={<ProtectedRoute element={<Dashboard />} />} path="/dashboard" />
//             <Route element={<ProtectedRoute element={<Projects />} />} path="/projects" />
//             <Route element={<ProtectedRoute element={<ProjectsList />} />} path="/projects/list" />
//             <Route element={<ProtectedRoute element={<NewProject />} />} path="/projects/newproject" />
//             <Route element={<ProtectedRoute element={<UpdateProject />} />} path="/projects/update/:projectId" />
//             <Route element={<ProtectedRoute element={<ProjectDetail />} />} path="/projects/detail/:projectId" />
//             <Route element={<ProtectedRoute element={<Blogs />} />} path="/blogs" />
//             <Route element={<ProtectedRoute element={<NewBlog />} />} path="/blogs/newblog" />
//             <Route element={<ProtectedRoute element={<BlogsList />} />} path="/blogs/list" />
//             <Route element={<ProtectedRoute element={<Users />} />} path="/users" />
//             <Route element={<ProtectedRoute element={<UsersList />} />} path="/users/list" />
//           </Routes>
//         </ModalProvider>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext";
import { ModalProvider } from "./components/auth/ModalContext";
import "./css/style.css";
import "./charts/ChartjsConfig";

// Components imports...
import Dashboard from "./pages/dashboard/Dashboard";
import NewProject from "./pages/projects/newProject";
import Register from "./pages/auth/register";
import NewBlog from "./pages/blog/newBlog";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/resetPassword";
import ChangePassword from "./pages/auth/changePassword";
import Projects from "./pages/projects/projects";
import ProjectsList from "./pages/projects/projectsList";
import UpdateProject from "./pages/projects/updateProject";
import Blogs from "./pages/blog/blogs";
import BlogsList from "./pages/blog/blogsList";
import ProjectDetail from "./pages/projects/projectDetail";
import Users from "./pages/users/users";
import UsersList from "./pages/users/usersList";
import Authors from "./pages/authors/authors";
import BlogDetail from "./pages/blog/blogDetail";
import UpdateBlog from "./pages/blog/updateBlog";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

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
            <Route exact path="/projects/list" element={<ProjectsList />} />
            <Route exact path="/projects/newproject" element={<NewProject />} />
            <Route exact path="/projects/update/:projectId" element={<UpdateProject />} />
            <Route exact path="/projects/detail/:projectId" element={<ProjectDetail />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blogs/newblog" element={<NewBlog />} />
            <Route exact path="/blogs/list" element={<BlogsList />} />
            <Route exact path="/blogs/detail/:blogId" element={<BlogDetail />} />
            <Route exact path="/blogs/update/:blogId" element={<UpdateBlog />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/list" element={<UsersList />} />
            <Route exact path="/authors" element={<Authors />} />
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;