import React from "react";
import ScrollReveal from "./ScrollReveal";
import { insights } from "../data/content";

export default function Insights() {
    return (
			<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
				{insights.map((item, index) => (
					<ScrollReveal key={item.id} delay={index * 0.08}>
						<article className="p-5 border rounded flex flex-col h-full">
							<h4 className="font-semibold">{item.title}</h4>
							<p className="text-sm text-gray-600 mt-2">{item.desc}</p>
							<a
								className="mt-3 inline-block text-sm text-orange-500 underline"
								href="#"
							>
								Read more
							</a>
						</article>
					</ScrollReveal>
				))}
			</div>
		);
}