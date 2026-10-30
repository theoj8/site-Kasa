import "../scss/Card.scss"


function Card(props) {
    return(
    <article className="card-logement">
        <img src={props.cover} alt={props.title} />
        <h2>{props.title}</h2>
    </article>
    )
}

export default Card