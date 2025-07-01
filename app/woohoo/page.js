import MyTitle from "@/components/MyTitle";

export default function Home () {
	return (
		<>
			<MyTitle>Welcome to the Routes game (the main feature of this site)</MyTitle>
			<p>Woohoo! Hi! Nice seeing you here!</p>
			<p>We barely get anyone on our secret page here.</p>
			<p>Thanks for following me here.</p>
			<p>One more thing... you can either <a href="/">go back home</a>, orrr......</p>
			<p><a href="/woohoo/letsgo">GO FURTHER DOWN THE ROUTE</a>. Your choice!</p>
			<br/>
			<p>Hint: the game is to go down as many routes as possible</p>
		</>
	);
}