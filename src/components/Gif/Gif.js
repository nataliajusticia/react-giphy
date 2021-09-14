import styles from "./gif.module.css";

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className={styles.gif}>
      <h3>{title}</h3>

      <div className={styles.gifMedia}>
        <img src={url} alt={title} />
      </div>
    </a>
  );
};

export default Gif;
