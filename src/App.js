import React from 'react';
import Layout from './components/pages/Layout';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginReg from './components/pages/auth/LoginReg';
import Welcome from './components/pages/auth/Welcome';
import UpdateDetails from './components/pages/auth/UpdateDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='loginreg' element={<LoginReg />} />
            <Route path="welcome" element={<Welcome/>} ></Route>
            <Route path='update' element={<UpdateDetails/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
