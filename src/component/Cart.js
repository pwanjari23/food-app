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
        <div className='m-4 p-4 text-center '>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div>
                <button className='p-2 m-2 bg-black text-white rounded-lg justify-end' onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1 className='font-bold text-xl p-4'>Your cart is empty!!!!Please add items in your cart.....</h1>}
            </div>
            <div className='w-6/12 m-auto border-gray-200 shadow-lg '>
                <ItemLists items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;