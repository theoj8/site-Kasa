import {NavLink} from "react-router"
import logoHeader from "../assets/Logo/logo-PC.png"
import "../scss/Header.scss"

function Header() {
    return(
        <header className="header">
            <img src={logoHeader} alt="logo Kasa" />
            <nav>
                <NavLink to="/" className="btn-nav">Accueil</NavLink>
                <NavLink to="/a-propos" className="btn-nav" end>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header