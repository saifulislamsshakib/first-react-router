import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Root from "../pages/RootLayout.jsx";
import Contact from "../pages/Contact.jsx";
import App from "../pages/App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/all-posts", element: <Posts /> },
      { path: "/addlist", element: <App /> },
    ],
  },
]);
