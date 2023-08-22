import React, { createContext, useContext } from 'react';

const CounterContext = createContext(0);

const CounterProvider = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider  value={{count,setCount}} >
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCount =()=>{
  return useContext(CounterContext)
}

export default CounterProvider;