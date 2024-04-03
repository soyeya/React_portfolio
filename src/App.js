import React from 'react';
import './assets/css/main.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={'/'} element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
