import React from 'react'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/HotelOwner/Layout'
import Dashboard from './pages/HotelOwner/Dashboard'
import ListRoom from './pages/HotelOwner/ListRoom'
import AddRoom from './pages/HotelOwner/AddRoom'    

const App = () => {
    const isOwnerpath=useLocation().pathname.includes('owner')
  return (
    <div>
        {!isOwnerpath && <Navbar />}
        {false && <HotelReg />}
        <div className='min-h-[70vh]'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rooms' element={<AllRooms />} />
                <Route path='/rooms/:id' element={<RoomDetails />} />
                <Route path='/my-bookings' element={<MyBookings />} />
                <Route path='/owner' element={<Layout />} >
                    <Route index element={<Dashboard />} />
                    <Route path='list-rooms' element={<ListRoom />} />
                    <Route path='add-room' element={<AddRoom />} />
                </Route>
            </Routes>
        </div>
    <Footer/>
    </div>
  )
}

export default App
