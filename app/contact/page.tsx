"use client";
import { Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/will-hoppe/",
		label: "LinkedIn",
		handle: "Will Hoppe",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Will-Hoppe",
		label: "Github",
		handle: "@Will-Hoppe",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:whoppe@nd.edu",
		label: "Number: 651-233-0118",
		handle: "whoppe@nd.edu",
	},
];

export default function Example() {
	return (
		<div className="bg-transparent border border-zinc-500 bg-gradient-to-tl from-black z-0 via-zinc-900 min-h-screen to-slate-900">
		<div className="">
			
			<Navigation />
			
			<div className="container flex items-center justify-center px-4 mx-auto">
			
				<div className="grid w-full grid-cols-2 gap-8 mt-28 sm:mt-24 sm:grid-cols-4 lg:gap-16">
				<img className="rounded-full border border-gray-500" src="/images/will.png" alt=""/>
					{socials.map((s) => (
						<Card>
							<Link
							
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center text-center aspect-square gap-4 duration-700 group md:gap-7 md:py-10  lg:pb-30  md:p-10"
							>
								
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-l font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
			<h1 className="text-2xl pt-6 px-20 text-white">About Me</h1>
			<p className="px-20 pt-6 leading-6 tracking-tight font-medium font-mono text-gray-400">My name is Will Hoppe, and I am a junior studying computer science at the University of Notre Dame with a concentration in Artificial Intelligence. I have been into computers for a while — <a href="/images/Commodore-64.png" className="text-sky-400 visited:text-purple-400 hover:text-white">Here's proof.</a></p>
			<br></br><p className="px-20 leading-6 tracking-tight font-medium font-mono text-gray-400">I have always believed that technology is worthless if the user doesn't know how to utilize it effectively. With AI, I see a future where technology is more accessible to everyone, breaking down barriers of comprehension and interaction that exist today. This vision propels me in my studies as well as practical application through projects and work experience. This has led me to take on the role of a Research Assistant working on a <a href="https://sccvo.org/projects/food-information-networks-finsbuilding-data-driven-supports-increasing-access-and-healthy" className="text-sky-400 visited:text-purple-400 hover:text-white">food accessibility application</a>. Additionally, I have grown passionate for web development. This has driven me to create multiple <a href="/projects" className="text-sky-400 visited:text-purple-400 hover:text-white">websites</a>, where I fuse creativity with functionality — ensuring each website is engaging and also user-friendly.</p>
			<br></br><p className="px-20 pb-10 leading-6 tracking-tight font-medium font-mono text-gray-400">I am planning on graduating in 2025, but am looking for an internship position for summer 2024. Please feel free to check out my projects and contact me!</p>
			</div>
		</div>
	);
}
