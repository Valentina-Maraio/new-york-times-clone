import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Selection from './components/Selection'
import Arts from './pages/Arts';
import Books from './pages/Books';
import Business from './pages/Business';
import Food from './pages/Food';
import Health from './pages/Health';
import Magazine from './pages/Magazine';
import NY from './pages/NY';
import Opinion from './pages/Opinion';
import Politics from './pages/Politics';
import RealEstate from './pages/RealEstate';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Style from './pages/Style';
import Tech from './pages/Tech';
import TMagazine from './pages/TMagazine';
import Travel from './pages/Travel'
import US from './pages/US';
import Theater from './pages/Theater';
import World from './pages/World';


function App() {
  return (
    <div className='App'>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/selection" element={<Selection />}></Route>
            <Route path="/arts" element={<Arts />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/business" element={<Business />}></Route>
            <Route path="/food" element={<Food />}></Route>
            <Route path="/health" element={<Health />}></Route>
            <Route path="/magazine" element={<Magazine />}></Route>
            <Route path="/ny" element={<NY />}></Route>
            <Route path="/opinion" element={<Opinion />}></Route>
            <Route path="/politics" element={<Politics />}></Route>
            <Route path="/realestate" element={<RealEstate />}></Route>
            <Route path="/science" element={<Science />}></Route>
            <Route path="/sports" element={<Sports />}></Route>
            <Route path="/style" element={<Style />}></Route>
            <Route path="/tech" element={<Tech />}></Route>
            <Route path="/tmagazine" element={<TMagazine />}></Route>
            <Route path="/travel" element={<Travel />}></Route>
            <Route path="/us" element={<US />}></Route>
            <Route path="/theater" element={<Theater />}></Route>
            <Route path="/world" element={<World />}></Route>
          </Routes>
        </Router>
      </NextUIProvider>
    </div>
  );
}

export default App;
