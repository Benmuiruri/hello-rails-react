/*eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

function Greeting() {
  // @ts-ignore
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    if (!greeting.length) dispatch(getGreeting());
  }, []);
  
  return (
    <>
      <div className="container">
        <h1>Greetings from around the world</h1>
        <p>
          {greeting.length
            ? greeting
            : 'Loading a greeting from around the world...'}
        </p>
      </div>
    </>
  );
}

export default Greeting
