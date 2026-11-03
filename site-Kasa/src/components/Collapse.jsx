import "../scss/Collapse.scss"
import { useState } from "react"

function Collapse(props) {
    const [ouvert, setOuvert] = useState(false)
    return(
        <div className="collapse">
            <h2>
                <button type="button" onClick={() => setOuvert(!ouvert)}>{props.title}</button>
            </h2>
            {ouvert && <p>{props.content}</p>}
        </div>
    )
}

export default Collapse