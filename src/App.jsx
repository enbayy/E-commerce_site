
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';
import Navbar from './components/navbar';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
       <Navbar />
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
