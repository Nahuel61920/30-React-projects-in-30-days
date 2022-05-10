import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Themes";

const StyledApp = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
  margin: 0 12rem;
  padding: 2rem;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} className="App">
      <GlobalStyles />
      <StyledApp>
        <h1>Dark Mode</h1>
        <button onClick={() => themeToggler()} className="button">
          <img src="https://iristech.co/wp-content/uploads/2017/05/macos-sierra-night-shift-icon-black.png" />
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta aspernatur, cumque cum accusantium nulla eligendi velit consequuntur explicabo, laboriosam veniam? Nesciunt ipsum error suscipit veniam labore, ex quos eum rem facere dolores dolorem quod vitae ea, ut facilis ducimus! Laboriosam, rem nostrum nihil, incidunt voluptates recusandae odio corporis, tempore quisquam animi perspiciatis cupiditate accusantium officiis quam nam ut veritatis! Voluptas minima commodi, rerum ullam cupiditate optio ipsa laboriosam, ex facere non aut excepturi fugiat sunt, molestiae fugit natus eum illo ducimus praesentium alias aspernatur tempore dolores cumque. Delectus vero suscipit dolore sint a vitae tenetur temporibus odio molestias harum doloremque officiis aliquid minima id voluptate nam ipsum, labore, debitis culpa libero autem illum possimus saepe! Animi consequatur quam cupiditate! A, assumenda quis totam animi voluptatem perspiciatis in iste error. Exercitationem harum autem fuga eum nihil, iste quaerat cupiditate, necessitatibus magnam ipsum quae sequi iure! Ex laboriosam, possimus doloribus sint deserunt facere porro eos inventore tempore alias quisquam commodi, molestiae odit minus? Temporibus, quidem nulla nobis dolorem vel neque ullam impedit laudantium, ducimus dolor possimus enim perspiciatis veniam. Autem laudantium dicta iure, nulla possimus accusantium labore unde cum debitis, placeat culpa quia tempore. Ducimus voluptas animi, ut quod et explicabo!
        </p>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
