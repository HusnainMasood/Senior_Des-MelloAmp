import React from 'react'

function RightMenu() {
  return (
    <div className="rightContainer">
      
      <div className="goProfile">
        <i>
            <FaCrown />
            <p>
                <span> Go </span> Pro
            </p>
        </i>
      
        <i>
            <FaBell />
        </i>
      
        <i>
            <FaRegHeart />
        </i>
      </div>
      
      <div className="Profile">
        <i>
            <FaSun />
        </i>
        <i>
            <FaCogs />
        </i>
      
      <div className="ProfileImage">
        <img src={profile} alt="" />
      </div>
      </div>
    </div>
  );

}

export {  RightMenu  };