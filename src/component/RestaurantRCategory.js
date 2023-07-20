import React from 'react'
import ItemLists from './ItemLists';

const RestaurantRCategory = ({data}) => {
    console.log(data)
  return (
    <div>
        <div className='w-6/12 m-auto mx-auto my-4 bg-gray-50 p-4 shadow-lg  cursor-pointer'>
            <div className='flex justify-between'><span className='text-lg font-bold'>{data.title} ({data.itemCards.length})</span>
            <span>^</span></div>
            
            <ItemLists items={data.itemCards}/>
        </div>
       
    </div>
  )
}

export default RestaurantRCategory;