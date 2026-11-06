import "../scss/Collapse.scss";
import { useState } from "react";
import fleche from "../assets/fleche-collapse.png";

function Collapse(props) {
  const [ouvert, setOuvert] = useState(false);
  return (
    <div className="collapse">
      <h2>
        <button type="button" onClick={() => setOuvert(!ouvert)}>
          {props.title}{" "}
          <img
            src={fleche}
            className={ouvert ? "fleche open" : "fleche"}
            alt=""
          />
        </button>
      </h2>
      {ouvert && <div>{props.children}</div>}
    </div>
  );
}

export default Collapse;
