import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import CommentsBox from "@/components/CommentsBox";

export default function Home() {
	return (
		<>
			<Title>Trombone</Title>
			<p>Hey, that's the one I play! Trombones are one of the coolest instruments, being unique in the way that they are the only contemporary instruments that use slides instead of keys or valves.</p>
			<p>They can be found almost anywhere, from jazz to orchestra, concert to symphonic bands.</p>

			<p>Click one of the links below to learn more about a different instrument!</p>
			<div className="cardContainer">
				<NavCard href="/woodwinds" />
				<NavCard href="/brass/trumpet" />
				<NavCard href="/brass/euphonium" />
			</div>

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument="Trombone" />
			<Footer />
		</>
	);
}
