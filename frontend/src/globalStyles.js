import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
		color: ${theme.colors.text.primary}
	}

	body {
		background: #F8F8F8;
	}
`;
