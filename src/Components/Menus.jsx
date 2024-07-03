import { Tooltip } from "@material-tailwind/react";
import { RiBookOpenFill, RiAlignCenter, RiBookmarkFill } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const title = (e) => (e.isActive ? "current" : "text__title");

const MyCss = "flex flex-col items-center justify-between w-[25%] h-full p-2";

const Menus = () => {
	return (
		<div>
			{/* ---------------- desktop view below -----------------  */}

			<div className="lg:flex h-[80vh] justify-center items-center fixed p-6 hidden ">
				<ul className="flex flex-col gap-3">
					{/* -------------------1st----------------- */}

					<NavLink className={title} to="/">
						<Tooltip content="সূরা সমূহ" placement="right">
							<li className="p-2 rounded-lg  cursor-pointer  shadow-lg relative">
								<RiBookOpenFill className="" />
							</li>
						</Tooltip>
					</NavLink>

					{/* ----------------------2nd--------------------- */}
					<NavLink className={title} to="/Topics">
						<Tooltip content="বিষয়ভিত্তিক" placement="right">
							<li className="p-2 cursor-pointer rounded-lg  shadow-lg relative">
								<RiAlignCenter />
							</li>
						</Tooltip>
					</NavLink>
					{/* -------------------- 3rd ---------------------- */}
					<NavLink className={title} to="/Saved">
						<Tooltip content="সংরক্ষিত" placement="right">
							<li className="p-2 cursor-pointer rounded-lg  shadow-lg relative">
								<RiBookmarkFill />
							</li>
						</Tooltip>
					</NavLink>
					{/* --------------------------4th----------------------- */}
					<NavLink className={title} to="/Settings">
						<Tooltip content="সেটিংস" placement="right" arrow>
							<li className="p-2 cursor-pointer rounded-lg  shadow-lg relative">
								<GiSettingsKnobs />
							</li>
						</Tooltip>
					</NavLink>
				</ul>
			</div>

			{/* <---------------------- movile view below------------------>*/}

			<div className="lg:hidden z-50 bottom-0 w-full fixed backdrop-blur-md border-t border-slate-500/10">
				<div className="flex flex-row items-center justify-between h-[60px] w-full">
					{/*----------- 1st ----------*/}

					<NavLink className={MyCss} to="/">
						<NavLink className={title} to="/">
							<RiBookOpenFill size={21} />
						</NavLink>
						<span className="text-[12px] ">
							<NavLink className={title} to="/">
								সূরা সমূহ
							</NavLink>
						</span>
					</NavLink>
					{/* ---------------- 2nd ---------------- */}
					<NavLink className={MyCss} to="/Topics">
						<NavLink className={title} to="/Topics">
							<RiAlignCenter size={20} />
						</NavLink>
						<span className="text-[12px] ">
							<NavLink className={title} to="/Topics">
								বিষয়ভিত্তিক
							</NavLink>
						</span>
					</NavLink>
					{/* -----------------3rd--------------- */}
					<NavLink className={MyCss} to="/Saved">
						<NavLink className={title} to="/Saved">
							<RiBookmarkFill size={20} />
						</NavLink>
						<span className="text-[12px] ">
							<NavLink className={title} to="/Saved">
								সংরক্ষিত
							</NavLink>
						</span>
					</NavLink>
					{/* ---------------------4th--------------------- */}
					<NavLink className={MyCss} to="/Settings">
						<NavLink className={title} to="/Settings">
							<GiSettingsKnobs size={20} />
						</NavLink>
						<span className="text-[12px] ">
							<NavLink className={title} to="/Settings">
								সেটিংস
							</NavLink>
						</span>
					</NavLink>
					{/* ----------------end-------------- */}
				</div>
			</div>
		</div>
	);
};

export default Menus;
