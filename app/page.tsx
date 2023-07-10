import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/30 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={300}
			/>
			<h1 className="break-all z-10 text-6xl duration-1000 cursor-default text-white underline decoration-1 underline-offset-8 animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap ">
				will-hoppe
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500 ">
					Hi! My name is Will. I am currently pursuing a degree in Computer Science at the University of Notre Dame.
					<br />
					I am interested in software engineering, particularly at the intersection of human-computer interaction and machine learning.
					<br />	<br />	
					I aspire to innovate — to harness the power of artificial intelligence to push creative boundaries, design user experiences like <br />never before, and redefine our relationship with technology. My competence in developing and leveraging machine learning technologies, <br />coupled with my background in web development and user experience design, ensures I remain at the forefront of this fast-paced field.{" "}
				</h2>
			</div>
		</div>
	);
}
