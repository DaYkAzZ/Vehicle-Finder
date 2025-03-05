import { useState } from "react";
import { useEffect } from "react";
import { Finder } from "./components/Finder" 
import { CarCard } from "./components/CarCard";

function App() {
  const [cars, setCars] = useState([]);
  return (
    <div className="App bg-gray-900 h-screen text-white flex justify-center items-center flex-col p-48">
      <h1 className="text-5xl p-10">Trouver une voiture</h1>
      <div className="text-black">
        <Finder />
      </div>
    </div>
  )
}

export default App