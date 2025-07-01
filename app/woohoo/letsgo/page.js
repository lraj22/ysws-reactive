"use client";

export default function Home () {
	function nextRoute () {
		location.href="/woohoo/letsgo/secretsquare";
	}
	return (
		<>
			<p>Wow, you found the secret hidden /woohoo/letsgo route O_O</p>
			<p>I can't belive this, lol. See if you can find the hidden link to the next route on this page!</p>
			<p>(hint, move your cursor around until you get the pointer arrow)</p>
			<div className="secretSquare" onClick={nextRoute}></div>
		</>
	);
}