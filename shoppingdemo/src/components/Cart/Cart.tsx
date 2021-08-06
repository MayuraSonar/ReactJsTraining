import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { RootState } from '../../store/rootReducer';
import { batchRemove } from './cartSlice';
import {Notification} from '../Notification/Notification';
import { CartItem } from './CartItem';

export const Cart:React.FC<{}>=()=>{
    const cartItems:CartItem[]=useSelector((state:RootState)=>state.cart);
  const dispatch=useDispatch();
const navigate=useNavigate();
const [numPreviousItems,setNumPreviousITems]=useState(cartItems.length);
const [showNotification,setShowNotification]=useState(false);
useEffect(()=>{
    if(cartItems.length<numPreviousItems){
        setShowNotification(true);
        setTimeout(()=>setShowNotification(false),400);
        setNumPreviousITems(cartItems.length);
    }

    else
    {
        if(cartItems.length>numPreviousItems)
        {
            setNumPreviousITems(cartItems.length);
        }
    }
},[cartItems.length,numPreviousItems]);

const grandTotal=cartItems.length===0 ? 0:
cartItems.map(item=>item.includedInSum ? item.price*item.quantity : 0).reduce((itemPrice,accPrice)=>accPrice+itemPrice);
const checkoutHandler=()=>{
    const checkoutShoesId=cartItems.filter(item=>item.includedInSum).map
     (item=>item.id);
     dispatch(batchRemove({ids:checkoutShoesId}));
     navigate('/cart/checkout');
    // )
}
    return(
 
        <div className={styles.container}>
            <h2 className={styles.heading}>Shopping Cart</h2>
            <div className={styles.subcontainer}>
                <p className={styles.numItems}>{`You have ${cartItems.length} items in your cart`} </p>
                {cartItems.map(item=> <CartItem item={item} key={item.id}/>)}
               
                <p className={styles.grandTotal}>
                    <span>Grand Total</span>
                    <span> {`$${grandTotal}`}</span>
                </p>
                <div className={styles.checkoutBtnWrapper}>
                    <button 
                    className={styles.checkout}
                    disabled={grandTotal<=0}
                    onClick={()=> checkoutHandler()}
                    title ="Proceed to Checkout">
                        CheckOut
                    </button>
           </div>
           </div>
          
            
            {showNotification ? <Notification type="REMOVE"/>
            :null}       
        </div>
    )
}


