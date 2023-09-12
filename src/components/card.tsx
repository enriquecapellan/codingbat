import { FC } from "react";
import { styled } from "styled-components";
import Button from "./button";

type Props = {
	title: string;
	description: string;
	onOpen: () => void;
};

const Card: FC<Props> = ({ title, description, onOpen }) => {
	return (
		<Wrapper>
			<div className="card__header">
				<h3 className="title">{title}</h3>
			</div>
			<div className="card__body">
				<p className="description">{description}</p>
			</div>
			<div className="card__footer">
				<Button onClick={onOpen}>Open</Button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px;
	display: flex;
	overflow: hidden;
	border-radius: 0.5rem;
	flex-direction: column;
	border: 1px solid #eaeaec;

	.card {
		&__header {
			box-sizing: border-box;
			width: 100%;
			height: 25px;
		}

		&__body {
		}

		&__footer {
			display: flex;
			padding-top: 0.5rem;
			justify-content: flex-end;
		}
	}
`;

export default Card;
