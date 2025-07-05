import Comment from "./Comment";
import { instrumentData } from "@/data/instruments";

export default async function CommentsBox ({ instrument }) {
	const id = instrumentData[instrument.toLowerCase()].id;
	const res = await fetch(`https://dummyjson.com/comments?limit=${instrument.length}&skip=${id * 10}`);
	const commentsJson = await res.json();
	const comments = commentsJson.comments.map((comment) => {
		return (
			<Comment key={comment.id} instrument={instrument} author={comment.user.fullName} text={comment.body} likes={comment.likes} />
		);
	});
	return (
		<div className="commentsBox">
			<h2 className="text-blue-400">Comments</h2>
			{comments}
			<br/>
			<p className="text-red-400">Adding comments to this listing has been disabled.</p>
		</div>
	);
}