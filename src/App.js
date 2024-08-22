import React, { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
function App() {
  let heroData = [
    { text1: "Dive into", text2: "What You Love" },
    { text1: "Indulge", text2: "Your Passion" },
    { text1: "Give in to", text2: "Your Passion" },
  ]
  const [heroCont, setHeroCont] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setHeroCont((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000);
  },[])
  clearInterval(setHeroCont)
  return (
    <div>
      <Background playStatus={playStatus} heroCont={heroCont}></Background>
      <Navbar></Navbar>
      <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCont]}
        heroCont={heroCont}
        setHeroCont={setHeroCont}
      ></Hero>
    </div>
  );
}

export default App;
