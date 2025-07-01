import MyTitle from "@/components/MyTitle";
import TeamMember from "@/components/TeamMember";

export default function Home () {
	const memberId = Math.ceil(Math.random() * 10);
	return (
		<>
			<MyTitle>Welcome! Meet:</MyTitle>
			<TeamMember id={memberId} />
		</>
	)
}