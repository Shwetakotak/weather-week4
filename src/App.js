import "./App.css";
import Weather from "./Weather";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Weather city="New York" />

        {/* <Audio height="100" width="100" color="grey" ariaLabel="loading" /> */}
      </header>
    </div>
  );
}

export default App;
