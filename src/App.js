import logo from "./logo.svg";
import "./App.css";
// import Counter from "./Counter";

import Header from "./Header";
import Footer from "./Footer";
import { StoreProvider } from "./Store";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          {/* <Counter></Counter> */}
          <Header></Header>
          <Footer></Footer>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
