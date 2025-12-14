import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faLocationDot,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
			<>
				<div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<img
							src="/kealo-logo.png"
							alt="Kealo HR Solutions logo"
							className="h-12 md:h-14 w-auto object-contain"
						/>
						<h4 className="font-semibold mt-3">Kealo HR Solutions</h4>
						<p className="text-sm text-gray-300 mt-2">
							Practical HR support for organisations across South Africa.
						</p>
					</div>

					<div>
						<h5 className="font-semibold">Contact</h5>
						<p className="text-sm text-gray-300 mt-2">
							<a
								href="mailto:info@kealo.co.za"
								className="underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="text-orange-500 text-xl"
								/>
								info@kealo.co.za
							</a>
						</p>
						<p className="text-sm text-gray-300">
							<a href="tel:+27712669726" className="underline">
								<FontAwesomeIcon
									icon={faPhone}
									className="text-orange-500 text-xl"
								/>
								071 266 9726
							</a>
						</p>
						<p className="text-sm text-gray-300 transform hover:scale-105 transition-all">
							<a
								href="https://wa.me/27712669726"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-green-800"
							>
								<FontAwesomeIcon
									icon={faWhatsapp}
									className="text-orange-500 text-xl "
								/>
							</a>
							<a
								href="https://wa.me/27712669726"
								className="hover:text-orange-500 hover:underline"
							>
								0712669726
							</a>
						</p>
					<p className="text-sm text-gray-300 mt-2">
							<FontAwesomeIcon
								icon={faLocationDot}
							className="text-orange-500 text-xl" />
							<br />
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17094.957010287828!2d28.175812290242344!3d-25.745051886848668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95620d78f2044b%3A0x85ebfaa6157db035!2sSediba%20House!5e0!3m2!1sen!2sza!4v1765690750447!5m2!1sen!2sza"
								width="200"
								height="100"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</p>
					</div>

					<div>
						<h5 className="font-semibold">Quick Links</h5>
						<ul className="mt-2 space-y-2 text-sm text-gray-300">
							<li>
								<a href="#services" className="underline">
									Services
								</a>
							</li>
							<li>
								<a href="#policies" className="underline">
									Policies
								</a>
							</li>
							<li>
								<a href="#about" className="underline">
									About
								</a>
							</li>
							<li>
								<a href="#insights" className="underline">
									Insights
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 text-center text-sm text-gray-400 py-4">
					© {new Date().getFullYear()} Kealo HR Solutions. All rights reserved.
				</div>
			</>
		);
}