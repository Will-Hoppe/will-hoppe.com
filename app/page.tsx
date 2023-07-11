import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "About/Contact", href: "/contact" },
	{ name: "Resume", href: "/resume/William_Hoppe_Resume.pdf"},
];

export default function Home() {
	return (
		<div className="bg-transparent z-50 border border-zinc-500">
		<div className="flex flex-col items-center min-h-screen justify-center min-w-screen bg-gradient-to-tl from-black via-zinc-600/30 to-slate-900">
			<nav className="mb-16 mt-12 animate-fade-in">
				<ul className="flex items-center gap-7">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
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
			<h1 className="z-10 text-5xl duration-700 text-transparent hover:bg-white bg-zinc-300 hover:tracking-wide cursor-default animate-title text-edge-outline font-display sm:text-5xl md:text-8xl bg-clip-text whitespace-nowrap">
				<Link
						href="/"
						className="duration-200 text-edge-outline bg-clip-text"
					>
						will-hoppe.com
				</Link>
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="mt-24 text-center animate-fade-in">
				<h2 className="text-base text-zinc-400 mx-10 font-mono mb-12">
					Hi! My name is Will. I am currently pursuing a degree in Computer Science at the University of Notre Dame.
					<br />
					I am interested in software engineering, particularly at the intersection of human-computer interaction and machine learning.
					<br />	<br />	
					I aspire to innovate — to harness the power of artificial intelligence to push creative boundaries, design user experiences like <br />never before, and redefine our relationship with technology. My competence in developing and leveraging machine learning technologies, <br />coupled with my background in web development and user experience design, ensures I remain at the forefront of this fast-paced field.{" "}
				</h2>
			</div>
		</div>
		</div>
	);
}
