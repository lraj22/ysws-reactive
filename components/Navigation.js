import { getCategory, instrumentData, instruments } from "@/data/instruments";
import NavCard from "./NavCard";

export default function Navigation ({ currentPage }) {
	const categories = Object.keys(instruments);
	const category = getCategory(currentPage);
	const catIndex = categories.indexOf(category);
	
	let navCards = [];
	
	if (catIndex !== -1) {
		const nextCategory = "/" + categories[(catIndex + 1) % categories.length];
		navCards.push(<NavCard key={nextCategory} href={nextCategory} />);
		const otherInstruments = instruments[category].filter(instrument => instrument !== currentPage);
		otherInstruments.forEach(instrument => {
			navCards.push(<NavCard key={instrumentData[instrument].id} href={"/" + category + "/" + instrument} />);
		});
	} else if (categories.includes(currentPage)) {
		navCards = instruments[currentPage].map(instrument => <NavCard key={instrumentData[instrument].id} href={"/" + currentPage + "/" + instrument} />);
	} else {
		if (currentPage === "home") navCards.push(<NavCard key="/info" href="/info" />);
		else navCards.push(<NavCard key="/" href="/" />);
		categories.forEach(category => navCards.push(<NavCard key={category} href={"/" + category} />));
	}
	
	return (
		<div className="cardContainer">
			{navCards}
		</div>
	);
}