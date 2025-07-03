import Title from "@/components/Title";
import Footer from "@/components/Footer";
import NavCard from "@/components/NavCard";
import CommentsBox from "@/components/CommentsBox";
import Author from "@/components/Author";

export default function Home() {
	return (
		<>
			<Title>Euphonium</Title>
			<Author instrument="Euphonium" />
			<p>Euphoniums are pleasant sounding low brass instruments. They are often mistaken for baritones. One difference is that euphoniums have upward-facing bells while marching baritones face forwards, for marching purposes.</p>
			<p>Euphonium players are rare, but nice to meet. Don't forget to say hi when you see a euphonium player!</p>

			<p>Click one of the links below to learn more about a different instrument!</p>
			<div className="cardContainer">
				<NavCard href="/woodwinds" />
				<NavCard href="/brass/trumpet" />
				<NavCard href="/brass/trombone" />
			</div>

			<p>Or, <a href="/" className="link">go back home</a></p>

			<CommentsBox instrument="Euphonium" />
			<Footer />
		</>
	);
}
