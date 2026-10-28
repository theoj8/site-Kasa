import {Routes, Route} from "react-router";
import Accueil from "./pages/Accueil"
import Erreur from "./pages/Erreur"
import Contact from "./pages/APropos"


function App() {
  return(<Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="*" element={<Erreur />} />
    <Route path="/a-propos" element={<Contact />} />
  </Routes>)
}

export default App