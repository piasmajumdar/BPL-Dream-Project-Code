import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Homepage/banner/Banner'
import Players from './Components/Homepage/banner/players/Players';
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';


const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playerPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    
    {/* React toastify */}
      <ToastContainer />
    </>
  )
}

export default App
