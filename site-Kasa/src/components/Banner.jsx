import "../scss/Banner.scss";

function Banner(props) {
  return (
    <div className={props.text ? "banner sombre" : "banner"}>
      <img src={props.cover} alt="" />
      {props.text && <h1>{props.text}</h1>}
    </div>
  );
}

export default Banner;
