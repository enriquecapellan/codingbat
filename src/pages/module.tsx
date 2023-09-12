import Card from "@components/card";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Module = () => {
	const { moduleId } = useParams();
	const navigate = useNavigate();

	function openExercise(exerciseId: string) {
		navigate(`/${moduleId}/${exerciseId}`);
	}

	return (
		<Wrapper>
			<Card
				title="Functions"
				description="Javascript exercises"
				onOpen={() => openExercise("callback")}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
	gap: 2rem;
	padding: 2rem;
`;

export default Module;
