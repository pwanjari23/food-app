import React, { useState } from 'react'
import ItemLists from './ItemLists';

const RestaurantRCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick=()=>{
    setShowIndex();
  }

  return (
    <div>
      <div className='w-6/12 m-auto mx-auto my-4 bg-gray-50 p-4 shadow-lg  cursor-pointer'>
        <div className='flex justify-between' onClick={handleClick}>
          <span className='text-lg font-bold'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemLists items={data.itemCards} />}
      </div>

    </div>
  )
}
export default RestaurantRCategory;