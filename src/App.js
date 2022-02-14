import "./App.css";
import Rightside from "./components/rightSide";
import Leftside from "./components/leftSide";

function App() {
  return (
    <div className="container">
      <Leftside />
      <Rightside />
    </div>
  );
}

export default App;
