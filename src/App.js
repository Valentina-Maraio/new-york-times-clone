import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
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
import Travel from './pages/Travel'
import US from './pages/US';
import Theater from './pages/Theater';
import World from './pages/World';
import { ArtsProvider } from './context/ArtsContext';
import { BooksProvider } from './context/BooksContext';
import { BusinessProvider } from './context/BusinessContext';
import { FoodProvider } from './context/FoodContext';
import { HealthProvider } from './context/HealthContext';
import { MagazineProvider } from './context/MagazineContext';
import { NYRegionProvider } from './context/NYRegionContext';
import { OpinionProvider } from './context/OpinionContext';
import { PoliticsProvider } from './context/PoliticsContext';
import { RealEstateProvider } from './context/RealEstateContext';
import { ScienceProvider } from './context/ScienceContext';
import { SportsProvider } from './context/SportsContext';
import { StyleProvider } from './context/StyleContext';
import { TechnologyProvider } from './context/TechnologyContext';
import { TheaterProvider } from './context/TheaterContext';
import { TravelProvider } from './context/TravelContext';
import { USProvider } from './context/USContext';
import { WorldProvider} from './context/WorldContext';


function App() {
  return (
    <div className='App'>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/arts" element={<ArtsProvider><Arts /></ArtsProvider>}></Route>
            <Route path="/books" element={<BooksProvider><Books /></BooksProvider>}></Route>
            <Route path="/business" element={<BusinessProvider><Business /></BusinessProvider>}></Route>
            <Route path="/food" element={<FoodProvider><Food /></FoodProvider>}></Route>
            <Route path="/health" element={<HealthProvider><Health /></HealthProvider>}></Route>
            <Route path="/magazine" element={<MagazineProvider><Magazine /></MagazineProvider>}></Route>
            <Route path="/ny" element={<NYRegionProvider><NY /></NYRegionProvider>}></Route>
            <Route path="/opinion" element={<OpinionProvider><Opinion /></OpinionProvider>}></Route>
            <Route path="/politics" element={<PoliticsProvider><Politics /></PoliticsProvider>}></Route>
            <Route path="/realestate" element={<RealEstateProvider><RealEstate /></RealEstateProvider>}></Route>
            <Route path="/science" element={<ScienceProvider><Science /></ScienceProvider>}></Route>
            <Route path="/sports" element={<SportsProvider><Sports /></SportsProvider>}></Route>
            <Route path="/style" element={<StyleProvider><Style /></StyleProvider>}></Route>
            <Route path="/tech" element={<TechnologyProvider><Tech /></TechnologyProvider>}></Route>
            <Route path="/theater" element={<TheaterProvider><Theater /></TheaterProvider>}></Route>
            <Route path="/travel" element={<TravelProvider><Travel /></TravelProvider>}></Route>
            <Route path="/us" element={<USProvider><US /></USProvider>}></Route>
            <Route path="/world" element={<WorldProvider><World /></WorldProvider>}></Route>
          </Routes>
        </Router>
      </NextUIProvider>
    </div>
  );
}

export default App;
