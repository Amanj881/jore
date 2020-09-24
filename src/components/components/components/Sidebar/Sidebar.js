import React from "react";
import Logo from "../Logo";
import SubjectPattern from "../SubjectPattern";

function Sidebar(props) {
  return (
    <div className="lg:flex flex-col bg-black-7" style={{ width: "15rem" }}>
      <div className="h-0 flex-1 flex flex-col pl-6 pt-6">
        <Logo className="" fill="white" />
      </div>
      <div>
        <SubjectPattern />
      </div>
    </div>
  );
}

export default Sidebar;