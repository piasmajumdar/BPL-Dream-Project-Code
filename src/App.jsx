import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Homepage/banner/Banner'
import Players from './Components/Homepage/banner/players/Players';
import Navbar from './Components/Navbar/Navbar'


const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {

  const playerPromise = fetchPlayer();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
