import React from 'react'
import './App.css';
import Quotebox from './componentes/quotebox.js';

function App() {
  return (
        <div className="container">
              <div className="card">
                   <div className="card-body">
                         <Quotebox />
                   </div>
              </div>
        </div>
  );
}

export default App;
