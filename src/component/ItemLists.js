import { useDispatch } from 'react-redux'
import {addItem} from "./cartSlice";

const ItemLists = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (items) => {
        dispatch(addItem(items))

    }
    return (
        <div className=''>
            {items.map(items => (
                <div key={items.card.info.id} className='p-2 m-2 border border-gray-200 border-b-2 text-left'>
                    <div className='flex justify-between'>
                        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + items.card.info.imageId} className="w-24" />
                        <button className='font-semibold rounded-lg w-12' onClick={() => handleAddItem(items)}>
                            Add +
                        </button>
                    </div>
                    <div className='w-9/12'>
                        <div className='py -2'>
                            <span className='font-semibold'>{items.card.info.name}</span>
                            <span className='font-semibold'> ₹{items.card.info.price / 100}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemLists;