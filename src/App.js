import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RandomBeer from "./components/random_beer/random_beer";
import ResearchBeer from "./components/research_beer/research_beer";
import BeerPage from "./components/beer_page/beer_page";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav_bar/nav_bar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<RandomBeer />} />
        <Route path="/research" element={<ResearchBeer />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/beerpage/:id" element={<BeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
