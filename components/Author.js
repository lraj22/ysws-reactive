import { instrumentData } from "@/data/instruments";

export default async function Author ({ instrument }) {
	const id = instrumentData[instrument.toLowerCase()].id;
	const res = await fetch(`https://dummyjson.com/users/${id}?select=firstName,lastName`);
	const authorJson = await res.json();
	const author = authorJson.firstName + " " + authorJson.lastName;
	return (
		<p style={{"marginBottom": "1em"}}>Written by: <b>{author}</b></p>
	);
}