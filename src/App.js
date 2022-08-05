import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Selection from './components/Selection'
import World from './components/World';

function App() {
  return (
    <div className='App'>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/selection" element={<Selection />}></Route>
            <Route path="/world" element={<World />}></Route>
          </Routes>
        </Router>
      </NextUIProvider>
    </div>
  );
}

export default App;
