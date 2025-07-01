function MessageDisplay ({ message }) {
	return (
		<div className="message">
			<h1>Received message. Here it is:</h1>
			<b>{message}</b>
		</div>
	);
}

export default MessageDisplay;