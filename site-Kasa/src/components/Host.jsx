import "../scss/Host.scss";

function Host(props) {
  return (
    <div className="host">
      <p>{props.name}</p>
      <img src={props.picture} alt="" />
    </div>
  );
}

export default Host;
