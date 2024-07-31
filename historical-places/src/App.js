import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Taj Mahal</h1>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Taj_Mahal_2012.jpg/800px-Taj_Mahal_2012.jpg?20120619140610" 
          alt="Taj Mahal" 
          style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
        />
        <p>
          The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan (reigned 1628–1658) to house the tomb of his favorite wife, Mumtaz Mahal.
        </p>
      </header>
    </div>
  );
}

export default App;
