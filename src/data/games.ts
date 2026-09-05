export type PlatformType = "steam" | "appstore" | "googleplay" | "learn";

export interface PlatformLink {
	type: PlatformType;
	href: string;
}

export interface Game {
	slug: string;
	title: string;
	shortDescription: string;
	longDescription?: string;
	cover: string;
	href: string;
	external?: boolean;
	heroBackground?: string;
	heroLogo?: string;
	trailerHref?: string;
	compactHero?: boolean;
	platforms: PlatformLink[];
}

export const games: Game[] = [
	{
		slug: "lineweight",
		title: "Lineweight",
		shortDescription: "A face, a sunset, a moment in time—our lives are the emotions we feel, and the stories we tell.",
		longDescription: "A five-chapter living book, told entirely by touch. Published with Team17.",
		cover: "/img/games/covers/lineweight.webp",
		href: "/games/lineweight",
		heroBackground: "/img/games/lineweight/lineweight_splash.jpg",
		trailerHref: "https://www.youtube.com/embed/VeWjLLgeGuo",
		compactHero: true,
		platforms: [
			{ type: "appstore", href: "https://apps.apple.com/us/app/lineweight/id1415191501" },
			{ type: "googleplay", href: "https://play.google.com/store/apps/details?id=com.thelabel.android.lineweight" },
		],
	},
	{
		slug: "auditorium",
		title: "Auditorium",
		shortDescription: "Auditorium is about the process of discovery & play.",
		longDescription: "Cipher Prime's signature game — bend light into sound.",
		cover: "/img/games/covers/auditorium.webp",
		href: "/games/auditorium",
		heroBackground: "/img/games/auditorium/auditorium_flyer.jpg",
		compactHero: true,
		platforms: [{ type: "steam", href: "https://store.steampowered.com/app/205870/" }],
	},
	{
		slug: "splice",
		title: "Splice",
		shortDescription: "An experimental and artistic puzzler. Immerse yourself in its microbial world and start splicing!",
		longDescription: "An experimental, artistic puzzler about splicing microbial life into new forms. The cells react to you.",
		cover: "/img/games/covers/splice.webp",
		href: "/games/splice",
		heroBackground: "/img/games/splice/splice_splash_bg.jpg",
		heroLogo: "/img/games/splice/splice_logo.jpg",
		trailerHref: "https://www.youtube.com/embed/UpAi8kPrFaA",
		compactHero: false,
		platforms: [{ type: "steam", href: "https://store.steampowered.com/app/209790/" }],
	},
	{
		slug: "pulse",
		title: "Pulse",
		shortDescription: "Feel the beat. Be the rhythm.",
		longDescription: "Touch rhythm. Cipher Prime's first iPad game — still live after 15 years.",
		cover: "/img/games/covers/pulse.webp",
		href: "/games/pulse",
		heroBackground: "/img/games/pulse/pulse_splash.jpg",
		trailerHref: "https://www.youtube.com/embed/CFF3bJLb8Sg",
		compactHero: true,
		platforms: [
			{ type: "appstore", href: "https://itunes.apple.com/us/app/pulse-volume-one/id432667443?mt=8" },
			{ type: "googleplay", href: "https://play.google.com/store/apps/details?id=com.cipherprime.pulse" },
		],
	},
	{
		slug: "intake",
		title: "Intake",
		shortDescription: "Blast and combo your way through an epic cascade of audiovisual mayhem so intoxicating it comes with its own warning label.",
		longDescription: "A drugstep arcade shooter — lean, loud, and the lowest-lift revival in the Cipher Prime catalog.",
		cover: "/img/games/covers/intake.webp",
		href: "/games/intake",
		heroBackground: "/img/games/intake/intake_splash.jpg",
		trailerHref: "https://www.youtube.com/embed/Hyex6_8-Dig",
		compactHero: true,
		platforms: [{ type: "steam", href: "https://store.steampowered.com/app/237760/" }],
	},
	{
		slug: "fractal",
		title: "Fractal",
		shortDescription: "Push, Combo, and Chain your way through a pulsing technicolor dreamscape all while expanding your consciousness at 130 BPM.",
		longDescription: "A music puzzler pushed across five platforms — the most-ported title in the Cipher Prime catalog.",
		cover: "/img/games/covers/fractal.webp",
		href: "/games/fractal",
		heroBackground: "/img/games/fractal/fractal_splash.jpg",
		trailerHref: "https://www.youtube.com/embed/ZzrJrmcItMU",
		compactHero: true,
		platforms: [{ type: "steam", href: "https://store.steampowered.com/app/61310/" }],
	},
	{
		slug: "jawns",
		title: "Jawns",
		shortDescription: "A new classic board game straight outta Philly! It doesn't come with free pretzels.",
		cover: "/img/games/covers/jawns.webp",
		href: "https://playjawns.com",
		external: true,
		platforms: [],
	},
	{
		slug: "tailwind",
		title: "Tailwind: Prologue",
		shortDescription: "Before you die, live.",
		longDescription: "A Humble Original — a lightning storm's last moments, told as aerial ballet.",
		cover: "/img/games/covers/tailwind.webp",
		href: "/games/tailwind",
		heroBackground: "/img/games/tailwind/tailwind_splash.jpg",
		trailerHref: "https://www.youtube.com/embed/Eqr2Xn1w7X4",
		compactHero: true,
		platforms: [],
	},
	{
		slug: "shimsham",
		title: "Shimsham",
		shortDescription: "Smash your opponent to the smooth sounds of classic jazz!",
		longDescription: "A Leap Motion launch title with a live-jazz score. Since rebuilt for keyboard & mouse.",
		cover: "/img/games/covers/shimsham.webp",
		href: "/games/shimsham",
		heroBackground: "/img/games/shimsham/shimsham_splash.jpg",
		trailerHref: "https://www.youtube.com/embed/JPkzGyKgJts",
		compactHero: true,
		platforms: [],
	},
	{
		slug: "monster-want-burger",
		title: "Monster Want Burger",
		shortDescription: "A fast, funny, self-published micro-game. No publisher, no advance, shipped anyway.",
		cover: "/img/games/covers/monster-want-burger.webp",
		href: "https://monsterwantburger.com",
		external: true,
		platforms: [],
	},
];
