import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";

export default function Home() {
	return (
		<>
			<Title>What are musical instruments?</Title>
			<p>Musical instruments are simply objects that produce sound when they are played. They come in many varieties, from brass to woodwinds, strings to percussion, and more.</p>
			<p>Each instrument is unique in its own way. We specialize in providing information about brass and woodwind instruments.</p>
			<p>Click one of the links below to learn more!</p>
			<div className="cardContainer">
				<NavCard href="/" />
				<NavCard href="/brass" />
				<NavCard href="/woodwinds" />
			</div>
			<Footer />
		</>
	);
}
