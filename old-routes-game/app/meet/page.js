import MyTitle from "@/oldcomponents/MyTitle";
import TeamMember from "@/oldcomponents/TeamMember";

export default function Home () {
	const memberId = Math.ceil(Math.random() * 10);
	return (
		<>
			<MyTitle>Welcome! Meet:</MyTitle>
			<TeamMember id={memberId} />
		</>
	)
}