import React from 'react';
import Counter from "./components/Counter";
import Header from 'app1/Header'

// use same store
import CounterProvider from "host/store"

function App() {
  return (
    <CounterProvider>
      <h1>Hello, React with Webpack! Host App</h1> 
      <Header/>
      <Counter />
    </CounterProvider>
  );
}

export default App;

