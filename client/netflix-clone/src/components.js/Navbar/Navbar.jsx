import "./navbar.scss";
import { Link } from "react-router-dom";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [scroll, setscroll] = useState(false);

  window.onscroll = () => {
    setscroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={scroll ? "navbar scrolled" : "navbar "}>
      <div className="container">
        <div className="listContainerleft">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          ></img>
          <Link to="/" className="itemLink">
            HomePage
          </Link>
          <Link to="/series" className="itemLink">
            Series
          </Link>
          <Link to="/movies" className="itemLink">
            Movies
          </Link>
          <Link to="/movies" className="itemLink">
            New And Popular
          </Link>
          <Link to="/movies" className="itemLink">
            My List
          </Link>
        </div>

        <div className="listContainerright">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
