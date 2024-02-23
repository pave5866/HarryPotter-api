import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./components/Character/Characters";
import Anasayfa from "./components/Anasayfa/AnaSayfa";
import CharactersDetails from "./components/CharactersDetails/CharactersDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/Characters" element={<Characters />} />
          <Route
            path="/CharactersDetails/:id"
            element={<CharactersDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
