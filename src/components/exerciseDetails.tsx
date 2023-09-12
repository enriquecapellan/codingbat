import { FC } from "react";
import styled from "styled-components";
import { generateFunc } from "../utils/helpers";

export const ExerciseDetails: FC<Exercise> = ({
	examples,
	description,
	funcName,
	params
}) => {
	return (
		<Wrapper>
			<p>{description}</p>
			<div className="examples">
				<ul>
					{examples.map(({ input, output }) => (
						<li>
							<code>{generateFunc(funcName, params, input)}</code> should return{" "}
							<code>{output}</code>
						</li>
					))}
				</ul>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.examples {
		padding: 1rem;
		background-color: #f2f2f2;
		border-radius: 5px;
	}
`;
