import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Cursos from './pages/home/index'
import Login from './pages/login/index';
import Cadastro from './pages/register/index';
import Sala from './pages/sala_aula/index'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cursos' element={<Cursos />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/saladeaula' element={<Sala />} />
            </Routes>
        </Router>
    )
}

export default App;