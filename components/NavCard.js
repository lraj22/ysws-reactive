import { instrumentData, instruments } from "@/data/instruments";

const pages = {
	"/": {
		"title": "Home",
		"desc": "Learn about musical instruments",
	},
	"/info": {
		"title": "Information",
		"desc": "What are musical instruments?",
	},
	"/brass": {
		"title": "Brass",
		"desc": "Discover brass instruments",
	},
	"/woodwinds": {
		"title": "Woodwinds",
		"desc": "Discover woodwinds",
	},
};

export default function NavCard ({ href }) {
	const categories = Object.keys(instruments).map(category => ("/" + category + "/"));
	const category = categories.find(category => href.includes(category));
	
	if (category) {
		const instrument = href.slice(category.length);
		const uppercasedInstrument = instrument[0].toUpperCase() + instrument.slice(1);
		return (
			<a href={href} className="card"><div>
				<h2>{uppercasedInstrument}</h2>
				<p>{instrumentData[instrument].shortDesc}</p>
			</div></a>
		);
	} else if (href in pages) {
		const { title, desc } = pages[href];
		return (
			<a href={href} className="card"><div>
				<h2>{title}</h2>
				<p>{desc}</p>
			</div></a>
		);
	} else {
		return (
			<a href="/" className="card"><div>
				<h2>Faulty link!</h2>
				<p>This link has an unresolved href set to "{href}".</p>
			</div></a>
		)
	}
}