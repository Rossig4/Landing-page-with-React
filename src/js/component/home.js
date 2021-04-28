import React from "react";
import { NavBarNico } from "./NavBarNico";
import { Navbar } from "./navbarRosario";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./DivCard";
import { Footer } from "./footer";

//create your first component
export function Home() {
	let compañeros = [
		{
			title: "Valentina",
			imageUrl: "https://picsum.photos/200/300",
			description: "Son integrante del Primer mejor grupo.",
			buttonUrl: "https://en.wikipedia.org/wiki/Valentina",
			buttonLabel: "Go to wikipedia"
		},
		{
			title: "Rosario",
			imageUrl: "https://picsum.photos/200/301",
			description: "Son integrante del Primer mejor grupo.",
			buttonUrl: "https://en.wikipedia.org/wiki/Rosario",
			buttonLabel: "Go to wikipedia"
		},
		{
			title: "Natalia",
			imageUrl: "https://picsum.photos/200/302",
			description: "Son integrante del Primer mejor grupo.",
			buttonUrl: "https://en.wikipedia.org/wiki/Natalia",
			buttonLabel: "Go to wikipedia"
		},
		{
			title: "Nicolas",
			imageUrl: "https://picsum.photos/200/303",
			description: "Son integrante del Primer mejor grupo.",
			buttonUrl: "https://en.wikipedia.org/wiki/Nicolas",
			buttonLabel: "Go to wikipedia"
		},
		{
			title: "Seba",
			imageUrl: "https://picsum.photos/200/304",
			description: "Son integrante del Primer mejor grupo.",
			buttonUrl: "https://en.wikipedia.org/wiki/Seba",
			buttonLabel: "Go to wikipedia"
		}
	];
	return (
		<div className="container-fluid p-0">
			<div className="bg-dark">
				<div id="NavBar">
					<NavBarNico />
				</div>
			</div>
			<div className="bg-dark">
				<div id="NavBar">
					<Navbar />
				</div>
			</div>
			<div id="Jumbotron">
				<Jumbotron />
			</div>
			<div className="container">
				<div id="DivCard" className="row">
					{compañeros.map((e, i) => {
						return (
							<Card
								key={i}
								title={e.title}
								imageUrl={e.imageUrl}
								description={e.description}
								buttonUrl={e.buttonUrl}
								buttonLabel={e.buttonLabel}
							/>
						);
					})}
				</div>
			</div>
			<div id="Footer">
				<Footer />
			</div>
		</div>
	);
}
