'use client'
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css"; // Import the boxicons directly from the package
import "./style.css"; // Custom CSS if needed
import "./search.css"; // Custom CSS if needed
import useAppContext from "@/context/AppContext";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Sidebar = ({ children }) => {

  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);
  const { userLoggedIn, logout } = useAppContext();

  const router = useRouter();
  const Addyrpet = () => {
    router.push("/addpet");
  }
  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };
  const showLoginOptions = () => {
    if (userLoggedIn) {
      return (
        <li>
        <span key={logout} onClick={logout} className="flex flex-row">
          <i className="bx bx-log-out icon flex flex-row"></i>
          <span className="text nav-text" >Logout</span>
        </span>
      </li>
      )
    } else {
      return <a href="/login">
        <i class='bx bx-log-in icon bx-tada bx-rotate-180' >Login</i>
        
        </a>

    }
  }


  return (
    <div>

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
                  <a href="/">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Home</span>

                  </a>
                </li>

                <li className="nav-link">
                <link rel="stylesheet" href="" />
                <span onClick={Addyrpet} title="Add New Pet" className="icon cursor-pointer outline-none hover:rotate-90 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-zinc-400 fill-none icon group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" strokeWidth="1.5" />
                    <path d="M8 12H16" strokeWidth="1.5" />
                    <path d="M12 16V8" strokeWidth="1.5" />
                  </svg> 
                </span>                    
                <span className="text nav-text">Give Pet</span>


                </li>

                <li className="nav-link">
                  <a href="/About-us">
                  <i class='bx bx-info-square bx-lg icon'></i>
                    <span className="text nav-text">About us</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="/listpet">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" />
                      <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" />
                      <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" />
                      <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
                      <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
                    </svg>
                    <span className="text nav-text">All Pets</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
            {showLoginOptions()}

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

        <div className="wrap-input-18">

        </div>

      </div>
      {children}
    </div>

  );
};

export default Sidebar;
