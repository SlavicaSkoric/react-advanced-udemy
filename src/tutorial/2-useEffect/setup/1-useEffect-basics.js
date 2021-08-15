import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  // every time we change sth about this value, we will trigger useEffect()
  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
