import { useState } from 'react';

const Score = (props) => {
  

  return (
    <div className='score'>
      {props.score} | {props.best}
    </div>
  );
}
export default Score;