import { Header } from "@components/header";
import { useSupabase } from "@hooks";
import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
	const { session } = useSupabase();
	const navigate = useNavigate();

	if (!session) navigate("/login");

	return (
    <>
      <Header />
			<Outlet />
		</>
	);
};

export default Root;
