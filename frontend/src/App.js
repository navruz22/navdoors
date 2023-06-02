import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { sellerLinks, sellerRoutes } from './routes';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [type, setType] = useState(2)

  const getTypes = () => {
    if (type === 2) {
      return sellerRoutes.map((route) =>
        <Route path={route.path} element={route.element} />
      )
    }
  }

  const getLinks = () => {
    if (type === 2) {
      return sellerLinks
    }
  }

  return (
    <div className='h-screen'>
      <Navbar links={getLinks()} />
      <div className='bg-gray-100 h-full'>
        <Routes>
          {getTypes()}
        </Routes>
      </div>
    </div>
  );
}

export default App;
