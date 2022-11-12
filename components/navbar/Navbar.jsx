import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/aboutus">    
            ABOUT
            </Link>
            </li>
          <li className="topListItem">
          <Link className="link" to="/contact">
            CONTACT
            </Link>
            </li>
          {user && <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>}
          <li className="topListItem">
          <Link className="link" to="/portfolio">
            PORTFOLIO
            </Link>
            </li>
            <li className="topListItem">
          <Link className="link" to="/services">
            SERVICES
            </Link>
            </li>

          {user && <li className="topListItem">
          <Link className="link" to="/write"> LOGOUT </Link></li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
