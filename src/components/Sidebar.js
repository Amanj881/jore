import "./Sidebar.css";
import React from "react";
import axios from '../http-common';
import Avatar from 'react-avatar';
import {removeUser} from '../utils/Common';
import { useHistory,LinkLink } from "react-router-dom";

export const Sidebar = ({ width, height, options,label }) => {
  const [xPosition, setX] = React.useState(-width);
    let history = useHistory();

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

  const list = options.map(parts =><a href={`/${parts.url}`} key={parts.id}> <li key={parts.id} className="border-b py-8 italic text-2xl font-bold" style={{listStyle:"none"}}>{parts.label}</li></a>)


  

  const handleLogout = () => {
   removeUser();
   history.push('/login');
}

  return (
    <React.Fragment>
      <div
        className="side-bar w-64"
        style={{
          transform: `translatex(${xPosition}px)`,
          
          minHeight: height
        }}
      >
 
        <div className=" text-center py">
          <label className="text-3xl text-white  font-bold uppercase  ">{label} </label>
        {list}
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