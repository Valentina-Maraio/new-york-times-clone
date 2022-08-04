import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import Auto from './components/Auto';
import { NewsProvider } from './context/NewsContext'
import { WorldProvider } from './context/WorldContext';
import News from './components/News';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <h1>The New York Times</h1>
          <NewsProvider>
            <Auto />
          </NewsProvider>
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
          </WorldProvider> 
          <WorldProvider>
            <News />
          </WorldProvider>
          
          */