import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Fpage from './components/Fpage';
import Spage from './components/Spage';
import Tpage from './components/Tpage';
import Frpage from './components/Frpage';
import Ffpage from './components/Ffpage';
import Fs from './components/Fs';
import F7 from './components/F7';
import F8 from './components/F8';
import F9 from './components/F9';

const App = () => {
  return (
    <>
  <Navbar/>
  <Fpage/>
  <Spage/>
  <Tpage/>
  <Frpage/>
  <Ffpage/>
  <Fs/>
  <F7/>
  <F8/>
  <F9/>
    </>
  )
}

export default App
