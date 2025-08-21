import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData, facilityIcons, roomCommonData } from '../assets/assets';
import { useEffect } from 'react';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = React.useState(null);
    const [mainImage, setMainImage] = React.useState(null);
    useEffect(() => {
        const room=roomsDummyData.find((room) => room._id === id)
        room && setRoom(room);
        room && setMainImage(room.images[0]);
    },[]); 
  return room &&  (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span className='font-inter text-sm'>({room.roomType})</span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>
      {/* Room Rating */}
      <div className='flex items-center gap-2 mt-2'>
        <StarRating/>
        <p className='ml-2'>200+ Reviews</p>
      </div>
      {/* Room Address */}
      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>
      {/* Room Images */}
      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        {/* Main Image */}
        <div className='lg:w-1/2 w-full flex flex-col gap-4'>
          <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover'/>
        </div>
        {/* 2x2 Grid Thumbnails */}
        {room?.images.length > 1 && (
          <div className='hidden lg:grid grid-cols-2 grid-rows-2 gap-4 w-1/2'>
            {room.images.slice(0,4).map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                alt={`Room Image ${index + 1}`}
                className={`w-full h-40 rounded-xl shadow-lg object-cover cursor-pointer border-2 ${mainImage === image ? 'border-orange-500' : 'border-transparent'}`}
              />
            ))}
          </div>
        )}
        {/* For mobile, show thumbnails in a row below main image */}
        {room?.images.length > 1 && (
          <div className='flex lg:hidden flex-row gap-4 mt-2'>
            {room.images.slice(0,4).map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                alt={`Room Image ${index + 1}`}
                className={`w-24 h-16 rounded-xl shadow-lg object-cover cursor-pointer border-2 ${mainImage === image ? 'border-orange-500' : 'border-transparent'}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
          <div className='flex items-center gap-4 mt-3 mb-6'>
            {room.amenities.map((item,index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                <span className='text-xs'>{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Room Price */}
        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
      </div>
      {/* checkIn/checkOut Dates */}
      <form className='flex flex-col bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500 w-full'>
          <div className='flex-1 w-full'>
            <label htmlFor="checkInDate" className='font-medium mb-2 block'>Check-In</label>
            <input type="date" id="checkInDate" placeholder='Check-In' className='w-full rounded-md border border-gray-300 px-3 py-2 outline-none' required/>
          </div>
          <div className='w-px h-15 bg-gray-300/70 max-md:hidden' ></div>
          <div className='flex-1 w-full'>
            <label htmlFor="checkOutDate" className='font-medium mb-2 block'>Check-Out</label>
            <input type="date" id="checkOutDate" placeholder='Check-Out' className='w-full rounded-md border border-gray-300 px-3 py-2 outline-none' required/>
          </div>
          <div className='w-px h-15 bg-gray-300/70 max-md:hidden' ></div>
          <div className='flex-1 flex-col'>
            <label htmlFor="guest" className='font-medium mb-2 block'>Guests</label>
            <input type="number" id="guest" placeholder='0' min="0" className='w-full rounded-md border border-gray-300 px-3 py-2 outline-none' required/>
          </div>
          <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md w-full md:w-auto md:ml-4 max-md:mt-6 md:px-10 py-3 md:py-4 text-base cursor-pointer mt-6'>
            Check Availability
          </button>
        </div>
      </form>
      <div className='mt-25 space-y-4'>
      {roomCommonData.map((spec,index)=>(
        <div key={index} className='flex items-start gap-2'>
          <img src={spec.icon}alt={`${spec.title}-icon`} className='w-6.5'/>
          <div>
            <p className='text-base'>{spec.title}</p>
            <p className='text-gray-500'>{spec.description}</p>
          </div>
        </div>
      ))}
      </div>
      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Guest will be allocated on the ground floor according to their availability.You get a comfortable Two bedroom apartment has a true city feeling.The price is quoted is for two guests,at the guest slot please mark the number of guests to get the exact price for your groups.</p>
      </div>
      <div className='flex flex-col items-start gap-4'>
         <div className='flex gap-4'>
          <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:h-18 rounded-full' />
          <div>
            <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
            <div className='flex items-center mt-1'>
              <StarRating/>
              <p className='ml-2'>200+ Reviews</p>
            </div>
          </div>
         </div>
         <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
      </div>

    </div>
  )
}

export default RoomDetails
