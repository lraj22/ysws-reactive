export const instrumentData = {
	"trumpet": {
		"id": 1,
		"description": (
			<>
				<p>Trumpets are the most popular of all brass instruments. Known for their amazing range and screaming high pitches, trumpets are an overall versatile instruments. They are also a valved instrument, just like the euphonium.</p>
				<p>Trumpets are used in many different band scenarios. You can find them in concert, wind ensemble, and jazz! Who's your favorite trumpet player?</p>
			</>
		),
		"shortDesc": `"Life is like a trumpet - if you don't put anything into it, you don't get anything out of it." - William C. Handy`,
	},
	"trombone": {
		"id": 2,
		"description": (
			<>
				<p>Hey, that's the one I play! Trombones are one of the coolest instruments, being unique in the way that they are the only contemporary instruments that use slides instead of keys or valves.</p>
				<p>They can be found almost anywhere, from jazz to orchestra, concert to symphonic bands.</p>
			</>
		),
		"shortDesc": `"A frisky spirit makes my trombone sing." - Chris Barber`,
	},
	"euphonium": {
		"id": 3,
		"description": (
			<>
				<p>Euphoniums are pleasant sounding low brass instruments. They are often mistaken for baritones. One difference is that euphoniums have upward-facing bells while marching baritones face forwards, for marching purposes.</p>
				<p>Euphonium players are rare, but nice to meet. Don't forget to say hi when you see a euphonium player!</p>
			</>
		),
		"shortDesc": `"A band is only as good as its euphonium section." - John Philip Sousa`,
	},
	"flute": {
		"id": 4,
		"description": (
			<>
				<p>Flutes are the soft-spoken group of the woodwinds. However, they are one of the most popular and are very interesting! They are thought to be one of the world's oldest instruments.</p>
				<p>Flutes have keys that can be pressed, and a mouthpiece into which the musician blows to produce sound out of the instrument.</p>
			</>
		),
		"shortDesc": `"The quickest way to unlock your talent is to take the flute out of the box." - James Galway`,
	},
	"saxophone": {
		"id": 5,
		"description": (
			<>
				<p>The saxophone isn't exactly an instrument, but a family of instruments. They consist of the alto sax, tenor sax, soprano sax, bari sax, and more! The sax family has incredible variety.</p>
				<p>Saxophones are versatile instruments that are transposed to a different key than concert pitch. Transposed instruments are quite interesting, and we can go more in-depth on this in music theory.</p>
			</>
		),
		"shortDesc": `"Don't play the saxophone. Let it play you." - Charlie Parker`,
	},
	"clarinet": {
		"id": 6,
		"description": (
			<>
				<p>Clarinets are very interesting instruments! Unlike other woodwinds, clarinets can (and often are) made of wood. Some varieties, especially student clarinets which are made of plastic, are made of other materials like metal or plastic.</p>
				<p>Clarinets, similar to saxophones, have reeds. These are used to help produce the vibrations necessary to make sound on the instrument.</p>
			</>
		),
		"shortDesc": `"The ability to play the clarinet is the ability to overcome the imperfections of the instrument. There's no such thing as a perfect clarinet, never was and never will be." - Jack Brymer`,
	},
};

export const instruments = {
	"brass": ["trumpet", "trombone", "euphonium"],
	"woodwinds": ["flute", "saxophone", "clarinet"],
}

export function getCategory (instrument) {
	for (const [category, instrumentsInCategory] of Object.entries(instruments)) {
		if (instrumentsInCategory.includes(instrument)) return category;
	}
	return "none";
}
