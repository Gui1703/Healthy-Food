import "./styles.scss";

function CardBlog(props) {
  return (
    <div className="container-card-blog">
      <img src={props.image} alt={props.description} />
      <div className="bottom">
        <p className="description-card-blog">{props.description}</p>
        <div className="profile">
          <img src={props.profile} alt={props.name} />
          <div>{props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
