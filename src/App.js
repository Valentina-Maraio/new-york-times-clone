import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <Home />
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