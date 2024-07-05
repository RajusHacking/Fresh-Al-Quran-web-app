

import { GiSettingsKnobs } from "react-icons/gi";
import { SlArrowLeft } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import day__icon from "../../../img/day.png";
import night__icon from "../../../img/night.png";
import Surah__info from "../../../Json/surah/_101_al_qariah.json";
import { MdKeyboardArrowDown } from "react-icons/md";
   
const _101_al_qariah = () => {

    const number = "১০১";
	const name = "আল-ক্বরি'আহ";
	const means = "মহাসংকট";
	const verse_num_bn = "১১";
	const place = "মক্কা";

	// setting button works
	const [settings, setSettings] = useState("close");
	const settings__switch = () =>
		settings == "close" ? setSettings("open") : setSettings("close");

	// theme works
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "theme__dark__mode";
	});
	const switch__theme = () => {
		const newTheme =
			theme === "theme__dark__mode"
				? "theme__light__mode"
				: "theme__dark__mode";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	// arabic__font visibility
	let arb__yes = "yes";
	let arb__no = "no";
	const [arabic__show, setArabic__show] = useState(() => {
		const saved__arabic__show = localStorage.getItem("arabic__show");
		return saved__arabic__show !== null ? saved__arabic__show : arb__no;
	});

	const arabic__show__btn = () =>
		arabic__show == arb__yes
			? setArabic__show(arb__no)
			: setArabic__show(arb__yes);

	useEffect(() => {
		localStorage.setItem("arabic__show", arabic__show);
	}, [arabic__show]);

	// arabic font size
	let arb__big = "text-[33px]";
	let arb__small = "text-[23px]";
	const [arabic__font, setArabic__font] = useState(() => {
		const saved__arabic__font = localStorage.getItem("arabic__font");
		return saved__arabic__font !== null ? saved__arabic__font : arb__small;
	});

	const arabic__font__size = () =>
		arabic__font == arb__small
			? setArabic__font(arb__big)
			: setArabic__font(arb__small);

	useEffect(() => {
		localStorage.setItem("arabic__font", arabic__font);
	}, [arabic__font]);

	// visibility bangla artho
	let bn__yes = "yes";
	let bn__no = "no";
	const [bangla__show, setBangla__show] = useState(() => {
		const saved__bangla__show = localStorage.getItem("bangla__show");
		return saved__bangla__show !== null ? saved__bangla__show : bn__no;
	});

	const bangla__show__btn = () =>
		bangla__show == bn__yes
			? setBangla__show(bn__no)
			: setBangla__show(bn__yes);

	useEffect(() => {
		localStorage.setItem("bangla__show", bangla__show);
	}, [bangla__show]);

	// bangla font size
	let bn__small = "text-[17px]";
	let bn__big = "text-[25px]";
	const [bangla__font, setBangla__font] = useState(() => {
		const saved__bangla__font = localStorage.getItem("bangla__font");
		return saved__bangla__font !== null ? saved__bangla__font : bn__small;
	});
	const bangla__font__size = () =>
		bangla__font == bn__small
			? setBangla__font(bn__big)
			: setBangla__font(bn__small);
	useEffect(() => {
		localStorage.setItem("bangla__font", bangla__font);
	}, [bangla__font]);

	// visivility tafsir tab
	let tafsir__yes = "yes";
	let tafsir__no = "no";
	const [tafsir__show, setTafsir__show] = useState(() => {
		const saved__tafsir__show = localStorage.getItem("tafsir__show");
		return saved__tafsir__show !== null ? saved__tafsir__show : tafsir__yes;
	});

	const tafsir__show__btn = () =>
		tafsir__show == tafsir__yes
			? setTafsir__show(tafsir__no)
			: setTafsir__show(tafsir__yes);

	useEffect(() => {
		localStorage.setItem("tafsir__show", tafsir__show);
	}, [tafsir__show]);

	// tafsir drawer open
	const [expandedId, setExpandedId] = useState(null);

	const open__my__accordion = (id) => {
		setExpandedId(expandedId !== id ? id : null);
	};

	useEffect(() => {
		localStorage.setItem("tafsir__show", tafsir__show);
	}, [tafsir__show]);

  return (
    <>
			<nav className="__border fixed w-full top- z-50 border-b backdrop-blur-md ">
				<div className=" flex justify-between items-center  h-[50px] lg:h-[66px] m-auto my__container">
					<Link
						to="/"
						className="toggle-view-mode p-3 m-2 hover:bg-slate-500/10 rounded-full cursor-pointer"
					>
						<SlArrowLeft size={12} className="active:scale-95" />
					</Link>
					<div className="middle flex flex-col justify-end items-center relative">
						<div className="text__title flex justify-center items-center">
							<h2 className="">{name}</h2>
							<span className=" mr-[2px] text-[10px] ml-[6px] ">
								( {means} )
							</span>
						</div>
						<div className="text__sub__title text-[10px] flex flex-row justify-center items-center mt-[-2px] mb-[-5px]">
							<span className="mr-[2px] ">সূরাঃ</span>
							<li className="mr-[6px] text-[12px] flex">
								{number}
							</li>
							<span className="mr-[2px] ml-[2px] mt-[3px]">
								•
							</span>
							<span className="mr-[2px] ml-[6px]">আয়াতঃ</span>
							<li className="mr-[2px] text-[12px] flex">
								{verse_num_bn}
							</li>
							<span className="mr-[6px]">টি</span>
							<span className="mr-[2px] ml-[2px] mt-[3px]">
								•
							</span>
							<span className="mr-[2px] ml-[6px]">অবতীর্ণঃ</span>
							<span className="mr-[2px]">{place}</span>
						</div>
					</div>
					<span
						onClick={settings__switch}
						className="toggle-view-mode flex gap-3 p-3 m-2 hover:bg-slate-500/10 rounded-full cursor-pointer"
					>
						<GiSettingsKnobs />
					</span>
				</div>
			</nav>
			<div
				className={
					settings == "open"
						? "flex flex-col fixed top-[-60px] items-center justify-center h-[110vh] w-full"
						: "hidden"
				}
			>
				<div className="absolute top-[40px] bottom-0 w-full justify-center items-center backdrop-blur bg-neutral-800/70 m-auto">
					<div className="flex justify-center items-center pt-[140px]">
						<div className=" flex flex-col justify-between items-center w-[350px] mx-5 card__bg rounded-md p-3 option__border">
							<div className="settings__title__bar flex justify-between items-center w-full mb-5">
								<span></span>
								<h1 className="text-[25px] pl-5">Settings</h1>
								<span
									onClick={settings__switch}
									className=" hover:scale-95 cursor-pointer bg-slate-900/10 p-1 mr-1 rounded-full"
								>
									<IoClose />
								</span>
							</div>
							<div className="settings__theme flex justify-between w-full items-center option__border rounded-full">
								<h2 className="pl-4 text-[14px]">
									স্ক্রিন কেমন হবে?
								</h2>

								<div
									onClick={switch__theme}
									className="flex justify-center items-center rounded-full p-2 w-[195px]  relative cursor-pointer tab__bg transision__1s"
								>
									<h2 className="z-20 pr-[12px] text-[14px]  flex gap-1 justify-center items-center">
										<img
											className="h-[25px]"
											alt=""
											src={day__icon}
										/>
										সেপিয়া
									</h2>
									<h2 className="z-20 pl-[15px] text-[14px]  flex gap-1 justify-center items-center">
										<img
											className="h-[25px]"
											src={night__icon}
											alt=""
										/>
										অন্ধকার
									</h2>
									<span
										className={`option__border__active rounded-full card__bg opacity-80 absolute top-[3px] z-10 h-[36px] w-[90px] left-1  ${
											theme === "theme__dark__mode"
												? "theme__switch__a"
												: "trans__back"
										}`}
									></span>
								</div>
							</div>
							<div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
								<h2 className="pl-4 text-[14px]">
									আরবি আয়াত থাকবে?
								</h2>

								<div
									onClick={arabic__show__btn}
									className="flex justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
								>
									<h2 className="z-20 pr-[32px] text-[14px]">
										না
									</h2>
									<h2 className="z-20 pr-[5px] text-[14px]">
										হ্যা
									</h2>
									<span
										className={`option__border__active card__bg opacity-80 absolute top-[2px] z-10 h-[33px] w-[50px] left-1 rounded-full ${
											arabic__show === arb__yes
												? "trans__back"
												: "font__switch__a"
										}`}
									></span>
								</div>
							</div>

							<div
								className={
									arabic__show === arb__yes
										? "hidden"
										: "flex w-full"
								}
							>
								<div className="w-full">
									<div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
										<h2 className="pl-4 text-[14px]">
											অক্ষর সাইজ কেমন হবে?
										</h2>

										<div
											onClick={arabic__font__size}
											className="flex justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
										>
											<h2 className="z-20 pr-[25px] text-[14px]">
												ছোট
											</h2>
											<h2 className="z-20 pr-[5px] text-[14px]">
												বড়
											</h2>
											<span
												className={`option__border__active card__bg opacity-80 absolute top-[2px] z-10 h-[33px] w-[50px] left-1 rounded-full ${
													arabic__font === arb__small
														? "trans__back"
														: "font__switch__a"
												}`}
											></span>
										</div>
									</div>
									<div className="h-14 flex justify-center items-center">
										<h3
											className={`flex gap-1 ${arabic__font}`}
										>
											<h1>〝</h1>ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
											<h1>〞</h1>
										</h3>
									</div>
								</div>
							</div>
							<div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
								<h2 className="pl-4 text-[14px]">
									বাংলা অর্থ থাকবে?
								</h2>

								<div
									onClick={bangla__show__btn}
									className="flex justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
								>
									<h2 className="z-20 pr-[32px] text-[14px]">
										না
									</h2>
									<h2 className="z-20 pr-[5px] text-[14px]">
										হ্যা
									</h2>
									<span
										className={`option__border__active card__bg opacity-80 absolute top-[2px] z-10 h-[33px] w-[50px] left-1 rounded-full ${
											bangla__show === bn__yes
												? "trans__back"
												: "font__switch__a"
										}`}
									></span>
								</div>
							</div>
							<div
								className={
									bangla__show === bn__yes
										? "hidden"
										: "flex w-full"
								}
							>
								<div className="w-full">
									<div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
										<h2 className="pl-4 text-[14px]">
											অক্ষর সাইজ কেমন হবে?
										</h2>

										<div
											onClick={bangla__font__size}
											className="flex justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
										>
											<h2 className="z-20 pr-[25px] text-[14px]">
												ছোট
											</h2>
											<h2 className="z-20 pr-[5px] text-[14px]">
												বড়
											</h2>
											<span
												className={`option__border__active card__bg opacity-80 absolute top-[2px] z-10 h-[33px] w-[50px] left-1 rounded-full ${
													bangla__font === bn__small
														? "trans__back"
														: "font__switch__a"
												}`}
											></span>
										</div>
									</div>
									<div className="h-14 flex justify-center items-center">
										<h2
											className={`flex gap-1 ${bangla__font}`}
										>
											<h1>〝</h1>দয়াময়, পরম দয়ালু
											<h1>〞</h1>
										</h2>
									</div>
								</div>
							</div>
							<div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
								<h2 className="pl-4 text-[14px]">
									তাফসীর চিহ্ন থাকবে?
								</h2>

								<div
									onClick={tafsir__show__btn}
									className="flex justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
								>
									<h2 className="z-20 pr-[32px] text-[14px]">
										না
									</h2>
									<h2 className="z-20 pr-[5px] text-[14px]">
										হ্যা
									</h2>
									<span
										className={`option__border__active card__bg opacity-80 absolute top-[2px] z-10 h-[33px] w-[50px] left-1 rounded-full ${
											tafsir__show === tafsir__yes
												? "font__switch__a"
												: "trans__back"
										}`}
									></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card__bg">
				<div className="my__container m-auto">
					<div className="flex flex-col justify-center items-center">
						<h3 className=" Noto__Naskh__Arabic mb-5 pt-[80px] lg:pt-[100px] text-[22px]">
							﷽
						</h3>
					</div>
					<div className="surah__contents m-auto">
						{Surah__info.map((surah) => (
							<div
								key={surah.id}
								className={`flex flex-col justify-center mx-1 p-2 rounded-sm __border`}
							>
								<h1 className="ayat__num__plate flex w-full justify-start">
									<li className="text-[12px] flex">
										{surah.verse}
									</li>
								</h1>
								<div
									className={
										arabic__show === arb__yes
											? "hidden"
											: "flex"
									}
								>
									<h3
										className={`
											${surah.arabic_font}  ${
											arabic__font === arb__big
												? arb__big
												: arb__small
										} py-3 w-full text-right`}
									>
										{surah.arabic_text}
									</h3>
								</div>
								<div
									className={
										bangla__show === bn__yes
											? "hidden"
											: "flex flex-col"
									}
								>
									<div
										onClick={() =>
											open__my__accordion(surah.id)
										}
										className="mb-3"
									>
										<h4
											className={`${
												bangla__font === bn__big
													? bn__big
													: bn__small
											} py-2 w-full text-left`}
										>
											{surah.bangla_text}
										</h4>
									</div>
									<div
										className={
											tafsir__show === tafsir__yes
												? "flex w-full justify-end items-end"
												: "hidden"
										}
									>
										<h1
											onClick={() =>
												open__my__accordion(surah.id)
											}
											className=" w-full flex justify-between cursor-pointer "
										>
											<li className=" flex"></li>
											<MdKeyboardArrowDown size={20} />
										</h1>
									</div>
									<div
										className={
											expandedId === surah.id
												? "flex w-full main__bg px-3 rounded-md "
												: "hidden"
										}
									>
										<h4
											onClick={() =>
												open__my__accordion(surah.id)
											}
											className={`py-2 w-full text-justify" ${
												bangla__font === bn__big
													? bn__big
													: bn__small
											}`}
											dangerouslySetInnerHTML={{
												__html: surah.detail_text,
											}}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
  )
}

export default _101_al_qariah
