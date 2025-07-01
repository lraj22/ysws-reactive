import MyComponent from "@/oldcomponents/MyComponent";
import MyTitle from "@/oldcomponents/MyTitle";
import BigBox from "@/oldcomponents/BigBox";

export default function Home() {
	const message = "You're awesome";
	
	return (
		<>
			<MyTitle>Hey there! Hello my fellow hackers :]</MyTitle>
			<div>
				<p>Here are my components:</p>
				<MyComponent />
				<p className="bg-yellow-800">Oh, by the way, do you want to <a href="/products">see our products</a>? They're pretty delightful!</p>
			</div>
			<BigBox message={message} />
			<MyTitle>Do you want to meet someone on our team?</MyTitle>
			<a href="/meet">Yes, please! (click here to meet them)</a>
			<MyTitle><a href="/woohoo">Psst... you wanna go on a secret route? Follow me!</a></MyTitle>
			<p>Made with 💖 by Lakshya Raj.</p>
		</>
	);
}
