import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./components/card";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "DevBlog", href: "/blog" },
  { name: "Resume", href: "/resume/William_Hoppe_Resume.pdf" },
];

const blogLink = "/blog";

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
    label: "",
    handle: "whoppe@nd.edu",
  },
];

const projects = [
  {
    href: "https://www3.nd.edu/~skumar5/teaching/additional/spring-2022-eg/project-08-08/index.html",
    src: "/images/covidwebsite.png",
    label: "I created this website to investigate the effect of COVID-19 on the US economy and visualize the findings. The data was parsed through using Python in Google Colab and used to generate Plotly visualizations. These graphs and images were then converted into HTML divs and inserted into the website design.",
    handle: "Covid-19's Effect on Economy Visualized Website",
    className: "w-full h-full rounded-lg border border-gray-500 ease-in-out duration-[6s] hover:-translate-y-3/4",
  },
  {
    href: "https://tune-wave.netlify.app/",
    src: "/images/tunewave.png",
    label: "I created this AI-powered web application using Node.js and JavaScript to effectively transform a simple concept into a full song. This website utilizes recurrent calls to OpenAI API to create dynamic responses to user prompts and generate unique and personalized song titles, lyrics, and album art.",
    handle: "TuneWave",
    className: "w-full h-full rounded-lg border border-gray-500 ease-in-out duration-[6s] hover:-translate-y-2/3",
  },
  {
    href: "",
    src: "/images/cadetscut.jpg",
    label: "I developed and managed this website using Wordpress and Elementor for a home services provider with 250+ clients. I optimized for search engine page visibility and pushed website to becoming first result using Yoast SEO plugins. The company has shifted its focus to other business ventures and no longer maintains the website.",
    handle: "Cadet's Cut Website",
    className: "w-full h-full rounded-lg border border-gray-500 ease-in-out duration-[6s] hover:-translate-y-2/3",
  },
];

const newProject = {
  href: "/blog",
  src: "/images/froggy.png",
  label: "",
  handle: "Froggy's Big Leap",
  className: "w-full h-full rounded-lg border border-gray-500 text-center text-xl",
};

const AIProject = {
	href: "https://will-hoppe.itch.io/ai-vs-human-art-project",
	src: "/images/AI_Art.png",
	label: "",
	handle: "AI vs Human Art Project",
	className: "w-full h-full rounded-lg border border-gray-500 text-center text-xl",
};

export default function Home() {
  return (
    <div id="home" className="bg-transparent z-50">
      	<div className="flex flex-col items-center min-h-screen justify-center min-w-screen bg-gradient-to-tl from-black via-zinc-600/30 to-slate-900">
        	<nav className="mb-5 mt-8 animate-fade-in">
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
				<h3 className="z-10 text-2xl duration-700 text-transparent hover:bg-white bg-zinc-300 hover:tracking-wide cursor-default animate-title text-edge-outline font-display sm:text-2xl md:text-3xl bg-clip-text whitespace-nowrap">
					<a
						href=""
						className="duration-200 text-edge-outline bg-clip-text"
					>
						will-hoppe.com
					</a>
				</h3>
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<div className="mt-2 text-center animate-fade-in">
						<div className="container flex items-center justify-center px-4 mx-auto">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-2 sm:mt-5 lg:gap-16">
								<div className="md:col-span-1 flex flex-col items-center gap-3">
									<img className="rounded-full border border-gray-500 mb-2" src="/images/will.png" alt=""/>
									{socials.map((s) => (
										<Card key={s.href}>
											<a href={s.href} className="flex items-center space-x-2 bg-gray-900">
											<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-150 group-hover:text-white text-zinc-400">
												{s.icon}
											</span>
											<div className="z-10 flex flex-col items-center">
												<span className="px-4 text-l font-medium duration-150 lg:text-xl text-zinc-400 group-hover:text-white font-display">
												{s.handle}
												</span>
												<span className="mb-2 text-sm text-center duration-150 text-zinc-400 group-hover:text-zinc-200">
												{s.label}
												</span>
											</div>
											</a>
										</Card>
									))}
								</div>
								<div className="md:col-span-3 p-4 rounded-lg border border-gray-500 bg-gray-900 text-left bg-opacity-50">
									<p className="px-6 md:px-20 pt-6 leading-6 tracking-tight font-medium text-gray-300 tracking-wide">
									Hi! I'm a senior studying computer science at the University of Notre Dame. I have been into computers for a while — <a href="/images/Commodore-64.png" className="text-sky-400 visited:text-purple-400 hover:text-white">Here's proof.</a>
									</p>
									<br />
									<p className="px-6 md:px-20 leading-6 tracking-tight font-medium text-gray-300 tracking-wide">
									I have internship experience at Capital One and worked on research teams spanning multiple projects and disciplines. Much of my professional and personal experience centers around Generative AI applications, such as building large datasets, fine-tuning models, or developing programs around a model.
									</p>
									<br />
									<p className="px-6 md:px-20 leading-6 tracking-tight font-medium text-gray-300 tracking-wide">
									Recently, I've been building a video game in Godot with mentorship from a professor, and I'm hoping to release a demo on Steam in the next few months. It's a 2D platforming game where you play as a cute frog and can grapple around with your tongue. I am creating all assets, code, and music myself. Check out my <a href={blogLink} className="text-sky-400 visited:text-purple-400 hover:text-white">devblog</a> to see my progress!
									</p>
									<br />
									<p className="px-6 md:px-20 pb-10 leading-6 tracking-tight font-medium text-gray-300 tracking-wide">
									Feel free to check out my other projects and contact me!
									</p>
								</div>
							</div>
						</div>
						<div id="projects" className="mt-10 min-w-screen min-h-screen">
							<h1 className="text-white text-3xl">Projects</h1>
							
							<div className="container flex justify-center px-4 mt-10 mx-auto max-w-5xl">
							  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
								<div className="md:col-span-3 flex flex-col items-center">
								  <Card>
									<Link
									  href={newProject.href}
									  target="_blank"
									  className="relative flex flex-col items-center gap-4 duration-700 group lg:pb-4"
									>
									  <div className="max-h-100">
										<img className={newProject.className} src={newProject.src} alt=""/>
									  </div>
									  <div className="z-10 flex flex-col items-center">
										<span className="text-3xl font-medium duration-150 lg:text-xl text-center text-zinc-200 group-hover:text-white font-display">
										  {newProject.handle}
										</span>
									  </div>
									</Link>
								  </Card>
								</div>
								<div className="md:col-span-2 p-4 rounded-lg border border-gray-500 bg-gray-900 text-left bg-opacity-50">
								  <p className="px-6 md:px-5 pt-6 leading-6 font-medium text-gray-300 tracking-wide">
									Froggy's Big Leap started as a class project in my Game Development class, but with encouragement from my professor, I decided to take it further. It's a low-stress platformer with unique movement mechanics and fun nature-themed levels.
								  </p>
								  <p className="px-6 md:px-5 pt-6 leading-6 font-medium text-gray-300 tracking-wide">
								  With guidance from my professor, I've been able to create all assets, code, and music myself. I'm hoping to release a demo on Steam in the next few months.
								  </p>
								  <br />
								<div className="flex justify-center mt-4">
									<Link
										href={blogLink}
										target="_blank"
										className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
									>
										Check out my devblog!
									</Link>
								</div>
								</div>
							  </div>
							</div>

							<div className="container flex justify-center px-4 mt-10 mx-auto max-w-6xl">
							  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
								<div className="md:col-span-2 p-4 rounded-lg border border-gray-500 bg-gray-900 text-left bg-opacity-50 flex flex-col justify-center">
								  <p className="px-6 md:px-5 pt-6 leading-6 font-medium text-gray-300 tracking-wide">
									I created this museum simulation for my Generative AI class final project. I used multiple diffusion models to generate unique art pieces and then had people guess which were created by AI and which were created by humans.
								  </p>
								  <p className="px-6 md:px-5 pt-6 leading-6 font-medium text-gray-300 tracking-wide">
								  I built this project in Godot and stored player data in a Google Firebase database. My goal was to explore how when presented under the same context, AI-generated art can be indistinguishable from human-generated art. Generally, players were able to guess correctly about 50% of the time.
								  </p>
								  <br />
								<div className="flex justify-center mt-4">
									<Link
										href={AIProject.href}
										target="_blank"
										className="px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
									>
										Play my Project!
									</Link>
								</div>
								</div>
								<div className="md:col-span-3 flex flex-col items-center justify-center">
								  <Card>
									<Link
									  href={AIProject.href}
									  target="_blank"
									  className="relative flex flex-col items-center gap-4 duration-700 group lg:pb-4"
									>
									  <div className="max-h-100">
										<img className={AIProject.className} src={AIProject.src} alt=""/>
									  </div>
									  <div className="z-10 flex flex-col items-center">
										<span className="text-3xl font-medium duration-150 lg:text-xl text-center text-zinc-200 group-hover:text-white font-display">
										  {AIProject.handle}
										</span>
									  </div>
									</Link>
								  </Card>
								</div>
							  </div>
							</div>
									
							<div className="container flex justify-center px-4 mx-auto">	
								<div className="grid w-full grid-cols-3 mt-10 gap-5 pb-1 mx-auto sm:grid-cols-1 lg:grid-cols-3 lg:gap-16">
									{projects.map((s) => (
										<Card key={s.href}>
											<Link
											href={s.href}
											target="_blank"
											className="relative flex flex-col items-center gap-4 duration-700 group md:gap-5  lg:pb-4">
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
				<div id="resume" className="mb-10 min-w-screen">
					<div className="justify-center min-w-screen">
						<h1 className="text-2xl pt-6 px-6 text-white">Resume</h1>
						<p className="px-6 pt-6  leading-6 tracking-tight font-medium font-mono text-gray-400">You can view my resume <a href="/resume/William_Hoppe_Resume.pdf" className="text-sky-400 visited:text-purple-400 hover:text-white">here</a>.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}
