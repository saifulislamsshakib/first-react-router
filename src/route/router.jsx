import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
// import About from "../pages/About";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Root from "../pages/RootLayout.jsx";
import Contact from "../pages/Contact.jsx";
import App from "../pages/App.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import PostDetailes from "../pages/PostDetailes.jsx";
import Users from "../pages/Users.jsx";
import UserDetailes from "../pages/UserDetais.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "/addlist", element: <App /> },
      {
        path: "/all-posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostDetailes />,
      },
      { path: "/all-users", element: <Users /> },
      { path: "/user-details/:id", element: <UserDetailes /> },
    ],
  },
]);
