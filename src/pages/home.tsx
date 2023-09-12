import Card from "@components/card";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "@hooks/useSupabase";
import { useEffect, useState } from "react";

const Home = () => {
	const navigate = useNavigate();
	const { supabase } = useSupabase();

	const [modules, setModules] = useState<Module[]>([]);

	useEffect(() => {
		const fetchModules = async () => {
			const { data, error } = await supabase.from("modules").select("*");
			console.log({ data, error });
			if (error) {
				console.log(error);
			} else {
				setModules(data);
			}
		};
		fetchModules();
	}, []);

	console.log(modules);

	function openModule(moduleId: string) {
		navigate(`/${moduleId}`);
	}

	return (
		<Wrapper>
			{modules.map((module) => (
				<Card
					key={module.id}
					title={module.name}
					description={module.description || ""}
					onOpen={() => openModule(module.id)}
				/>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
	gap: 2rem;
	padding: 2rem;
`;

export default Home;
