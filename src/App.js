import HomePage from "./pages/Home/index";
import SearchResultsPage from "./pages/SearchResults";

import { Link, Route } from "wouter";

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/">GIPHY.</Link>
      </header>

      <main className="container">
        <Route path="/" component={HomePage} />
        <Route path="/search/:keyword" component={SearchResultsPage} />
      </main>
    </div>
  );
};

export default App;
