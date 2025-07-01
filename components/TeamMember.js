export default async function TeamMember ({ id }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const json = await res.json();
	console.log(json);
	return (
		<>
			<h1>{json.name}</h1>
			<p>Works at {json.company.name}</p>
			<p>Contact: {json.phone}</p>
			<p>Hey! Why not check out <a href={"https://" + json.website + "/"}>their website?</a></p>
			<br/>
			<p>Data loaded from JSONPlaceholder API!</p>
			<br/>
			<br/>
			<br/>
			<p>Have a look at some of the products we sell: <a href="/products">go to products page</a></p>
			<a href="/">Go back home</a>
		</>
	);
}