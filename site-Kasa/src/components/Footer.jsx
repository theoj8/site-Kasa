import logoFooter from "../assets/logo-PC-NB.png"
import "../scss/Footer.scss"

function Footer() {
    return(
        <footer className="footer">
            <img src={logoFooter} alt="logo Kasa" />
            <p>© 2026 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer