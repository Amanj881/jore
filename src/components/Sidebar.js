import "./Sidebar.css";
import React from "react";
import {Link} from "@reach/router";
import axios from '../http-common';
import Avatar from 'react-avatar';

export const Sidebar = ({ width, height, options,label }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);

  const option=options.map((opt,i)=>{
    return(
      <>
    <div className="text-center font-bold uppercase text-xl py-12 italic h-6"  key={i}><Link to={`/${opt.url}`} key={i}>{opt.label}</Link></div>    
    <hr className="shadow-lg"/>    
    </>

  )})

  const handleLogout = () => {
   axios.post('/auth/logout');
}

  return (
    <React.Fragment>
      <div
        className="side-bar w-64 h-full"
        style={{
          transform: `translatex(${xPosition}px)`,
          
          minHeight: height
        }}
      >
 
        <div className=" text-center">
          <label className="text-3xl text-white  font-bold uppercase  ">{label} </label>
        {option}
        </div>
        <div className=" text-3xl text-white  font-bold capitalize text-center mt-auto mb-4 ">
        <Avatar  name="LawShastra Journal" size="50" round={true} className="mr-2"/>

        <label className="cursor-pointer"  onClick={handleLogout}>Logout </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;