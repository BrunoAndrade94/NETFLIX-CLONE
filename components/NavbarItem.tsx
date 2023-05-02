import React from "react";

interface NavbarItemPropos {
	label: string;
}

const NavbarItem: React.FC<NavbarItemPropos> = ({ label }) => {
	return (
		<div className='text-white cursor-pointer hover:text-gray-300 transition'>
			{label}
		</div>
	);
};

export default NavbarItem;
