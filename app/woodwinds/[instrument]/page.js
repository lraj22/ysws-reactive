import Title from "@/components/Title";
import Footer from "@/components/Footer";
import CommentsBox from "@/components/CommentsBox";
import Author from "@/components/Author";
import Navigation from "@/components/Navigation";
import { instrumentData } from "@/data/instruments";

export default async function Instrument ({ params }) {
	const { instrument } = await params;
	const uppercasedInstrument = instrument[0].toUpperCase() + instrument.slice(1);
	const description = instrumentData[instrument].description;
	
	return (
		<>
			<Title>{uppercasedInstrument}</Title>
			<Author instrument={uppercasedInstrument} />
			{description}

			<p>Click one of the links below to learn more about a different instrument!</p>
			<Navigation currentPage={instrument} />

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument={uppercasedInstrument} />
			<Footer />
		</>
	);
}
