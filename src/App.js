import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import Auto from './components/Auto';
import { NewsProvider } from './context/NewsContext'
import Show from './components/Show';
import { WorldProvider } from './context/WorldContext';
//import { WorldProvider } from './context/WorldContext';
//import World from './components/World';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <h1>The New York Times</h1>
          <NewsProvider>
            <Auto />
          </NewsProvider>
          <WorldProvider>
            <Show />
          </WorldProvider>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;

/*
          <NewsProvider>
            <Home />
          </NewsProvider>
          <WorldProvider>
            <World />
          </WorldProvider> */