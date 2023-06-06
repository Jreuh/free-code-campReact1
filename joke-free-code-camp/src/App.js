import "./App.css";
import Joke from "./Components/Joke";
import jokeData from "./Jokes-data";

function App() {
  const jokeElement = jokeData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div className="App">{jokeElement}</div>;
}

export default App;
