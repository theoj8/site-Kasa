import { useState } from "react";
import flecheGauche from "../assets/Carousel/fleche-gauche.png";
import flecheDroite from "../assets/Carousel/fleche-droite.png";
import "../scss/Carousel.scss";

function Carousel(props) {
  const [index, setIndex] = useState(0);
  const total = props.pictures.length;

  return (
    <div className="carousel">
      <img src={props.pictures[index]} alt="" />
      {total > 1 && (
        <>
          <button
            className="btn-nav-carousel btn-left"
            type="button"
            aria-label="Image précédente"
            onClick={() => setIndex(index === 0 ? total - 1 : index - 1)}
          >
            <img src={flecheGauche} alt="" />
          </button>
          <button
            className="btn-nav-carousel btn-right"
            type="button"
            aria-label="Image suivante"
            onClick={() => setIndex(index === total - 1 ? 0 : index + 1)}
          >
            <img src={flecheDroite} alt="" />
          </button>
          <p>
            {index + 1}/{total}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;
