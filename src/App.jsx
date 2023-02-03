import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import Home from './pages/Home'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </Router>
    )
}

export default App