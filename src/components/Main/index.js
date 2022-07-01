import Card from './Card';
const Main = (props) => {
  const names = ['agumon']
  return (
    <div className='Main'>
      <button onClick={props.incScore}>Incremement score</button>
      <button onClick={props.incBest}>Incremement best</button>
      {names.map((name) => {
        return <Card name={name} />
      })}
    </div>
  );
}
export default Main;