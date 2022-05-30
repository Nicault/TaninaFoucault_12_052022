import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './style.css'

import Header from './components/Header'
import Home from './pages/Home'
import SideBar from './components/SideBar'
import Error from './components/Error'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/user/:userId" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
