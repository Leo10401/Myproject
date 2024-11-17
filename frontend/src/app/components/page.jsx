'use client'
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css"; // Import the boxicons directly from the package
import "@fontsource/poppins"; // Import Poppins font directly
import "./style.css"; // Custom CSS if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Sidebar = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <header>
          <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={() => setSidebarClosed(false)}>
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <FontAwesomeIcon icon="fa-paw" />
                  <span className="text nav-text">Your Pets</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li>
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">
                {isDarkMode ? "Light mode" : "Dark mode"}
              </span>

              <div className="toggle-switch" onClick={toggleDarkMode}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
