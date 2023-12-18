import "./App.css";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import Theme from "./Theme";

function App() {
  return (
    <main className="container mx-auto mt-4">
      <Theme />
      <SearchForm />
      <Gallery />
    </main>
  );
}

export default App;
