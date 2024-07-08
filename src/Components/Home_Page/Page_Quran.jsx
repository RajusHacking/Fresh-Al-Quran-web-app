// home page
import { useEffect } from "react";

import Header from "../Header";
import SurahCards from "./SurahCards";

const Page_Quran = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />
			<SurahCards />
		</>
	);
};

export default Page_Quran;
