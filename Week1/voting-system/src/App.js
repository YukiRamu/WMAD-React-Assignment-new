import './App.css';
import Vote from "./component/Vote/Vote";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vote Your Language!</h1>
        <Vote />
      </header>
    </div>
  );
};

export default App;
