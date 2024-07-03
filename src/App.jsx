import { RouterProvider, createBrowserRouter } from "react-router-dom";

// home components
import Page_Quran from "./Components/Home_Page/Page_Quran";
import Page_Saved from "./Components/Saved/Page_Saved";
import Page_Topics from "./Components/Topics/Topics";
import Page_Settings from "./Components/Settings/Page_Settings";

// surah components
import _1_al_fatihah from "./Components/Home_Page/surah/_1_al_fatihah";
import _2_al_baqarah from "./Components/Home_Page/surah/_2_al_baqarah";
import _3_al_imran from "./Components/Home_Page/surah/_3_al_imran";
import _4_an_nisa from "./Components/Home_Page/surah/_4_an_nisa";
import _5_al_maidah from "./Components/Home_Page/surah/_5_al_maidah";
import _6_al_anam from "./Components/Home_Page/surah/_6_al_anam";
import _7_al_araf from "./Components/Home_Page/surah/_7_al_araf";
import _8_al_anfal from "./Components/Home_Page/surah/_8_al_anfal";
import _9_at_tawbah from "./Components/Home_Page/surah/_9_at_tawbah";
import _10_yunus from "./Components/Home_Page/surah/_10_yunus";
import _11_hud from "./Components/Home_Page/surah/_11_hud";
import _12_yusuf from "./Components/Home_Page/surah/_12_yusuf";
import _13_ar_rad from "./Components/Home_Page/surah/_13_ar_rad";
import _14_ibrahim from "./Components/Home_Page/surah/_14_ibrahim";
import _15_al_hijr from "./Components/Home_Page/surah/_15_al_hijr";
import _16_an_nahl from "./Components/Home_Page/surah/_16_an_nahl";
import _17_al_isra from "./Components/Home_Page/surah/_17_al_isra";
import _18_al_kahf from "./Components/Home_Page/surah/_18_al_kahf";
import _19_maryam from "./Components/Home_Page/surah/_19_maryam";
import _20_ta_ha from "./Components/Home_Page/surah/_20_ta_ha";
import _21_al_anbiya from "./Components/Home_Page/surah/_21_al_anbiya";
import _22_al_hajj from "./Components/Home_Page/surah/_22_al_hajj";
import _23_al_muminun from "./Components/Home_Page/surah/_23_al_muminun";
import _24_an_noor from "./Components/Home_Page/surah/_24_an_noor";
import _25_al_furqan from "./Components/Home_Page/surah/_25_al_furqan";
import _26_ash_shuara from "./Components/Home_Page/surah/_26_ash_shuara";
import _27_an_naml from "./Components/Home_Page/surah/_27_an_naml";
import _28_al_qasas from "./Components/Home_Page/surah/_28_al_qasas";
import _29_al_ankabut from "./Components/Home_Page/surah/_29_al_ankabut";
import _30_ar_rum from "./Components/Home_Page/surah/_30_ar_rum";
import _31_luqman from "./Components/Home_Page/surah/_31_luqman";
import _32_as_sajdah from "./Components/Home_Page/surah/_32_as_sajdah";
import _33_al_ahzab from "./Components/Home_Page/surah/_33_al_ahzab";
import _34_saba from "./Components/Home_Page/surah/_34_saba";
import _35_fatir from "./Components/Home_Page/surah/_35_fatir";
import _36_ya_sin from "./Components/Home_Page/surah/_36_ya_sin";
import _37_as_saffat from "./Components/Home_Page/surah/_37_as_saffat";
import _38_sad from "./Components/Home_Page/surah/_38_sad";
import _39_az_zumar from "./Components/Home_Page/surah/_39_az_zumar";
import _40_ghafir from "./Components/Home_Page/surah/_40_ghafir";
import _41_fussilat from "./Components/Home_Page/surah/_41_fussilat";
import _42_ash_shura from "./Components/Home_Page/surah/_42_ash_shura";
import _43_az_zukhruf from "./Components/Home_Page/surah/_43_az_zukhruf";
import _44_ad_dukhan from "./Components/Home_Page/surah/_44_ad_dukhan";
import _45_al_jathiyah from "./Components/Home_Page/surah/_45_al_jathiyah";
import _46_al_ahqaf from "./Components/Home_Page/surah/_46_al_ahqaf";
import _47_muhammad from "./Components/Home_Page/surah/_47_muhammad";
import _48_al_fat_h from "./Components/Home_Page/surah/_48_al_fat_h";
import _49_al_hujurat from "./Components/Home_Page/surah/_49_al_hujurat";
import _50_qaf from "./Components/Home_Page/surah/_50_qaf";
import _51_adh_dhariyat from "./Components/Home_Page/surah/_51_adh_dhariyat";
import _52_at_toor from "./Components/Home_Page/surah/_52_at_toor";
import _53_an_najm from "./Components/Home_Page/surah/_53_an_najm";
import _54_al_qamar from "./Components/Home_Page/surah/_54_al_qamar";
import _55_ar_rahman from "./Components/Home_Page/surah/_55_ar_rahman";
import _56_al_waqiah from "./Components/Home_Page/surah/_56_al_waqiah";
import _57_al_hadid from "./Components/Home_Page/surah/_57_al_hadid";
import _58_al_mujadalah from "./Components/Home_Page/surah/_58_al_mujadalah";
import _59_al_hashr from "./Components/Home_Page/surah/_59_al_hashr";
import _60_al_mumtahanah from "./Components/Home_Page/surah/_60_al_mumtahanah";
import _61_as_saff from "./Components/Home_Page/surah/_61_as_saff";
import _62_al_jumuah from "./Components/Home_Page/surah/_62_al_jumuah";
import _63_al_munafiqun from "./Components/Home_Page/surah/_63_al_munafiqun";
import _64_at_taghabun from "./Components/Home_Page/surah/_64_at_taghabun";
import _65_at_talaq from "./Components/Home_Page/surah/_65_at_talaq";
import _66_at_tahrim from "./Components/Home_Page/surah/_66_at_tahrim";
import _67_al_mulk from "./Components/Home_Page/surah/_67_al_mulk";
import _68_al_qalam from "./Components/Home_Page/surah/_68_al_qalam";
import _69_al_haqqah from "./Components/Home_Page/surah/_69_al_haqqah";
import _70_al_maarij from "./Components/Home_Page/surah/_70_al_maarij";
import _71_nuh from "./Components/Home_Page/surah/_71_nuh";
import _72_al_jinn from "./Components/Home_Page/surah/_72_al_jinn";
import _73_al_muzzammil from "./Components/Home_Page/surah/_73_al_muzzammil";
import _74_al_muddaththir from "./Components/Home_Page/surah/_74_al_muddaththir";
import _75_al_qiyamah from "./Components/Home_Page/surah/_75_al_qiyamah";
import _76_al_insan from "./Components/Home_Page/surah/_76_al_insan";
import _77_al_mursalat from "./Components/Home_Page/surah/_77_al_mursalat";
import _78_an_naba from "./Components/Home_Page/surah/_78_an_naba";
import _79_an_naziat from "./Components/Home_Page/surah/_79_an_naziat";
import _80_abasa from "./Components/Home_Page/surah/_80_abasa";
import _81_at_takwir from "./Components/Home_Page/surah/_81_at_takwir";
import _82_al_infitar from "./Components/Home_Page/surah/_82_al_infitar";
import _83_al_mutaffifin from "./Components/Home_Page/surah/_83_al_mutaffifin";
import _84_al_inshiqaq from "./Components/Home_Page/surah/_84_al_inshiqaq";
import _85_al_buruj from "./Components/Home_Page/surah/_85_al_buruj";
import _86_at_tariq from "./Components/Home_Page/surah/_86_at_tariq";
import _87_al_ala from "./Components/Home_Page/surah/_87_al_ala";
import _88_al_ghashiyah from "./Components/Home_Page/surah/_88_al_ghashiyah";
import _89_al_fajr from "./Components/Home_Page/surah/_89_al_fajr";
import _90_al_balad from "./Components/Home_Page/surah/_90_al_balad";
import _91_ash_shams from "./Components/Home_Page/surah/_91_ash_shams";
import _92_al_layl from "./Components/Home_Page/surah/_92_al_layl";
import _93_ad_duha from "./Components/Home_Page/surah/_93_ad_duha";
import _94_ash_sharh from "./Components/Home_Page/surah/_94_ash_sharh";
import _95_at_teen from "./Components/Home_Page/surah/_95_at_teen";
import _96_al_alaq from "./Components/Home_Page/surah/_96_al_alaq";
import _97_al_qadr from "./Components/Home_Page/surah/_97_al_qadr";
import _98_al_bayyinah from "./Components/Home_Page/surah/_98_al_bayyinah";
import _99_az_zalzalah from "./Components/Home_Page/surah/_99_az_zalzalah";
import _100_al_adiyat from "./Components/Home_Page/surah/_100_al_adiyat";
import _101_al_qariah from "./Components/Home_Page/surah/_101_al_qariah";
import _102_at_takathur from "./Components/Home_Page/surah/_102_at_takathur";
import _103_al_asr from "./Components/Home_Page/surah/_103_al_asr";
import _104_al_humazah from "./Components/Home_Page/surah/_104_al_humazah";
import _105_al_feel from "./Components/Home_Page/surah/_105_al_feel";
import _106_quraysh from "./Components/Home_Page/surah/_106_quraysh";
import _107_al_maun from "./Components/Home_Page/surah/_107_al_maun";
import _108_al_kawthar from "./Components/Home_Page/surah/_108_al_kawthar";
import _109_al_kafirun from "./Components/Home_Page/surah/_109_al_kafirun";
import _110_an_nasr from "./Components/Home_Page/surah/_110_an_nasr";
import _111_al_masad from "./Components/Home_Page/surah/_111_al_masad";
import _112_al_ikhlas from "./Components/Home_Page/surah/_112_al_ikhlas";
import _113_al_falaq from "./Components/Home_Page/surah/_113_al_falaq";
import _114_an_nas from "./Components/Home_Page/surah/_114_an_nas";

const App = () => {
	const router = createBrowserRouter([
		// home page navigate

		{ path: "/", element: <Page_Quran /> },
		{ path: "/Topics", element: <Page_Topics /> },
		{ path: "/Saved", element: <Page_Saved /> },
		{ path: "/Settings", element: <Page_Settings /> },

		// surah_navigate

		{ path: "Quran/Al-Fatihah", element: <_1_al_fatihah /> },
		{ path: "Quran/Al-Baqarah", element: <_2_al_baqarah /> },
		{ path: "Quran/Al-Imran", element: <_3_al_imran /> },
		{ path: "Quran/An-Nisa", element: <_4_an_nisa /> },
		{ path: "Quran/Al-Maidah", element: <_5_al_maidah /> },
		{ path: "Quran/Al-Anam", element: <_6_al_anam /> },
		{ path: "Quran/Al-Araf", element: <_7_al_araf /> },
		{ path: "Quran/Al-Anfal", element: <_8_al_anfal /> },
		{ path: "Quran/At-Tawbah", element: <_9_at_tawbah /> },
		{ path: "Quran/Yunus", element: <_10_yunus /> },
		{ path: "Quran/Hud", element: <_11_hud /> },
		{ path: "Quran/Yusuf", element: <_12_yusuf /> },
		{ path: "Quran/Ar-Rad", element: <_13_ar_rad /> },
		{ path: "Quran/Ibrahim", element: <_14_ibrahim /> },
		{ path: "Quran/Al-Hijr", element: <_15_al_hijr /> },
		{ path: "Quran/An-Nahl", element: <_16_an_nahl /> },
		{ path: "Quran/Al-Isra", element: <_17_al_isra /> },
		{ path: "Quran/Al-Kahf", element: <_18_al_kahf /> },
		{ path: "Quran/Maryam", element: <_19_maryam /> },
		{ path: "Quran/Ta-Ha", element: <_20_ta_ha /> },
		{ path: "Quran/Al-Anbiya", element: <_21_al_anbiya /> },
		{ path: "Quran/Al-Hajj", element: <_22_al_hajj /> },
		{ path: "Quran/Al-Muminun", element: <_23_al_muminun /> },
		{ path: "Quran/An-Noor", element: <_24_an_noor /> },
		{ path: "Quran/Al-Furqan", element: <_25_al_furqan /> },
		{ path: "Quran/Ash-Shuara", element: <_26_ash_shuara /> },
		{ path: "Quran/An-Naml", element: <_27_an_naml /> },
		{ path: "Quran/Al-Qasas", element: <_28_al_qasas /> },
		{ path: "Quran/Al-Ankabut", element: <_29_al_ankabut /> },
		{ path: "Quran/Ar-Rum", element: <_30_ar_rum /> },
		{ path: "Quran/Luqman", element: <_31_luqman /> },
		{ path: "Quran/As-Sajdah", element: <_32_as_sajdah /> },
		{ path: "Quran/Al-Ahzab", element: <_33_al_ahzab /> },
		{ path: "Quran/Saba", element: <_34_saba /> },
		{ path: "Quran/Fatir", element: <_35_fatir /> },
		{ path: "Quran/Ya-Sin", element: <_36_ya_sin /> },
		{ path: "Quran/As-Saffat", element: <_37_as_saffat /> },
		{ path: "Quran/Sad", element: <_38_sad /> },
		{ path: "Quran/Az-Zumar", element: <_39_az_zumar /> },
		{ path: "Quran/Ghafir", element: <_40_ghafir /> },
		{ path: "Quran/Fussilat", element: <_41_fussilat /> },
		{ path: "Quran/Ash-Shura", element: <_42_ash_shura /> },
		{ path: "Quran/Az-Zukhruf", element: <_43_az_zukhruf /> },
		{ path: "Quran/Ad-Dukhan", element: <_44_ad_dukhan /> },
		{ path: "Quran/Al-Jathiyah", element: <_45_al_jathiyah /> },
		{ path: "Quran/Al-Ahqaf", element: <_46_al_ahqaf /> },
		{ path: "Quran/Muhammad", element: <_47_muhammad /> },
		{ path: "Quran/Al-Fat-H", element: <_48_al_fat_h /> },
		{ path: "Quran/Al-Hujurat", element: <_49_al_hujurat /> },
		{ path: "Quran/Qaf", element: <_50_qaf /> },
		{ path: "Quran/Adh-Dhariyat", element: <_51_adh_dhariyat /> },
		{ path: "Quran/At-Toor", element: <_52_at_toor /> },
		{ path: "Quran/An-Najm", element: <_53_an_najm /> },
		{ path: "Quran/Al-Qamar", element: <_54_al_qamar /> },
		{ path: "Quran/Ar-Rahman", element: <_55_ar_rahman /> },
		{ path: "Quran/Al-Waqiah", element: <_56_al_waqiah /> },
		{ path: "Quran/Al-Hadid", element: <_57_al_hadid /> },
		{ path: "Quran/Al-Mujadalah", element: <_58_al_mujadalah /> },
		{ path: "Quran/Al-Hashr", element: <_59_al_hashr /> },
		{ path: "Quran/Al-Mumtahanah", element: <_60_al_mumtahanah /> },
		{ path: "Quran/As-Saff", element: <_61_as_saff /> },
		{ path: "Quran/Al-Jumuah", element: <_62_al_jumuah /> },
		{ path: "Quran/Al-Munafiqun", element: <_63_al_munafiqun /> },
		{ path: "Quran/At-Taghabun", element: <_64_at_taghabun /> },
		{ path: "Quran/At-Talaq", element: <_65_at_talaq /> },
		{ path: "Quran/At-Tahrim", element: <_66_at_tahrim /> },
		{ path: "Quran/Al-Mulk", element: <_67_al_mulk /> },
		{ path: "Quran/Al-Qalam", element: <_68_al_qalam /> },
		{ path: "Quran/Al-Haqqah", element: <_69_al_haqqah /> },
		{ path: "Quran/Al-Maarij", element: <_70_al_maarij /> },
		{ path: "Quran/Nuh", element: <_71_nuh /> },
		{ path: "Quran/Al-Jinn", element: <_72_al_jinn /> },
		{ path: "Quran/Al-Muzzammil", element: <_73_al_muzzammil /> },
		{ path: "Quran/Al-Muddaththir", element: <_74_al_muddaththir /> },
		{ path: "Quran/Al-Qiyamah", element: <_75_al_qiyamah /> },
		{ path: "Quran/Al-Insan", element: <_76_al_insan /> },
		{ path: "Quran/Al-Mursalat", element: <_77_al_mursalat /> },
		{ path: "Quran/An-Naba", element: <_78_an_naba /> },
		{ path: "Quran/An-Naziat", element: <_79_an_naziat /> },
		{ path: "Quran/Abasa", element: <_80_abasa /> },
		{ path: "Quran/At-Takwir", element: <_81_at_takwir /> },
		{ path: "Quran/Al-Infitar", element: <_82_al_infitar /> },
		{ path: "Quran/Al-Mutaffifin", element: <_83_al_mutaffifin /> },
		{ path: "Quran/Al-Inshiqaq", element: <_84_al_inshiqaq /> },
		{ path: "Quran/Al-Buruj", element: <_85_al_buruj /> },
		{ path: "Quran/At-Tariq", element: <_86_at_tariq /> },
		{ path: "Quran/Al-Ala", element: <_87_al_ala /> },
		{ path: "Quran/Al-Ghashiyah", element: <_88_al_ghashiyah /> },
		{ path: "Quran/Al-Fajr", element: <_89_al_fajr /> },
		{ path: "Quran/Al-Balad", element: <_90_al_balad /> },
		{ path: "Quran/Ash-Shams", element: <_91_ash_shams /> },
		{ path: "Quran/Al-Layl", element: <_92_al_layl /> },
		{ path: "Quran/Ad-Duha", element: <_93_ad_duha /> },
		{ path: "Quran/Ash-Sharh", element: <_94_ash_sharh /> },
		{ path: "Quran/At-Teen", element: <_95_at_teen /> },
		{ path: "Quran/Al-Alaq", element: <_96_al_alaq /> },
		{ path: "Quran/Al-Qadr", element: <_97_al_qadr /> },
		{ path: "Quran/Al-Bayyinah", element: <_98_al_bayyinah /> },
		{ path: "Quran/Az-Zalzalah", element: <_99_az_zalzalah /> },
		{ path: "Quran/Al-Adiyat", element: <_100_al_adiyat /> },
		{ path: "Quran/Al-Qariah", element: <_101_al_qariah /> },
		{ path: "Quran/At-Takathur", element: <_102_at_takathur /> },
		{ path: "Quran/Al-Asr", element: <_103_al_asr /> },
		{ path: "Quran/Al-Humazah", element: <_104_al_humazah /> },
		{ path: "Quran/Al-Feel", element: <_105_al_feel /> },
		{ path: "Quran/Quraysh", element: <_106_quraysh /> },
		{ path: "Quran/Al-Maun", element: <_107_al_maun /> },
		{ path: "Quran/Al-Kawthar", element: <_108_al_kawthar /> },
		{ path: "Quran/Al-Kafirun", element: <_109_al_kafirun /> },
		{ path: "Quran/An-Nasr", element: <_110_an_nasr /> },
		{ path: "Quran/Al-Masad", element: <_111_al_masad /> },
		{ path: "Quran/Al-Ikhlas", element: <_112_al_ikhlas /> },
		{ path: "Quran/Al-Falaq", element: <_113_al_falaq /> },
		{ path: "Quran/An-Nas", element: <_114_an_nas /> },
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
