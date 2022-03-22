import "./styles.scss";

function CardFood(props) {
  return (
    <div className="container-card">
      <img src={props.image} alt={props.description} />
      <div className="right">
        <p className="description">{props.description}</p>
        <button 
        type="button">See Recipe</button>
      </div>
    </div>
  );
}

export default CardFood;
