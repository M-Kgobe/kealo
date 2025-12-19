import React from "react";
import { policies } from "../data/content";
import ScrollReveal from "./ScrollReveal";

export default function Policies() {
    return (
			<div className="max-w-6xl mx-auto px-6 py-16">
				<div className="mt-8 space-y-8">
					{policies.map((policy, index) => (
						<ScrollReveal key={policy.id} delay={index * 0.08}>
							<div>
								<h4 className="font-semibold text-lg">{policy.title}</h4>
								<p className="text-gray-700 mt-2">{policy.content}</p>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		);
}