import MyList from "@/oldcomponents/MyList";
import MyTitle from "@/oldcomponents/MyTitle";

export default function Home () {
	const food = [
		{
			"title": "Apple",
			"id": 1,
		},
		{
			"title": "Banana",
			"id": 2,
		},
		{
			"title": "Carrot",
			"id": 3,
		},
	];
	
	const electronics = [
		{
			"title": "Apple Mac",
			"id": 1,
		},
		{
			"title": "Banana Phone",
			"id": 2,
		},
		{
			"title": "Caret Keyboard",
			"id": 3,
		},
	];

	return (
		<div>
			<MyTitle>Observe our products:</MyTitle>
			<p>Foods:</p>
			<MyList products={food} />
			<br/>
			<p>Suspiciously food-seeming electronics:</p>
			<MyList products={electronics} />
			<br/>
			<br/>
			<a href="/">Go back home</a>
		</div>
	);
}