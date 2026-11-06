import etoilePleine from "../assets/Rating/etoile-pleine.png";
import etoileVide from "../assets/Rating/etoile-vide.png";

function Rating(props) {
  const note = props.rating;
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {ratings.map((rating) => (
        <img
          key={rating}
          src={rating <= note ? etoilePleine : etoileVide}
          alt=""
        />
      ))}
    </div>
  );
}

export default Rating;
