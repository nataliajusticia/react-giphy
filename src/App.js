import ListOfGifs from "./components/ListOfGifs/ListOfGifs";

import { Link, Route } from "wouter";

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/">GIPHY.</Link>
      </header>

      <main className="container">
        <div className="section">
          <Route path="/search/:keyword" component={ListOfGifs} />
        </div>
      </main>
    </div>
  );
};

export default App;
