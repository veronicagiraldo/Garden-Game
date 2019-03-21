import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import GameProvider from './GameProvider';
import{BrowserRouter} from 'react-router-dom';

ReactDom.render(
<BrowserRouter>
  <GameProvider>
    <App />
  </GameProvider>
</BrowserRouter>
, document.getElementById('root'))