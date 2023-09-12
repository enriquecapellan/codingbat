import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "@pages/home";
import Login from "@pages/login";
import Root from "@pages/root";
import Module from "@pages/module";
import Exercise from "@pages/exercise";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: ":moduleId/",
				element: <Module />
			},
			{
				path: ":moduleId/:exerciseId",
				element: <Exercise />
			}
		]
	},
	{ path: "login", element: <Login /> }
]);

export const Router = () => {
	return (
		<>
			<GlobalStyle />
			<RouterProvider router={router} />
		</>
	);
};

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

	body {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

  h1 {
    margin: 0;
    padding: 0;
  }
`;
