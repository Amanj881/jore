import React, { forwardRef, useState } from "react";
import {isEmpty} from "lodash";

const Sidebar = forwardRef(({ options, module, onClick, backPath }, ref) => {
	const [selectedOption, setSelectedOption] = useState(!isEmpty.options ? options[0].value:"");

	const menuOptionActive = {
		color: "#014BAD"
	};

	const menuOptionDiabled = {
		color: "rgba(10, 12, 15, 0.64)"
	};

	const handleMenuOption = selected => {
		setSelectedOption(selected);
		onClick(selected);
	};

	const menuOptions = options.map((option, index) => {
		return (
			<div key={index} className="flex items-center mb-6 cursor-pointer">
				<svg
					width="6"
					height="6"
					viewBox="0 0 6 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="3" cy="3" r="3" fill="#0A0C0F" fillOpacity="0.64" />
				</svg>

				<div
					onClick={e => {
						handleMenuOption(option.value);
					}}
					className={`ml-4 text-sm leading-6 black-100 font-medium`}
					style={
						selectedOption === option.value
							? menuOptionActive
							: menuOptionDiabled
					}
				>
					{option.label}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="mb-16 flex items-center mt-8 ">
				<a href={backPath ? backPath : "/"}>
					<svg
						className="cursor-pointer mr-3"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
							fill="#014BAD"
						/>
					</svg>
				</a>
				<span className="font-medium text-sm leading-6 text-black-100">
					{module}
				</span>
			</div>
			{menuOptions}
		</div>
	);
});

export default Sidebar;
