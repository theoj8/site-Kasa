import { useState, useEffect } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import imgBanner from "../assets/Bannière/img-banniere.jpg";
import "../scss/Accueil.scss";
import { Link } from "react-router";

function Accueil() {
  const [logements, setLogements] = useState([]);
  const [erreur, setErreur] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur du serveur");
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch(() => setErreur(true));
  }, []);
  return (
    <div>
      <Banner cover={imgBanner} text="Chez vous, partout et ailleurs" />
      {erreur ? (
        <p>
          Impossible de charger les logements. Veuillez réessayer plus tard.
        </p>
      ) : (
        <section className="cards">
          {logements.map((logement) => (
            <Link key={logement.id} to={`/logement/${logement.id}`}>
              <Card title={logement.title} cover={logement.cover} />
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}

export default Accueil;
