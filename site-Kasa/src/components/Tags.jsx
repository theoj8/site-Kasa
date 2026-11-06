import "../scss/Tags.scss";

function Tags(props) {
  return (
    <ul className="tags">
      {props.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;
