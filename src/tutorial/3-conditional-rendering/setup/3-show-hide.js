import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  // toggling sets up multiple event listeners (because we are showing and hiding the component),
  // even though we have an empty dependency array
  // that's why in return we add a function that is going to run once every time when the component is removed, cleanup function

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size : {size} px</h2>
    </div>
  );
};

export default ShowHide;
