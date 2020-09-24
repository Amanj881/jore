import React, { forwardRef } from "react";
import "./Loader.css";

function Loader() {
	return (
		<div className="flex justify-center">
			<div className="dot-flashing text-center z-40 content-center"></div>
		</div>
	);
}
export default Loader;
