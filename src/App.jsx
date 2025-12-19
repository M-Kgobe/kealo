import React from "react";
import Services from "./components/Services";
import Policies from "./components/Policies";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import HeroBackground from "./HeroBackgrounds";

export default function App() {
  return (
		<div className="min-h-screen bg-white text-black font-sans">
			{/* NAV */}
			<header className="border-b border-gray-200">
				<NavBar />
			</header>

			{/* HERO */}
			<section className="relative min-h-screen overflow-hidden z-0">
				<HeroBackground />
				<Hero />
			</section>

			{/* SERVICES */}
			<section id="services" className="max-w-6xl mx-auto px-6 py-16">
				<ScrollReveal>
					<h3 className="text-2xl font-bold">Our HR Services</h3>
				</ScrollReveal>

				<ScrollReveal delay={0.1}>
					<p className="text-gray-600 mt-2">
						Comprehensive HR support across the full employee lifecycle.
					</p>
				</ScrollReveal>

				<Services />
			</section>

			{/* POLICIES */}
			<section
				id="policies"
				className="bg-gray-50 max-w-6xl mx-auto px-6 py-16 relative overflow-hidden"
			>
				<div
					className="absolute inset-0 -z-10 opacity-10"
					style={{
						backgroundImage:
							"radial-gradient(circle, #fb923c 1px, transparent 1px)",
						backgroundSize: "20px 20px",
					}}
				/>
				<ScrollReveal>
					<h3 className="text-2xl font-bold">Our HR Policies</h3>
				</ScrollReveal>

				<ScrollReveal delay={0.1}>
					<p className="text-gray-600 mt-2">
						These policies outline our approach to employee relations...
					</p>
				</ScrollReveal>
				<Policies />
			</section>

			{/* ABOUT */}
			<section
				id="about"
				className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400"
			>
				<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/30 rounded-full blur-3xl" />

				<About />
			</section>

			{/* INSIGHTS */}
			<section
				id="insights"
				className="relative overflow-hidden bg-white max-w-6xl mx-auto px-6 py-16"
			>
				<svg
					className="absolute top-0 left-0 w-full opacity-20 -z-10"
					viewBox="0 0 1440 200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,80 C240,160 480,0 720,40 960,80 1200,160 1440,60"
						fill="none"
						stroke="#F97316"
						strokeWidth="2"
					/>
				</svg>
				<ScrollReveal>
					<h3 className="text-2xl font-bold">Insights & Resources</h3>
				</ScrollReveal>
				<ScrollReveal delay={0.1}>
					<p className="text-gray-600 mt-2">
						Practical articles and templates to help you manage people better.
					</p>
				</ScrollReveal>

				<Insights />
			</section>

			{/* CONTACT / FOOTER */}
			<footer id="contact" className="bg-black text-white">
				<Footer />
			</footer>
		</div>
	);
}
