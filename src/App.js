import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Cursos from './pages/home/index'
import Login from './pages/login/index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cursos' element={<Cursos />} />
            </Routes>
        </Router>
    )
}

export default App;