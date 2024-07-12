import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import day from "../img/day.png";
import night from "../img/night.png";
import logo__light from "../img/logo_light.png";
import logo__dark from "../img/logo_dark.png";

const Header = () => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "theme__dark__mode";
	});

	const switch__theme = () => {
		const newTheme =
			theme === "theme__light__mode"
				? "theme__dark__mode"
				: "theme__light__mode";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	// const [Quran, setQuran] = useState("close");
	// const Toggle__info = () => Quran == "close" ? setQuran("open") : setQuran("close");

	return (
		<>
			<nav className="__border sticky top-[-1px] z-50 backdrop-blur-md">
				<div className="my__container flex justify-between items-center  h-[50px] lg:h-[66px] m-auto ">
					<NavLink to="/" className="logo-div ">
						<img
							src={
								theme === "theme__dark__mode"
									? logo__dark
									: logo__light
							}
							className="w-[40px] ml-[15px]"
						/>
					</NavLink>
					<NavLink
						onClick={switch__theme}
						className="h-9 w-9 mr-4 p-[3px]"
					>
						<img
							src={theme === "theme__dark__mode" ? night : day}
							className="w-full h-full"
						/>
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default Header;
