import Comment from "./Comment";

const mapping = {
	"trumpet": 1,
	"trombone": 2,
	"euphonium": 3,
	"flute": 4,
	"saxophone": 5,
	"clarinet": 6,
};

export default async function CommentsBox ({ instrument }) {
	const id = mapping[instrument.toLowerCase()];
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
	const commentsJson = await res.json();
	const comments = commentsJson.map((comment) => {
		const authorName = comment.email.split("@")[0].replace(/[_.]/gm, " ");
		return (
			<Comment key={comment.id} instrument={instrument} author={authorName} text={comment.body} />
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