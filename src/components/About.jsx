import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    const listItems = [
        "Experienced HR practitioners with industry expertise",
        "Comprehensive labour law and compliance guidance",
        "Custom HR policies, systems, and templates for your business",
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 md:flex md:items-center md:gap-10">
            <ScrollReveal>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold">About Kealo HR Solutions</h3>
                    <p className="text-m text-gray-800 mt-4">
                        Kealo HR Solutions provides practical, compliant, and
                        people-centred HR services to businesses across South Africa. We
                        combine local labour law knowledge with hands-on HR processes so
                        that employers can focus on what they do best. Our mission is to
                        simplify human resources by offering tools, training, and
                        consulting that empower organisations to manage people effectively
                        and fairly.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-800 font-medium">
                        {listItems.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 0.5}>
                                <li>{item}</li>
                            </ScrollReveal>
                        ))}
                    </ul>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <div className="md:w mt-6 md:mt-0 rounded-lg overflow-hidden border shadow bg-grey-50">
                    <img
                        src="/kealo-logo.png"
                        alt="Kealo team placeholder"
                        className="w-full h-auto rounded-lg border shadow"
                    />
                </div>
            </ScrollReveal>
        </div>
    );
}