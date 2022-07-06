import { useState } from 'react';

const Score = (props) => {
  

  return (
    <div className='score'>
      Score {props.score} | Best {props.best}
    </div>
  );
}
export default Score;