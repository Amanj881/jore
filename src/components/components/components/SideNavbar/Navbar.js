import React, { forwardRef, useState } from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ navOptions,sidebarStyle,labelStyle }, ref) => {
	const [selectedItem, setSelectedItem] = useState(
		!isEmpty.navOptions ? navOptions[0].label : ""
	);

	const menuOptionActive = {
		color: "#014BAD"
	};

	const menuOptionDiabled = {
		color: "rgba(10, 12, 15, 0.64)"
	};

	const menuOptions = navOptions.map((option, index) => {
		return (
			<div
				key={index}
				className={sidebarStyle ? sidebarStyle :"flex items-center mb-6 cursor-pointer"}
				style={
					selectedItem === option.label ? menuOptionActive : menuOptionDiabled
				}
			>
				<div className="mr-3">{option.icon}</div>
				<div
					onClick={e => {
						setSelectedItem(option.label);
					}}
					className={labelStyle ? labelStyle :`text-sm leading-6`}
				>
					<Link to={option.path}>{option.label}</Link>
				</div>
			</div>
		);
	});

	return <div>{menuOptions}</div>;
});

export default Navbar;
