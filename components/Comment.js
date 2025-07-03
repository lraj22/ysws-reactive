export default function Comment ({ instrument, author, text, likes }) {
	return (
		<div className="comment">
			<h3><span className="small">{instrument} {">"} </span>{author}</h3>
			<p>{text}</p>
			<p className="small">Likes: {likes}</p>
		</div>
	);
}