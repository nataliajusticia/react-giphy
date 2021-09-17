import HomePage from "./pages/Home/index";
import SearchResultsPage from "./pages/SearchResults";

import { Link, Route } from "wouter";

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/">GIPHY.</Link>
      </header>

      <main>
        <div className="container">
          <Route path="/" component={HomePage} />
          <Route path="/search/:keyword" component={SearchResultsPage} />
        </div>
      </main>

      <footer>
        <div className="container">
          <p>
            Developed by{" "}
            <a href="https://nataliajusticia.com">nataliajusticia.com</a> with
            React.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
