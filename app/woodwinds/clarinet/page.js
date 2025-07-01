import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import CommentsBox from "@/components/CommentsBox";

export default function Home() {
	return (
		<>
			<Title>Clarinet</Title>
			<p>Clarinets are very interesting instruments! Unlike other woodwinds, clarinets can (and often are) made of wood. Some varieties, especially student clarinets which are made of plastic, are made of other materials like metal or plastic.</p>
			<p>Clarinets, similar to saxophones, have reeds. These are used to help produce the vibrations necessary to make sound on the instrument.</p>

			<p>Click one of the links below to learn more about a different instrument!</p>
			<div className="cardContainer">
				<NavCard href="/brass" />
				<NavCard href="/woodwinds/flute" />
				<NavCard href="/woodwinds/saxophone" />
			</div>

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument="Clarinet" />
			<Footer />
		</>
	);
}
