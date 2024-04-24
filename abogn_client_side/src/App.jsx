import React from 'react'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Overview from './components/Overview/Overview'
import Products from './components/Products/Products'
import Settings from './components/Settings/Settings'
import Orders from './components/Orders/Orders'
import Reports from './components/Reports/Reports'
import Makel from './components/Makel/Makel'
import Scame from './components/Scame/Scame'
import Hyundai from './components/Hyundai/Hyundai'

const App = () => {
  return (
    <div className=' h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/adminlogin' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='' element={<Overview />}></Route>
            <Route path='/dashboard/products' element={<Products />}></Route>
            <Route path='/dashboard/orders' element={<Orders />}></Route>
            <Route path='/dashboard/reports' element={<Reports />}></Route>
            <Route path='/dashboard/settings' element={<Settings />}></Route>
            <Route path='/dashboard/makel' element={<Makel />}></Route>
            <Route path='/dashboard/hyundai' element={<Hyundai />}></Route>
            <Route path='/dashboard/scame' element={<Scame />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App