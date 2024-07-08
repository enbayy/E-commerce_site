import React from 'react';
import AppRouter from './routing/Router';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter />
    </div>
  );
}

export default App;
