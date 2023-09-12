import styled from "styled-components";

const Button = styled.button`
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 0.5rem 1rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 12px;
	border-radius: 4px;
  width: fit-content;

	&:hover {
		background-color: #3e8e41;
	}
`;

export default Button;
