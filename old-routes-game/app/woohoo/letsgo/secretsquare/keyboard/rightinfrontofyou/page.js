"use client";
import { useEffect } from "react";

export default function Home () {
	useEffect(() => {
		function nextRoute (e) {
			if (e.key === "Enter") {
				location.href="/woohoo/letsgo/secretsquare/keyboard/rightinfrontofyou/challengeaccepted";
			}
		}
		window.addEventListener("keydown", nextRoute);
	
		return () => {
			window.removeEventListener("keydown", nextRoute);
		};
	}, []);
	
	return (
		<>
			<p>Okay, so you're definitely a sorcerer. /woohoo/letsgo/secretsquare/keyboard/rightinfrontofyou route O_O</p>
			<p>Again, probably the end, but no promises. :PPPP</p>
			<p>(wink wink)</p>
			<p>(WINKING INTENSIFIES)</p>
			<p>Enter this challenge and you'll find a path to the next route</p>
		</>
	);
}