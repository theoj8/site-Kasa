import {useParams} from "react-router"

function Logement () {
    const {id} = useParams()
    return (
        <p>{id}</p>
    )
}

export default Logement