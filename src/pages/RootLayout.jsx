import { Outlet, Link } from "react-router-dom";
import "./RootLayout.css";

export default function Root() {
  return (
    <div id="root-container">
      {" "}
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/all-posts">Posts</Link>
            </li>
            <li>
              <Link to="/addlist">Add to the list</Link>
            </li>
            <li>
              <Link to="/all-users">All Users</Link>
            </li>
            {/* <li>
              <Link to="/user-details">All Users</Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
