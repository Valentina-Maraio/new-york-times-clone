import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';

function App() {
  return (
    <div class="container">
      <NextUIProvider>
        <Home />
      </NextUIProvider>
    </div>
  );
}

export default App;
