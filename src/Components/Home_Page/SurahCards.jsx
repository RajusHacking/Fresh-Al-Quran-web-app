import SurahList from "../../Json/surah_info.json";
import { NavLink } from "react-router-dom";

const SurahCards = () => {
	return (
		<>
			<div className="template lg:flex flex-col hidden justify-center items-center p-10">
				<h1 className="text-[34px]">কুরআনুল কারীম</h1>
				<h4 className="text-[20px]">বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর</h4>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my__container m-auto">
				{SurahList.map((Surah) => (
					<div
						key={Surah.id}
						className="
						surah__card 
						relative flex justify-between items-center 
						p-3 mx-2 mt-2 h-[80px] 
						rounded-md cursor-pointer 
						hover:shadow-[0_0px_40px_0px_rgba(1,0,0,0.2)] 
						ease-out duration-300 active:scale-95"
					>
						<div className="left-part flex justify-between items-center">
							<ul className="flex shadow-inner w-[2.7rem] h-[2.7rem] rounded-full items-center justify-center mr-4">
								<li className="text-[18px]">{Surah.number}</li>
							</ul>
							<div className="flex flex-col justify-center">
								<h2 className="text-[18px] hind-siliguri-light">
									{Surah.name}
								</h2>
								<h4 className="flex sub__title text-[14px] mt-[-1px] ">
									{Surah.means}
								</h4>
							</div>
						</div>
						<div className="right-part mr-2 flex flex-col items-end">
							<h3 className="text-[22px]">{Surah.arabic}</h3>
							<NavLink
								className="absolute top-0 left-0 right-0 bottom-0 z-10"
								to={Surah.url}
							></NavLink>
						</div>
					</div>
				))}
			</div>
			<div className="my-12 ">
				<a
					href="https://bn.wikipedia.org/wiki/%E0%A6%86%E0%A6%AC%E0%A7%81_%E0%A6%AC%E0%A6%95%E0%A6%B0_%E0%A6%AE%E0%A7%81%E0%A6%B9%E0%A6%BE%E0%A6%AE%E0%A7%8D%E0%A6%AE%E0%A6%BE%E0%A6%A6_%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE"
					className="m-auto flex w-[340px] justify-between items-center p-4 border border__color card__bg rounded-md"
				>
					<div className="w-[220px]">
						<h1 className="text-[16px] mb-1">
							Abubakar Muhammad Zakaria
						</h1>
						<h4 className="text-[12px]">
							Professor, Fiqh and Legal Studies at <br /> Islamic
							University, Bangladesh
						</h4>
					</div>
					<div className=" flex justify-center items-center rounded-full overflow-hidden w-[70px] h-[70px] border-[3px] abu__bakar__img">
						<img
							className="flex justify-center items-center scale-[2]"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvfFUmUr2H6Ivhi9couOGpPIbtBLyUP_ORg&s"
						/>
					</div>
				</a>
			</div>
		</>
	);
};

export default SurahCards;
