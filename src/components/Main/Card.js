const Card = (props) => {
  return (
    <div className="Card">
      <img src={require(`/src/assets/${props.name}.png`)} alt={props.name} />
      <div>{props.name}</div>
    </div>
  );
}
export default Card;