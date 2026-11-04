import error from "../assets/error.png"
import {Link} from "react-router"
import "../scss/Erreur.scss"

function Erreur() {
    return <div className="main-error">
        <img src={error} alt="404" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link to= "/" className="nav-error">Retourner à la page d'accueil</Link>
    </div>
}

export default Erreur