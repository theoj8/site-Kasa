import {Link} from "react-router"

function Header() {
    return(<header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header