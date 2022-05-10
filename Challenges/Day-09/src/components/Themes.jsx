import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    background: "#ccc",
};

export const darkTheme = {
    body: "#000",
    fontColor: "#fff",
    background: "#121212",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
	}
`;