import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
	return (
		<>
			<Title>Learn about musical instruments</Title>
			<p>You can learn about musical instruments from this website! We specialize in brass and woodwind instruments.</p>
			<p>Select one of the cards below to learn more.</p>
			<Navigation currentPage="home" />
			<Footer />
		</>
	);
}
