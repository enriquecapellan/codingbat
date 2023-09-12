import { useState } from "react";
import styled from "styled-components";
import Select, { SingleValue } from "react-select";

import Editor from "@components/editor";
import Button from "@components/button";
import Tests from "@components/tests";
import { exercises } from "@utils/exercises";
import { ExerciseDetails } from "@components/exerciseDetails";
import { generateCode, generateFunc } from "@utils/helpers";

function Exercise() {
	const [exercise, setExercise] = useState<Exercise>(exercises[0]);
	const [code, setCode] = useState<string>("");
	const [results, setResults] = useState<any[]>([]);

	function handleSelectExercise(option: SingleValue<Exercise>) {
		const newExercise = exercises.find(({ id }) => id === option?.id);
		if (newExercise) {
			setExercise(newExercise);
			const { funcName, params } = newExercise;
			const newCode = generateCode(funcName, params);
			setCode(newCode);
		}
	}

	function execute() {
		try {
			const { funcName, params, tests } = exercise;
			let func: any;
			eval(`func = ${code}`);

			const newResults = tests.map((test) => {
				const { params: input, expected } = test;
				const result = func(...input);
				const passed = result == expected;
				return {
					case: generateFunc(funcName, params, input),
					expected,
					result,
					passed
				};
			});
			setResults(newResults);
		} catch {}
	}

	return (
		<Wrapper>
			<div className="container">
				<section className="exercise">
					<div className="selects-container">
						<Select
							value={exercise}
							options={exercises}
							getOptionLabel={({ name }) => name}
							onChange={handleSelectExercise}
						/>
					</div>
					<ExerciseDetails {...exercise} />

					<Button onClick={execute}>&#9658;</Button>
					<Editor value={code} onChange={setCode} />
				</section>
				<section>
					<p id="error"></p>
					<Tests results={results} />
				</section>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.container {
		display: grid;
		grid-template-columns: 1fr 35rem;
		gap: 2rem;
		padding: 2em;
		overflow-y: auto;
		height: calc(100vh - 100px);
		box-sizing: border-box;
	}

	h3 {
		margin: 0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.exercise {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.selects-container {
		display: grid;
		grid-template-columns: 30% 1fr;
		gap: 1rem;
	}
`;

export default Exercise;
