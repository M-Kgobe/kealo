import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    return (
			<div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 z-10">
				<div className="flex-1">
					<ScrollReveal>
						<h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
							Professional HR solutions for growing businesses
						</h2>
					</ScrollReveal>

					<ScrollReveal delay={0.1}>
						<p className="mt-4 text-gray-700">
							From recruitment to compliance, Kealo HR Solutions helps
							organisations...
						</p>
					</ScrollReveal>

					<ScrollReveal delay={0.2}>
						<div className="mt-6 flex gap-4">
							<a className="bg-orange-500 text-white px-5 py-3 rounded-lg">
								Get a Quote
							</a>
							<a className="border border-black px-5 py-3 rounded-lg">
								Our Services
							</a>
						</div>
					</ScrollReveal>
				</div>

            <div className="flex-1">
                <ScrollReveal delay={0.3}>
					<div className="w-full rounded-xl shadow-lg border border-gray-100 p-6">
						<h3 className="text-lg font-semibold">Quick Inquiry</h3>
						<p className="text-sm text-gray-600 mt-2">
							Tell us briefly what you need and we’ll get back to you within one
							business day.
						</p>

						{/* Replace the Formspree endpoint with your own if needed */}
						<form
							action="https://formspree.io/f/meorbgny"
							method="POST"
							className="mt-4 space-y-3"
						>
							<input
								required
								name="name"
								placeholder="Full name"
								className="w-full border px-3 py-2 rounded"
							/>
							<input
								required
								type="email"
								name="email"
								placeholder="Email"
								className="w-full border px-3 py-2 rounded"
							/>
							<input
								name="phone"
								placeholder="Phone (optional)"
								className="w-full border px-3 py-2 rounded"
							/>
							<textarea
								name="message"
								rows={4}
								placeholder="How can we help?"
								className="w-full border px-3 py-2 rounded"
							/>
							<button
								type="submit"
								className="bg-black text-white px-4 py-2 rounded font-medium w-full"
							>
								Send Inquiry
							</button>
						</form>
					</div>
                </ScrollReveal>
				</div>
			</div>
		);
}