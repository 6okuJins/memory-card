import Score from './Score';

const Header = (props) => {
  
  return (
    <div className='Header'>
      <Score
      score={props.score}
      best={props.best}
      />
    </div>
  )
}
export default Header;