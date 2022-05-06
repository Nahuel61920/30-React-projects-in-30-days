import logo from './home.jpg';
import './App.css';
import Typical from 'react-typical';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              'Hi, I am Nahuel Carrizo', 2000,
              "I am 23 years old.", 1500,
              "I live in Argentina", 1600,
              "I'm front-end developer", 2000,
              "I like to learn new technologies", 2000,
              "Among the technologies that I dominate are:", 3000,
              "HTML", 1300,
              "CSS", 1300,
              "Sass", 1300,
              "Bootstrap", 1300,
              "TailwindCSS", 1300,
              "JavaScript", 1300,
              "jQuery", 1300,
              "I'm currently studying react", 1500]}
          />
        </h1>
      </header>
    </div>
  );
}

export default App;
