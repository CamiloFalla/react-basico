import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const Home = lazy(() => import('./components/Home/Home'));
const Begin = lazy(() => import('./components/Begin'));
const Entry = lazy(() => import('./components/Entry/Entry'));

// Comentario corregido sobre la inclusión del archivo Startbutton
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <header className="App-header">
            
            <Routes>
              <Route path="/" element={<Begin />} />
              <Route path="/Entry" element={<Entry />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </header>
      
      
        </div> 
      </Suspense>
        
    </Router>
    
  );
}

export default App;
