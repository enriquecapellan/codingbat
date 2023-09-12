import styled from "styled-components";
import { UserMenu } from "./userMenu";

export const Header = () => {

	return (
		<Wrapper>
      <h1>Practice JS</h1>
      <UserMenu />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: 5rem;
	margin-top: 0;
	padding: 1em;
	box-sizing: border-box;
	margin: 0;
	background-color: #2c3e50;
	color: #fff;
	display: flex;
	justify-content: space-between;
`;
