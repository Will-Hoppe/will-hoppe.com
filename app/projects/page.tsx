"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		href: "https://www3.nd.edu/~skumar5/teaching/additional/spring-2022-eg/project-08-08/index.html",
		src: "/images/covidwebsite.png",
		label: "I created this website to investigate the effect of COVID-19 on the US economy and visualize the findings. The data was parsed through using Python in Google Colab and used to generate Plotly visualizations. These graphs and images were then converted into HTML divs and inserted into the website design.",
		handle: "Covid-19's Effect on Economy Visualized Website",
		className: "w-full h-full rounded-lg border border-gray-500 ease-in-out duration-[6s] hover:-translate-y-3/4"
	},
	{
		href: "/",
		src: "/images/cadetscut.jpg",
		label: "I developed and managed this website using Wordpress and Elementor for a home services provider with 250+ clients. I optimized for search engine page visibility and pushed website to becoming first result using Yoast SEO plugins. The company has shifted its focus to other business ventures and no longer maintains the website.",
		handle: "Cadet's Cut Website",
		className: "w-full h-full rounded-lg border border-gray-500 ease-in-out duration-[6s] hover:-translate-y-2/3",
	},
	{
		href: "",
		src: "/images/tunewave.png",
		label: "I created this AI-powered web application using Node.js and JavaScript to effectively transform a simple concept into a full song. This website utilizes recurrent calls to OpenAI API to create dynamic responses to user prompts and generate unique and personalized song titles, lyrics, and album art.",
		handle: "TuneWave",
		className: "w-full h-full rounded-lg border border-gray-500 ease-in-out duration-[6s] hover:-translate-y-2/3"
	},
];

export default function Example() {
	return (
		<div className="border border-zinc-500 bg-gradient-to-tl from-black/0 min-w-screen via-zinc-600/30 to-slate-900 min-h-screen">
			<Navigation />
			<h1 className="px-6 md:px-20 text-white text-2xl pt-16">Projects</h1>
			<div className="container flex justify-center px-4 mx-auto">
			
				<div className="grid w-full grid-cols-1 mt-10 gap-5 pb-1 mx-auto sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="relative flex flex-col items-center gap-4 duration-700 group md:gap-5  lg:pb-4"
							>
								<div className="max-h-72 overflow-hidden"><img className={s.className} src={s.src} alt=""/></div>
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-xl text-center text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="m-4 text-sm text-center font-mono duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
