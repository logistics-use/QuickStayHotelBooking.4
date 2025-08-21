import React,{useState} from 'react'
import { assets, facilityIcons, roomsDummyData, } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const CheckBox=({label,selected=false,onchange=()=>{}})=>{
    return (
        <label className='=flex gap-3 items-center cursor-pointer'>
          <input type='checkbox' checked={selected} onChange={(e)=>onChange(e.target.checked ,label)}/>
          <span className='font-light select-none'>{label}</span>
        </label>
    )
}
const RadioButton =({label,selected=false,onchange=()=>{}})=>{
    return (
        <label className='=flex gap-3 items-center cursor-pointer'>
          <input type='radio' name='sortOption' checked={selected} onChange={(e)=>onChange(label)}/>
          <span className='font-light select-none'>{label}</span>
        </label>
    )
}
const AllRooms = () => {
    const navigate = useNavigate()
    const [openFilters, setOpenFilters] =useState(false)
    const roomtypes=['Single Bed', 'Double Bed', 'Luxury Suite','Family Suite'];
    const priceranges=['0 to 500','500 to 1000', '1000 to 2000', '2000+'];
    const sortOptions=['Price Low to High', 'Price: High to Low', 'Newest First'];

  return (
    <div className='flex flex-col lg:flex-row-reverse items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Mobile Filter Button Only */}
      <div className='w-full flex justify-end lg:hidden mb-2'>
        <button
          className='py-2 px-4 bg-white border border-gray-300 rounded-xl shadow text-gray-800 font-medium'
          onClick={() => setOpenFilters(!openFilters)}
        >
          {openFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      {/* Filters Panel */}
      {(openFilters || window.innerWidth >= 1024) && (
        <div className='bg-white w-full lg:w-80 border border-gray-300 text-gray-600 mb-4 lg:mb-0 mt-4 lg:mt-8 rounded-xl shadow-lg lg:mr-4'>
          <div className='flex items-center justify-between px-5 py-2.5 border-b border-gray-300'>
            <p className='text-base font-medium text-gray-800'>Filters</p>
            <div className='text-xs cursor-pointer'>
              <span className='hidden lg:block'>Clear</span>
            </div>
          </div>
          <div>
            <div className='px-5 pt-4 border-b border-gray-200'>
              <p className='font-medium text-gray-800 pb-1'>Popular Filters</p>
              <div className="flex flex-col gap-1 pb-2">
                <CheckBox label="All Types" />
                {roomtypes.map((room,index)=>(
                  <CheckBox key={index} label={room}/>
                ))}
              </div>
            </div>
            <div className='px-5 pt-4 border-b border-gray-200'>
              <p className='font-medium text-gray-800 pb-1'>Price Range</p>
              <div className="flex flex-col gap-1 pb-2">
                <CheckBox label="All Prices" />
                {priceranges.map((range,index)=>(
                  <CheckBox key={index} label={`$ ${range}`}/>
                ))}
              </div>
            </div>
            <div className='px-5 pt-4'>
              <p className='font-medium text-gray-800 pb-1'>Sort By</p>
              <div className="flex flex-col gap-1 pb-2">
                <CheckBox label="All" />
                {sortOptions.map((option,index)=>(
                  <CheckBox key={index} label={option}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Rooms List */}
      <div className='flex-1'>
        <div className='flex flex-col items-start top-left'>
            <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
        </div>
        {roomsDummyData.map((room)=>(
            <div  key={room._id} className='flex flex-col md:flex-row items-start  py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                <img onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}} src={room.images[0]} alt=' Hotel-image' title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                <div  className='md:w-1/2 flex flex-col gap-2'>
                    <p className='text-gray-500'>{room.hotel.city}</p>
                    <p onClick={()=>{navigate(`/rooms/${room._id}`);scrollTo(0,0)}} 
                    className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
                <div className='flex items-center'>
                    <StarRating/>
                    <p className='ml-2'>200+ reviews</p>
                </div>
                <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                  <img src={assets.locationIcon} alt="location icon" />
                  <span className='ml-2 text-gray-500'>{room.hotel.address}</span>
                </div>
                {/* Amenities */}
                <div className='flex flex-wrap gap-2 mt-3 items-center mb-6'>
                  {room.amenities.map((item, index)=>(
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                      <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                      <p className='text-xs'>{item}</p>
                    </div>
                  ))}
                </div>
                {/* Price*/}
                <p className='text-xl font-medium text-gray-800'>${room.pricePerNight}/night</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AllRooms
