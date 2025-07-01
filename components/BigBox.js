import MessageBox from "./MessageBox";

function BigBox ({ message }) {
	return (
		<div className="bigbox">
			<p>Thank you for using BigBox! Here is your content... passing data downwards!</p>
			<MessageBox message={message} />
		</div>
	);
}

export default BigBox;