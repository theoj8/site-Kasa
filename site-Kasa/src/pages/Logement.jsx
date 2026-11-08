import { useParams, Navigate } from "react-router";
import { useState, useEffect } from "react";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import "../scss/Logement.scss";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [introuvable, setIntrouvable] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur du serveur");
        }
        return response.json();
      })
      .then((data) => setLogement(data))
      .catch(() => setIntrouvable(true));
  }, [id]);
  if (introuvable) {
    return <Navigate to="/404" replace />;
  }
  if (!logement) {
    return <p>Chargement de la page...</p>;
  }
  return (
    <>
      <Carousel key={logement.id} pictures={logement.pictures} />
      <section className="header-logement">
        <div className="info-logement">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="host-logement">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </section>
      <div className="collapses-logement">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}

export default Logement;
