export default function Comment ({ instrument, author, text }) {
	return (
		<div className="comment">
			<h3>{instrument} {">"} {author}</h3>
			<p>{text}</p>
		</div>
	);
}