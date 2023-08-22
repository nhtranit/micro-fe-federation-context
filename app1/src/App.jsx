import React from 'react';
import StoreProvider from 'host/store';

function App() {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  );
}

export default App;