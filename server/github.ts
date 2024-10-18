"use server";

import { SPONSOR_LINK } from "@/lib/constants";
import { unstable_cache as cache } from "next/cache";

const CACHE_DURATION = 1800; // 30 minutes
const USE_MOCK_DATA_FOR_DEVELOPMENT = true;

const DEFAULT_GITHUB_RESPONSE = {
	data: {
		viewer: {
			login: "needim",
			sponsorshipsAsMaintainer: {
				totalCount: 35,
				nodes: [
					{
						createdAt: "2024-06-29T20:40:34Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "aliosmandev",
							name: "Ali Osman",
							bio: "Software Developer",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/106361546?u=92f87b20abae991b7bf9ca4dc8734a52f6532fa3&v=4",
							twitterUsername: "aliosmandev",
						},
					},
					{
						createdAt: "2024-07-21T20:18:05Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "thisisroi",
							name: "Amil Alekberov",
							bio: "✨ amil, ui/ux designer, front-end developer",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/48417958?u=65a1d1ee60b9171a69552f26b3d25c22b8a445c3&v=4",
							twitterUsername: "alekberovamil",
						},
					},
					{
						createdAt: "2024-07-25T22:11:50Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "alpererdogan8",
							name: "Alper Erdogan",
							bio: "Software Developer /                        \r\nComputer Programmer & Management Information Systems\r\n",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/19363785?u=e1e8a91d7da2c15cf669a9ef8ba2c1f6d4789bf6&v=4",
							twitterUsername: "alpererdogandev",
						},
					},
					{
						createdAt: "2024-07-21T20:12:55Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4ABl2T",
							name: "$10 a month",
							isOneTime: false,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "kanadikirik",
							name: "Osman Kanadıkırık",
							bio: "Full Stack Developer, Team Lead. 🔋 ",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/32852874?u=a4d70ec14a97e39caf83ee984a9cfa1de99ca81c&v=4",
							twitterUsername: "ozi_dev",
						},
					},
					{
						createdAt: "2024-07-25T10:04:02Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "apo-bozdag",
							name: "Abdullah Bozdağ",
							bio: "Backend Developer",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/33822884?u=8e62d7baad0d259b63e00084e9446e7614452f35&v=4",
							twitterUsername: "apo_bozdag",
						},
					},
					{
						createdAt: "2024-07-21T17:54:47Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "meminuygur",
							name: "Mehmet Emin Uygur",
							bio: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/21062398?u=2177cce13b9d0180d5929bc1b64984d211fda6f6&v=4",
							twitterUsername: "meminuygur",
						},
					},
					{
						createdAt: "2024-07-21T13:54:36Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "evrenvural",
							name: "Evren",
							bio: "Frontend Developer",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/45872638?u=f7ae49125ff6caf7f7f78d4f8456e44709fd2539&v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-20T22:45:23Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "giraybatiturk",
							name: "Giray BATITURK",
							bio: "UX Product Manager - simplifying web3 and AI with UX",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/9551312?u=0c33650140022803ff21c05dce42615c80447038&v=4",
							twitterUsername: "giraybatiturk",
						},
					},
					{
						createdAt: "2024-07-22T13:44:27Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "kemalersin",
							name: "Kemal Ersin YILMAZ",
							bio: null,
							avatarUrl:
								"https://avatars.githubusercontent.com/u/1591411?u=9a38cb9a23bbdaa1f9ddb1d619bbdab76467785b&v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-22T16:34:25Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "isikmuhamm",
							name: "Muhammet Işık",
							bio: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/120049215?u=c58b321944715192a387a992b0d73ff33805e392&v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-24T18:16:16Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABmA2",
							name: "$100 one time",
							isOneTime: true,
							monthlyPriceInDollars: 100,
						},
						sponsorEntity: {
							__typename: "User",
							login: "9ssi7",
							name: "Sami Salih İbrahimbaş",
							bio: "product developer",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/76786120?u=c85d67cb992280a75cd3a20fdec32e179fe3b795&v=4",
							twitterUsername: "9ssi7",
						},
					},
					{
						createdAt: "2024-07-22T20:04:32Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "uygar",
							name: "Uygar İşiçelik",
							bio: "📱mobile software developer • ⌨️ mechanical keyboard builder •👨‍💻 maker",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/11055350?u=444bc38b5b55477c63eb52694097be0ee5e1d5cb&v=4",
							twitterUsername: "uuygaar",
						},
					},
					{
						createdAt: "2024-07-21T13:51:09Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "eser",
							name: "Eser Ozvataf",
							bio: "Head of Engineering @Teknasyon • Founder @acikyazilim • Streaming @ eser.live • Open Source, DevRel, DevOps and Agile Evangelist • Generalist",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/866558?u=060df27f13f5f9afa18bc8faed253956b55c8c13&v=4",
							twitterUsername: "eser",
						},
					},
					{
						createdAt: "2024-07-21T19:36:19Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "aardabayram",
							name: "Arda",
							bio: "I'm a passionate product designer who loves to solve daily life problems and creating human experiences ",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/48804865?u=f873c097f92a872adbabc5102a7879c172317982&v=4",
							twitterUsername: "aardabayram",
						},
					},
					{
						createdAt: "2024-07-30T21:52:16Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "mhasanince",
							name: "Muhammed Hasan Ince",
							bio: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/49279517?u=74c220842ba768a5b1506bf87de7808b0f2f905b&v=4",
							twitterUsername: "mhasanince",
						},
					},
					{
						createdAt: "2024-07-21T15:35:17Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "calganaygun",
							name: "Çalgan Aygün",
							bio: "Devloper, YAML Engineer, Button Clicker on AWS, OSINT Hackerman",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/20268300?u=bd8c7e48add63b2b273e7a2f4dc49244cb1f4134&v=4",
							twitterUsername: "calganaygun",
						},
					},
					{
						createdAt: "2024-08-14T06:50:39Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "ufukcaneski",
							name: "Ufukcan Eski",
							bio: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/24737685?u=ff274dd83de095d8bb89792d95eb5c571ac6a48a&v=4",
							twitterUsername: "UfukcanEski",
						},
					},
					{
						createdAt: "2024-08-13T09:19:15Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "Edleron",
							name: "Ertuğrul",
							bio: "Life to Earth",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/30155849?u=3ec3d562a8b96f84ae0f1ec826dafa34977f63bd&v=4",
							twitterUsername: "edleron",
						},
					},
					{
						createdAt: "2024-07-22T14:40:05Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "islamsanliturk",
							name: "İslam Şanlıtürk | IZO",
							bio: "ikas.com\r\n",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/31260749?u=c6e6e7a5ca20bb762337edbe4f2bf2068069dd25&v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-25T17:50:29Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksN",
							name: "$19 one time",
							isOneTime: true,
							monthlyPriceInDollars: 19,
						},
						sponsorEntity: {
							__typename: "User",
							login: "alperiskender",
							name: "Alper İskender",
							bio: "",
							avatarUrl: "https://avatars.githubusercontent.com/u/35170570?v=4",
							twitterUsername: "iskenderalper",
						},
					},
					{
						createdAt: "2024-07-22T09:56:37Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "Organization",
							login: "komunite",
							name: "Komünite",
							description:
								"Zamanı ölçeklemek mümkün değil. Katma değerli çalışmaya başlayın.",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/105446227?v=4",
							twitterUsername: "komunitecomtr",
						},
					},
					{
						createdAt: "2024-08-07T11:23:54Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "Organization",
							login: "International-Labour-Association",
							name: "ILA",
							description:
								"International Labour Association (ILA) is an NGO that provides mechanisms to facilitate knowledge and experience transfer among sectors and countries.",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/116907187?v=4",
							twitterUsername: "iladesk",
						},
					},
					{
						createdAt: "2024-07-25T20:35:20Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABmEi",
							name: "$150 one time",
							isOneTime: true,
							monthlyPriceInDollars: 150,
						},
						sponsorEntity: {
							__typename: "User",
							login: "batuhankrskl",
							name: "Batuhan Karasakal",
							bio: "A senior multi-disciplinary designer with over 9 years of experience who has been collaborating with enterprises and startups on brandⒷ, websiteⓌ, productⓅ \r\n\r\n",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/127359404?u=f8fa23be20d379332b245eb2c347e8e8249bfa08&v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-25T11:26:56Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "serhatkildaci",
							name: "Serhat Kıldacı",
							bio: "Game Developer\r\n",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/96617749?u=cd4be0fc757e65a3cc96964182fd5260f4980851&v=4",
							twitterUsername: "sreaht",
						},
					},
					{
						createdAt: "2024-07-26T06:19:27Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4ABksQ",
							name: "$500 a month",
							isOneTime: false,
							monthlyPriceInDollars: 500,
						},
						sponsorEntity: {
							__typename: "User",
							login: "ugorur",
							name: "Umurcan Gorur",
							bio: "",
							avatarUrl: "https://avatars.githubusercontent.com/u/2701458?v=4",
							twitterUsername: "ugorur",
						},
					},
					{
						createdAt: "2024-07-21T15:35:53Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "mehmetaltugakgul",
							name: "Mehmet Altuğ Akgül",
							bio: "Electrical & Electronics Engineer - Cloud Solutions Architect - MBA",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/10194009?u=8ae94b4f1cca8ee1871d208b08904e67c0440e0e&v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-30T10:13:55Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "aorhandev",
							name: "Ahmet Orhan",
							bio: "https://www.linkedin.com/in/ahmetorhan",
							avatarUrl: "https://avatars.githubusercontent.com/u/5780242?v=4",
							twitterUsername: "aorhan",
						},
					},
					{
						createdAt: "2024-07-25T19:41:12Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "alimuratumutlu",
							name: "Murat Umutlu",
							bio: "Game & Software Developer\r\nFounder of Muum Dev. Software Company\r\nMarketing | Monetizing | Investment",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/6642361?u=f45ccdc28bbe86dc740e5296fed068680f35d8df&v=4",
							twitterUsername: "alimuratumutlu",
						},
					},
					{
						createdAt: "2024-07-21T19:49:21Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "aykutkardas",
							name: "Aykut Kardaş",
							bio: "I'm Product Developer.",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/7966133?u=594d1e7f93a2cc7f2b04391b414d464196c5266a&v=4",
							twitterUsername: "aykutkardas",
						},
					},
					{
						createdAt: "2024-08-14T17:00:24Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "msuleymansaglam",
							name: "suleymansaglam",
							bio: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/149151487?v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-08-05T10:21:57Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "Organization",
							login: "mvpstudioco",
							name: "mvpstudio.co",
							description: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/144166938?v=4",
							twitterUsername: "mvpstudioco",
						},
					},
					{
						createdAt: "2024-07-21T13:29:57Z",
						isActive: true,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "adiguzelburak",
							name: "Burak Adıgüzel",
							bio: "I'm Burak Adıgüzel from Istanbul,Turkey",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/67753295?u=1f0103f29d444d8845338b4ad5c54d0b457e4df4&v=4",
							twitterUsername: "adgzelburak",
						},
					},
					{
						createdAt: "2024-07-22T06:00:05Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "MATTAM540",
							name: null,
							bio: "Spaghetti Code Derneği Türkiye şubesi",
							avatarUrl: "https://avatars.githubusercontent.com/u/47248007?v=4",
							twitterUsername: null,
						},
					},
					{
						createdAt: "2024-07-22T11:51:50Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							monthlyPriceInDollars: 5,
						},
						sponsorEntity: {
							__typename: "User",
							login: "mahmutyildizx",
							name: "Mahmut ✨",
							bio: "frontend developer | 💻 | ",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/40712532?u=30dd8b4432cd541b3cb5ac3e4cd11384131b1294&v=4",
							twitterUsername: "mahmutyildizx",
						},
					},
					{
						createdAt: "2024-07-22T05:22:46Z",
						isActive: false,
						tier: {
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							monthlyPriceInDollars: 10,
						},
						sponsorEntity: {
							__typename: "User",
							login: "kacmazm",
							name: "Mustafa",
							bio: "",
							avatarUrl:
								"https://avatars.githubusercontent.com/u/11290170?u=02617a1ec0470c7df1ff43843ca2c461f139aec8&v=4",
							twitterUsername: "devmustafao",
						},
					},
				],
			},
			sponsoring: {
				nodes: [
					{
						login: "burakndmr",
						name: "Burak Demir",
						bio: "Front-end Developer | Youtube Content Creator",
						avatarUrl:
							"https://avatars.githubusercontent.com/u/45737592?u=64e31e6a191246787f618a93d4d05ef211f8ce65&v=4",
						twitterUsername: "burakdmr09",
						sponsorshipForViewerAsSponsor: {
							isOneTimePayment: false,
							isActive: true,
							createdAt: "2024-08-14T06:54:55Z",
							tier: {
								id: "ST_kwDOArnmeM4ABm7r",
								isCustomAmount: true,
								monthlyPriceInDollars: 5,
								isOneTime: false,
								name: "$5 a month",
								description: "",
							},
						},
					},
					{
						login: "aliosmandev",
						name: "Ali Osman",
						bio: "Software Developer",
						avatarUrl:
							"https://avatars.githubusercontent.com/u/106361546?u=92f87b20abae991b7bf9ca4dc8734a52f6532fa3&v=4",
						twitterUsername: "aliosmandev",
						sponsorshipForViewerAsSponsor: {
							isOneTimePayment: false,
							isActive: true,
							createdAt: "2024-06-29T20:46:46Z",
							tier: {
								id: "ST_kwDOBlbyys4ABksU",
								isCustomAmount: true,
								monthlyPriceInDollars: 5,
								isOneTime: false,
								name: "$5 a month",
								description: "",
							},
						},
					},
					{
						login: "mertcanaltin",
						name: "Mert Can Altin",
						bio: "🌟 Open Source Enthusiast | @nodejs & @expressjs Team Member | CPC Member at @openjs-foundation 🚀",
						avatarUrl:
							"https://avatars.githubusercontent.com/u/37827216?u=0b85252cdbf8f5d74c4134569eef30b639b1525f&v=4",
						twitterUsername: "mecaltin",
						sponsorshipForViewerAsSponsor: {
							isOneTimePayment: false,
							isActive: true,
							createdAt: "2024-08-02T20:40:11Z",
							tier: {
								id: "ST_kwDOAkEykM4ABflk",
								isCustomAmount: false,
								monthlyPriceInDollars: 5,
								isOneTime: false,
								name: "$5 a month",
								description:
									"As a **Backer** you get:\r\n\r\ngood feeling knowing that you support open source software\r\nseriously I'm super grateful for every bit of support since it gives me the feedback that my work is appreciated",
							},
						},
					},
					{
						login: "steida",
						name: "Daniel Steigerwald",
						bio: "",
						avatarUrl: "https://avatars.githubusercontent.com/u/66249?v=4",
						twitterUsername: "steida",
						sponsorshipForViewerAsSponsor: {
							isOneTimePayment: false,
							isActive: true,
							createdAt: "2024-05-22T08:16:39Z",
							tier: {
								id: "ST_kwDOAAECyc4ABmEt",
								isCustomAmount: true,
								monthlyPriceInDollars: 10,
								isOneTime: false,
								name: "$10 a month",
								description: "",
							},
						},
					},
					{
						login: "anonrig",
						name: "Yagiz Nizipli",
						bio: "@cloudflare principal systems engineer, @nodejs technical steering committee member",
						avatarUrl:
							"https://avatars.githubusercontent.com/u/1935246?u=440932d4aed022e31a2140e1825c0167b7a12357&v=4",
						twitterUsername: "yagiznizipli",
						sponsorshipForViewerAsSponsor: {
							isOneTimePayment: false,
							isActive: true,
							createdAt: "2024-07-29T10:08:25Z",
							tier: {
								id: "ST_kwDOAB2Hjs4ABQQp",
								isCustomAmount: false,
								monthlyPriceInDollars: 5,
								isOneTime: false,
								name: "$5 a month",
								description:
									"You will receive a Sponsor badge on your profile.",
							},
						},
					},
				],
			},
			sponsorsListing: {
				url: SPONSOR_LINK,
				fullDescription:
					"Hello, I'm Nedim 👋\n\nBy sponsoring me, you will help me spend more time maintaining my projects. Thanks!\n",
				activeGoal: {
					kind: "TOTAL_SPONSORS_COUNT",
					description:
						"Reaching this goal will allow me to improve the gider.im app, all thanks to your support. It's a crucial step in sustaining and enriching the work I do.",
					percentComplete: 14,
					targetValue: 100,
					title: "100 monthly sponsors",
				},
				tiers: {
					nodes: [
						{
							id: "ST_kwDOAAQmKM4AAvQg",
							name: "$5 a month",
							isOneTime: false,
							description:
								"- Get a Sponsor badge on your profile\r\n- Get a shoutout on X\r\n- Avatar and name on gider.im website",
							monthlyPriceInDollars: 5,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABksM",
							name: "$5 one time",
							isOneTime: true,
							description:
								"- Get a shoutout on X\r\n- Get a Sponsor badge on your profile\r\n",
							monthlyPriceInDollars: 5,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABksL",
							name: "$7 one time",
							isOneTime: true,
							description:
								"- Get a shoutout on X\r\n- Get a Sponsor badge on your profile \r\n",
							monthlyPriceInDollars: 7,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4AAvQj",
							name: "$10 one time",
							isOneTime: true,
							description:
								"- Get a shoutout on X\r\n- Get a Sponsor badge on your profile",
							monthlyPriceInDollars: 10,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABm_c",
							name: "$10 a month",
							isOneTime: false,
							description:
								"- Get a Sponsor badge on your profile\r\n- Get a shoutout on X\r\n- Avatar and name on gider.im website",
							monthlyPriceInDollars: 10,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABksN",
							name: "$19 one time",
							isOneTime: true,
							description:
								"- Get a shoutout on X\r\n- Get a Sponsor badge on your profile\r\n",
							monthlyPriceInDollars: 19,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABm_b",
							name: "$29 one time",
							isOneTime: true,
							description:
								"- Get a shoutout on X\r\n- Get a Sponsor badge on your profile",
							monthlyPriceInDollars: 29,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABm_Z",
							name: "$49 one time",
							isOneTime: true,
							description:
								"- Get a shoutout on X\r\n- Get a Sponsor badge on your profile",
							monthlyPriceInDollars: 49,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABksO",
							name: "$100 a month",
							isOneTime: false,
							description:
								"**Silver Spot - 4 spots left**\r\n\r\n- Get a Sponsor badge on your profile\r\n- Get a shoutout on X\r\n- **Silver** Spot / Logo and link on gider.im website",
							monthlyPriceInDollars: 100,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABksP",
							name: "$250 a month",
							isOneTime: false,
							description:
								"**Gold Spot - 2 spots left**\r\n\r\n- Get a Sponsor badge on your profile\r\n- Get a shoutout on X\r\n- **Gold** Spot / Logo and link on gider.im website\r\n- Early Access to gider.im repository",
							monthlyPriceInDollars: 250,
							isCustomAmount: false,
						},
						{
							id: "ST_kwDOAAQmKM4ABksQ",
							name: "$500 a month",
							isOneTime: false,
							description:
								"**Platinum - 1 spot left**\r\n\r\n- Get a Sponsor badge on your profile\r\n- Get a shoutout on X\r\n- **Platinum** Spot / Logo and link on gider.im website\r\n- Early Access to gider.im repository",
							monthlyPriceInDollars: 500,
							isCustomAmount: false,
						},
					],
				},
			},
		},
	},
} satisfies Externals.Github.APIResponse;

export const getGithubInfo = cache(
	async (): Promise<Externals.Github.APIResponse> => {
		try {
			// Avoid rate limiting in development
			// set USE_MOCK_DATA_FOR_DEVELOPMENT false to use real data
			if (
				process.env.NODE_ENV === "development" &&
				USE_MOCK_DATA_FOR_DEVELOPMENT
			) {
				return DEFAULT_GITHUB_RESPONSE;
			}

			const query = `
{
  viewer {
    login
    ... on Sponsorable {
      sponsorshipsAsMaintainer(activeOnly: false, first: 100) {
        totalCount
        nodes {
				  createdAt
          isActive
          tier {
            id
            name
            isOneTime
            monthlyPriceInDollars
          }
          sponsorEntity {
            __typename
            ... on User {
              login
              name
              bio
              avatarUrl
              twitterUsername
            }
            ... on Organization {
              login
              name
              description
              avatarUrl
              twitterUsername
            }
          }
        }
      }
    }
    sponsoring(first: 100) {
      nodes {
        ... on User {
          login
          name
          bio
          avatarUrl
          twitterUsername
          sponsorshipForViewerAsSponsor {
            isOneTimePayment
            isActive
            createdAt
            tier {
              id
              isCustomAmount
              monthlyPriceInDollars
              isOneTime
              name
              description
            }
          }
        }
      }
    }
    sponsorsListing {
      url
      fullDescription
      activeGoal {
        kind
        description
        percentComplete
        targetValue
        title
      }
      tiers(first: 100) {
        nodes {
          id
          name
          isOneTime
          description
          monthlyPriceInDollars
          isCustomAmount
        }
      }
    }
  }
}
`;

			console.log("API HIT: github");
			const res = await fetch("https://api.github.com/graphql", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				},
				body: JSON.stringify({
					query,
				}),
				next: { revalidate: CACHE_DURATION },
			});

			return await res.json();
		} catch (error) {
			console.error("github api error", error);
			return DEFAULT_GITHUB_RESPONSE;
		}
	},
	["ned-im-github-sponsorship-data"],
	{
		revalidate: CACHE_DURATION,
	},
);
