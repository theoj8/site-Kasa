import logements from "../assets/data/logements.json"
import Card from "../components/Card"
import Banner from "../components/Banner"
import imgBanner from "../assets/img-banniere.jpg"
import "../scss/Accueil.scss"

function Accueil() {
    return (
        <div>
            <Banner cover={imgBanner} text="Chez vous, partout et ailleurs"/>
            <section className="cards">
                {logements.map((logement) => (
                    <Card key={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </section>
        </div>
    )
}

export default Accueil