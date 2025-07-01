import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import CommentsBox from "@/components/CommentsBox";

export default function Home() {
	return (
		<>
			<Title>Saxophone</Title>
			<p>The saxophone isn't exactly an instrument, but a family of instruments. They consist of the alto sax, tenor sax, soprano sax, bari sax, and more! The sax family has incredible variety.</p>
			<p>Saxophones are versatile instruments that are transposed to a different key than concert pitch. Transposed instruments are quite interesting, and we can go more in-depth on this in music theory.</p>

			<p>Click one of the links below to learn more about a different instrument!</p>
			<div className="cardContainer">
				<NavCard href="/brass" />
				<NavCard href="/woodwinds/flute" />
				<NavCard href="/woodwinds/clarinet" />
			</div>

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument="Saxophone" />
			<Footer />
		</>
	);
}
