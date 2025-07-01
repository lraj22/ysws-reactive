import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import CommentsBox from "@/components/CommentsBox";

export default function Home() {
	return (
		<>
			<Title>Flute</Title>
			<p>Flutes are the soft-spoken group of the woodwinds. However, they are one of the most popular and are very interesting! They are thought to be one of the world's oldest instruments.</p>
			<p>Flutes have keys that can be pressed, and a mouthpiece into which the musician blows to produce sound out of the instrument.</p>

			<p>Click one of the links below to learn more about a different instrument!</p>
			<div className="cardContainer">
				<NavCard href="/brass" />
				<NavCard href="/woodwinds/saxophone" />
				<NavCard href="/woodwinds/clarinet" />
			</div>

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument="Flute" />
			<Footer />
		</>
	);
}
