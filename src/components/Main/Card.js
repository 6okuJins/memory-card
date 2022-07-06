const Card = (props) => {
  return (
    <button className="Card" id={props.name} onClick={props.setClicked}>
      <img src={require(`/src/assets/${props.name}.png`)} alt={props.name} />
      <div>{props.name}</div>
    </button>
  );
}
export default Card;