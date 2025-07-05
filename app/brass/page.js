import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import Navigation from "@/components/Navigation";

export default function Home() {
	return (
		<>
			<Title>Brass Instruments</Title>
			<p>Brass instruments are mostly made of brass, which you probably knew given the name. Brass is an alloy made of copper and zinc. This brass is usually polished and lacquered (new term, right?) so that it doesn't rust.</p>
			<p>Even in the brass, there is variety. Most brass instruments are valved, meaning that there are valves that the player must keep up or push down on in order to play the instrument. The trombone and related instruments, however, are slide-based, meaning the pitch of the instrument can be changed by moving a slide.</p>
			<p>Click one of the links below to learn more!</p>
			<Navigation currentPage="brass" />
			
			<p>Or, <a href="/" className="link">go back home</a></p>
			
			<Footer />
		</>
	);
}
