import MessageDisplay from "./MessageDisplay";

function MessageBox ({ message }) {
	return (
		<div className="messagebox">
			<p>This message was sent by <b>the developer</b>. Here is the message (passing data down)</p>
			<MessageDisplay message={message} />
		</div>
	);
}

export default MessageBox;