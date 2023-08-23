import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemLists from './ItemLists';
import { clearCart } from './cartSlice';


const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className='m-32 p-32 text-center '>
            <h1 className='text-3xl font-bold'>Cart🛒</h1>
            <div>
                {cartItems.length === 0 && <h1 className='font-bold text-xl p-4 '>Your cart is empty!!!! Please add items in your cart.....</h1>}
                {cartItems.length > 0 && <button className='p-2 m-2 bg-black text-white rounded-lg justify-end' onClick={handleClearCart}>
                    Clear Cart
                </button>}
            </div>
            <div className='w-6/12 m-auto border-gray-200 shadow-lg '>
                <ItemLists items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;