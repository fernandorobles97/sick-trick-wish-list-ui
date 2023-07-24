import getTricks from '../../apiCalls';
import TricksContainer from '../TricksContainer/TricksContainer';
import TrickForm from '../TrickForm/TrickForm'
import './App.css';
import React, { useEffect, useState } from 'react';



function App() {
  const [trickData, setTrickData] = useState([])

  const addTrick = (newTrick) => {
    setTrickData([...trickData, newTrick])
  }

  useEffect(() => {
    getTricks()
    .then(data => setTrickData(data))
    .catch(err => alert(err))
  }, [])


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <TrickForm addTrick={addTrick}  />
      <TricksContainer trickData={trickData}  />
    </div>
  );
}

export default App; 
