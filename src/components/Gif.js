import "./Gif.css";

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="gif">
      <h2>{title}</h2>

      <div className="gifMedia">
        <img src={url} alt={title} />
      </div>
    </a>
  );
};

export default Gif;
