import { useOutsideClick } from "@hooks/useOutsideClick";
import { useSupabase } from "@hooks/useSupabase";
import { useState } from "react";
import styled from "styled-components";

export const UserMenu = () => {
	const { session, supabase } = useSupabase();
	const [isOpen, setIsOpen] = useState(false);

	const ref = useOutsideClick(() => setIsOpen(false));
	if (!session) return <></>;

	async function signOut() {
		await supabase.auth.signOut();
	}

	const user = session.user.user_metadata;

	return (
		<Wrapper>
			<img
				className="avatar"
				src={user.avatar_url}
				onClick={() => setIsOpen(true)}
			/>
			<Menu isOpen={isOpen} ref={ref}>
				<div className="menu__item" onClick={signOut}>
					Sign Out
				</div>
			</Menu>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		object-fit: cover;
	}
`;

const Menu = styled.div<{ isOpen: boolean }>`
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	position: absolute;
	z-index: 1;
	right: 0;
	border-radius: 8px;
	background-color: white;
	width: 10rem;
	overflow: hidden;

	.menu__item {
    transition: all 0.2s ease-in-out;
		padding: 10px;
		color: #555252;
		width: 100%;
		&:hover {
			background-color: #627980;
			color: white;
			cursor: pointer;
		}
	}
`;
