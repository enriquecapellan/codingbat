import { FC } from "react";
import styled from "styled-components";

type Props = {
	results: any[];
};

const Tests: FC<Props> = ({ results }) => {
	return (
		<Wrapper>
			<thead>
				<tr>
					<th>Test</th>
					<th>Expected</th>
					<th colSpan={2}>Result</th>
				</tr>
			</thead>
			<tbody>
				{results.map((r) => (
					<tr key={r.case}>
						<td>
							<code>{r.case}</code>
						</td>
						<td>
							<code>{r.expected}</code>
						</td>
						<td>{r.result}</td>
						<td className="icon">{r.passed ? "✅" : "❌"}</td>
					</tr>
				))}
			</tbody>
		</Wrapper>
	);
};

const Wrapper = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	border-radius: 4px;
	font-size: 14px;

	th {
		background-color: #f2f2f2;
		text-align: center;
	}

	th,
	td {
		padding: 0.3rem 0.5rem;
		border: 1px solid #ccc;
	}

	.icon {
		text-align: center;
		font-size: 12px;
	}
`;

export default Tests;
