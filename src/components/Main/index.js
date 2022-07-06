import Card from './Card';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Main = (props) => {
  const names = ['Agumon', 'Gabumon', 'Biyomon', 'Gatomon', 'Gomamon', 'Palmon', 'Patamon', 'Tentomon' ];
  return (
    <div className='Main'>
      {shuffle(names).map((name) => {
        return <Card name={name} setClicked={props.setClicked} />
      })}
    </div>
  );
}
export default Main;