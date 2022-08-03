import './App.css';
import Home from './components/Home'
import { NextUIProvider } from '@nextui-org/react';
import { NewsProvider } from './context/NewsContext'
import { WorldProvider } from './context/WorldContext';
import World from './components/World';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <h1>The New York Times</h1>
          <NewsProvider>
            <Home />
          </NewsProvider>
          <WorldProvider>
            <World />
          </WorldProvider>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
