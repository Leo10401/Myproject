'use client'
import React, { useEffect } from 'react';
import './style.css';

const PandaLoginPage = () => {
  useEffect(() => {
    const usernameRef = document.getElementById("username");
    const passwordRef = document.getElementById("password");
    const eyeL = document.querySelector(".eyeball-l");
    const eyeR = document.querySelector(".eyeball-r");
    const handL = document.querySelector(".hand-l");
    const handR = document.querySelector(".hand-r");

    const normalEyeStyle = () => {
      eyeL.style.cssText = `
        left:0.6em;
        top: 0.6em;
      `;
      eyeR.style.cssText = `
        right:0.6em;
        top:0.6em;
      `;
    };

    const normalHandStyle = () => {
      handL.style.cssText = `
            height: 2.81em;
            top:8.4em;
            left:7.5em;
            transform: rotate(0deg);
        `;
      handR.style.cssText = `
            height: 2.81em;
            top: 8.4em;
            right: 7.5em;
            transform: rotate(0deg)
        `;
    };

    usernameRef.addEventListener("focus", () => {
      eyeL.style.cssText = `
        left: 0.75em;
        top: 1.12em;  
      `;
      eyeR.style.cssText = `
        right: 0.75em;
        top: 1.12em;
      `;
      normalHandStyle();
    });

    passwordRef.addEventListener("focus", () => {
      handL.style.cssText = `
            height: 6.56em;
            top: 3.87em;
            left: 11.75em;
            transform: rotate(-155deg);    
        `;
      handR.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        right: 11.75em;
        transform: rotate(155deg);
      `;
      normalEyeStyle();
    });

    document.addEventListener("click", (e) => {
      const clickedElem = e.target;
      if (clickedElem !== usernameRef && clickedElem !== passwordRef) {
        normalEyeStyle();
        normalHandStyle();
      }
    });
  }, []);

  return (
    <div className="container">
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Username here..." /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password here..." /><br />
        <button type="button">Login</button>
      </form>
      <div className="ear-l"></div>
      <div className="ear-r"></div>
      <div className="panda-face">
        <div className="blush-l"></div>
        <div className="blush-r"></div>
        <div className="eye-l">
          <div className="eyeball-l"></div>
        </div>
        <div className="eye-r">
          <div className="eyeball-r"></div>
        </div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
      <div className="hand-l"></div>
      <div className="hand-r"></div>
      <div className="paw-l"></div>
      <div className="paw-r"></div>
    </div>
  );
};

export default PandaLoginPage;
