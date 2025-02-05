import React, { useEffect } from "react";
import "../styles/MainContainer.css";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";

function MainContainer() {
  useEffect(() => {
      const alllst = document.querySelector(".menuList").querySelectorAll("li");
      
      function changePopAct() {
          alllst.forEach((N) => N.classList.remove("active"));
          
          this.classList.add("active");
      }
      
      alllst.forEach((N) => N.addEventListener("click", changePopAct));
  }, []);
    
    return (
        <div className="mainContainer">
            <Banner />
        
        <div className="menuList">
            <ul>
                <li>
                    <a href="#"> Popular Music </a>
                </li>
                <li>
                    <a href="#"> Music Albums </a>
                </li>
                <li>
                    <a href="#"> Songs </a>
                </li>
                <li>
                    <a href="#"> Fans </a>
                </li>
                <li>
                    <a href="#"> About </a>
                </li>
        
            </ul>
        
            <p>
                <i>
                    <FaUsers />
                </i>
                20.4M <span>Followers</span>
            </p>
        </div>
        
        <AudioList />
        </div>
    );
}

export {  MainContainer  };