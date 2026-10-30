import logements from "../assets/data/logements.json"
import Card from "../components/Card"
import "../scss/Accueil.scss"

function Accueil() {
    return (
        <div>
            <h1>Accueil</h1>
            <section className="cards">
                {logements.map((logement) => (
                    <Card key={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </section>
        </div>
    )
}

export default Accueil