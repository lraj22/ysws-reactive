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
	"/brass/trumpet": {
		"title": "Trumpet",
		"desc": "The most popular",
	},
	"/brass/trombone": {
		"title": "Trombone",
		"desc": "Uniquely slidey",
	},
	"/brass/euphonium": {
		"title": "Euphonium",
		"desc": "Often confused for baritones",
	},
	"/woodwinds/flute": {
		"title": "Flute",
		"desc": "Beautifully sounding",
	},
	"/woodwinds/saxophone": {
		"title": "Saxophone",
		"desc": "Versatile and various",
	},
	"/woodwinds/clarinet": {
		"title": "Clarinet",
		"desc": "Not just Squidward's!",
	},
}

export default function NavCard ({ href }) {
	const { title, desc } = pages[href];
	return (
		<a href={href} className="card"><div>
			<h2>{title}</h2>
			<p>{desc}</p>
		</div></a>
	)
}