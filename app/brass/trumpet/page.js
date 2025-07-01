import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import CommentsBox from "@/components/CommentsBox";

export default function Home() {
	return (
		<>
			<Title>Trumpet</Title>
			<p>Trumpets are the most popular of all brass instruments. Known for their amazing range and screaming high pitches, trumpets are an overall versatile instruments. They are also a valved instrument, just like the euphonium.</p>
			<p>Trumpets are used in many different band scenarios. You can find them in concert, wind ensemble, and jazz! Who's your favorite trumpet player?</p>

			<p>Click one of the links below to learn more about a different instrument!</p>
			<div className="cardContainer">
				<NavCard href="/woodwinds" />
				<NavCard href="/brass/trombone" />
				<NavCard href="/brass/euphonium" />
			</div>

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument="Trumpet" />
			<Footer />
		</>
	);
}
