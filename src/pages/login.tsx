import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSupabase } from "@hooks";

const Login = () => {
	const { session, supabase } = useSupabase();
	const navigate = useNavigate();

	if (session) navigate("/");

	return (
		<Wrapper>
			<Auth
				providers={["github"]}
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

export default Login;
