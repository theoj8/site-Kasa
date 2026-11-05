import { useParams, Navigate } from "react-router";
import { useState, useEffect } from "react";

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
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt="" />
    </div>
  );
}

export default Logement;
