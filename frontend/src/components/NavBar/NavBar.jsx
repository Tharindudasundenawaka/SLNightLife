import React, { useState, useEffect, useRef } from "react";
import Logo from "../../Pic/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Service from "../../ServiceCatogary";
import "./NavBar.css";

function Navbar({ onContactUsLinkClick }) {
  const [showMenu, setShowMenu] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchResultsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(event.target)
    ) {
      setShowSearchResults(false);
      setSearchTerm("");
      // setShowMenu(false)
    }

    if (navigate) {
      setShowSearchResults(false);
      setSearchTerm("");
    }
  };

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();

    setSearchTerm(event.target.value.toLowerCase());

    if (value === "") {
      setShowSearchResults(false);
    }

    const result = Service.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(result);
    setShowSearchResults(true);
  };

  return (
    <div>
  

      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink
            exact
            to="/"
            onClick={(e) => {
              window.scrollTo(0, 0);
              setShowMenu(false);
            }}
          >
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <button className="navbar-toggle" onClick={handleMenuClick}>
          <span className="navbar-toggle-icon"></span>
        </button>

        <ul className={showMenu ? "navbar-links active" : "navbar-links"}>
          <li>
            <NavLink
              exact
              to="/"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                onContactUsLinkClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Login
            </NavLink>
          </li>

            <li>
            <NavLink
              to="/signup"
              className="navbar-links li"
              activeClassName="active"
              onClick={() => {
                handleClick();
                closeMenu();
                setShowMenu(false);
              }}
            >
              Sign Up
            </NavLink>
          </li>

          <li>
            <div className="navbar-search">
              <input
                className="navbar-search-input"
                type="text"
                placeholder="Search Services.."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </li>

        

          

         
{/* 
          {showSearchResults && (
            <div className="search-results" ref={searchResultsRef}>
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  onClick={(e) => {
                    navigate(`/products/${item.id}`);
                    handleClick();
                    setShowMenu(false);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </div>
          )} */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
