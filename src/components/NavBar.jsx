import React from "react";

export default function NavBar() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<img
							src="/kealo-logo.png"
							alt="Kealo HR Solutions logo"
							className="h-12 md:h-14 w-auto object-contain"
						/>
						<div>
							<h1 className="text-xl font-bold">Kealo HR Solutions</h1>
							<p className="text-sm text-gray-600">
								HR consultations, compliance & people solutions
							</p>
						</div>
					</div>

					<nav className="space-x-6 hidden md:block">
						<a href="#services" className="hover:underline">
							Services
						</a>
						<a href="#policies" className="hover:underline">
							Policies
						</a>
						<a href="#about" className="hover:underline">
							About
						</a>
						<a href="#insights" className="hover:underline">
							Insights
						</a>
						<a href="#contact" className="hover:underline">
							Contact
						</a>
					</nav>

					<div className="flex items-center gap-3">
						<a
							href="#contact"
							className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
						>
							Book a Consultation
						</a>
					</div>
        </div>
    );
}