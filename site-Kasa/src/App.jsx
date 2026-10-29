import {Routes, Route} from "react-router";
import Accueil from "./pages/Accueil"
import Erreur from "./pages/Erreur"
import APropos from "./pages/APropos"
import Layout from "./components/Layout"


function App() {
  return(<Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="*" element={<Erreur />} />
    </Route>
  </Routes>)
}

export default App