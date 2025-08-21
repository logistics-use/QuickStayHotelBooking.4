import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBookings = () => {
    const [bookings, setBookings] =useState(userBookingsDummyData); // Assuming bookings will be fetched or passed as props
  return (
    <div className='py-28 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title title='My Bookings' subtitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.' align='left' />
      <div>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-500 font-medium text-base py-3 '>
            <div className='w-1/3'>Hotels</div>
            <div className='w-1/3'>Date & Timings</div>
            <div className='w-1/3'>Payment</div>
        </div>
        {bookings.map((booking)=>(
            <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 py-6 first:border-t'>
                {/*------Hotel Details------*/}
                <div className='flex flex-row gap-6 items-start'>
                  <img src={booking.room.images[0]} alt='hotel-img' className='w-44 h-32 rounded shadow object-cover'/>
                  <div className='flex flex-col justify-between h-full flex-1'>
                    <div className='flex items-baseline gap-2'>
                      <span className='font-playfair text-2xl'>{booking.hotel.name}</span>
                      <span className='font-inter text-base'>({booking.room.roomType})</span>
                    </div>
                    <div className='flex flex-col mt-2 text-gray-500 text-base'>
                      <div className='flex items-center gap-1'>
                        <img src={assets.locationIcon} alt="location-icon" />
                        <span>{booking.hotel.address}</span>
                      </div>
                      <div className='flex items-center gap-1 mt-1'>
                        <img src={assets.guestsIcon} alt="guests-icon" />
                        <span>Guests: {booking.guests}</span>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <span className='font-medium text-lg'>Total :</span>
                      <span className='font-playfair text-2xl ml-2'>${booking.totalPrice}</span>
                    </div>
                  </div>
                </div>
                {/*------Date & Timings------*/}
                <div className='flex flex-col md:flex-row justify-center md:items-start gap-2 md:gap-12 mt-3'>
                  <div>
                    <span className='font-medium'>Check-In:</span>
                    <span className='block text-gray-500 text-sm'>{new Date(booking.checkInDate).toDateString()}</span>
                  </div>
                  <div>
                    <span className='font-medium'>Check-Out:</span>
                    <span className='block text-gray-500 text-sm'>{new Date(booking.checkOutDate).toDateString()}</span>
                  </div>
                </div>
                
                {/*------Payment Details------*/}
                <div className='flex flex-col items-center justify-center pt-3'>
                  <div className='flex items-center gap-2'>
                  <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}>
                  </div>
                  <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>{booking.isPaid ? "Paid" : "UnPaid"}</p>
                  </div>
                  {!booking.isPaid &&(
                    <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>Pay Now</button>
                  )}
                </div>

            </div>
        ))}
      </div>
    </div>


  )
}

export default MyBookings
