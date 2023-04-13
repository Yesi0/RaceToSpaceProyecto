import React from 'react';
import TeAconsejamos from './components/TeAconsejamos';
//import Navegador from './components/Nav';
import RegistratePage from './pages/RegistratePage';
import Registrate from './components/Registrate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';

const  App = ()  => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminPage/>}>  </Route>
            <Route path='/FormularioRegistro' element={<RegistratePage/>}></Route>

        </Routes>
        
        </BrowserRouter>
    
        
       
       
    )

}

export default App;