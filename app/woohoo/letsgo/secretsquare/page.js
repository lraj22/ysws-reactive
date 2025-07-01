"use client";
import { useEffect } from "react";

export default function Home () {
	useEffect(() => {
		function nextRoute (e) {
			if (e.key === "n") {
				location.href="/woohoo/letsgo/secretsquare/keyboard";
			}
		}
		window.addEventListener("keydown", nextRoute);
	
		return () => {
			window.removeEventListener("keydown", nextRoute);
		};
	}, []);
	return (
		<>
			<div>Amazing! You're at the /woohoo/letsgo/secretsquare route O_O</div>
			<p>This may or may not be the end. I can't promise there is a path forward... you'll have to figure out yourself. :P</p>
			<p>(wink wink cursor moves again)</p>
			<div style={{"pointerEvents":"none"}} className="text-black">
				<br/>
				<br/>
				<br/>
				<p>Press 'n' to proceed</p>
			</div>
			<div className="secretSquare text-black" style={{"cursor":"text"}}>Press ctrl+a to select all text!</div>
		</>
	);
}