import {Link} from "react-router"
import logoHeader from "../assets/logo-PC.png"
import "../scss/Header.scss"

function Header() {
    return(<header className="header">
            <img src={logoHeader} alt="logo Kasa" />
            <nav>
                <Link to="/" className="btn-nav btn-nav-active">Accueil</Link>
                <Link to="/a-propos" className="btn-nav">A propos</Link>
            </nav>
        </header>
    )
}

export default Header