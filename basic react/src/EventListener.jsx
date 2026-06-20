import { useState } from 'react';

function Button() {
  const [count, countFn] = useState(0);

  function BtnFn() {countFn(count + 1);}
  return(
    <>
    <button onClick={BtnFn}>counter : {count}</button>
    </>
  )
}



function Event() {
    

  return (
    <div >
      <h1>Hello world</h1>
      <Button />
      <Button />
    </div>
  );
}

export default Event;