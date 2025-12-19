import React from "react";
import {services} from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
    return (
			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<ScrollReveal key={service.id} delay={index * 0.08}>
						<div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
							<h4 className="font-semibold">{service.title}</h4>
							<p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
						</div>
					</ScrollReveal>
				))}
			</div>
		);
}