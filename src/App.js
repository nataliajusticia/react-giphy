import ListOfGifs from "./components/ListOfGifs";

const App = () => {
  return (
    <div className="App">
      <header>GIPHY.</header>

      <main className="container">
        <div className="section">
          <ListOfGifs keyword="switzerland" />
        </div>
      </main>
    </div>
  );
};

export default App;
