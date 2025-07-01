import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";

export default function Home() {
	return (
		<>
			<Title>Woodwinds</Title>
			<p>Woodwinds, despite their naming, are not usually made of wood! Most professional uses include metal or plastic in some capacity and not wood. However, some woodwinds like flutes can be made of metal alloys, or of wood.</p>
			<p>There are many, many woodwinds. This website will only cover 3 of the most popular woodwinds, but there are many more, like piccolos and bassoons. The world of music is expansive and amazing!</p>
			<p>Click one of the links below to learn more!</p>
			<div className="cardContainer">
				<NavCard href="/woodwinds/flute" />
				<NavCard href="/woodwinds/saxophone" />
				<NavCard href="/woodwinds/clarinet" />
			</div>
			<p>Or, <a href="/" className="link">go back home</a></p>
			<Footer />
		</>
	);
}
