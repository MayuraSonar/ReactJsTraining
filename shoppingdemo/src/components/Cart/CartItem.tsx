import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from './CartItem.module.css'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { decrementQuantity, incrementQuantity, removeFromCart, toggleInclude } from './cartSlice';
interface Props{
    item:CartItem
}

export const CartItem:React.FC<Props>=({
    item:{id,name,price,category,image,quantity,includedInSum}
})=>{
    const dispatch=useDispatch();
    const navigateTo=useNavigate();
    const categoryId=category==="Men's Shoes" ? 'men': 
    category=="Women's shoes" ? 'women': 'kids';
        
    

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.checkAndImg}>
                    <input type="checkbox"
                    checked={includedInSum}
                    onChange={()=> dispatch (toggleInclude(({id})))}/>
                    <img src={image}
                      alt='shoe'
                      title={name}
                      onClick={()=>navigateTo(`/${categoryId}/${id}`)}></img>  
  </div>
  </div>
  <div className={styles.right}>
      <div className={styles.nameAndCategory}
     onClick={()=>navigateTo(`/${categoryId}/${id}`)}/>
     <p>{name}</p>
     <p>{category}</p>


  </div>

  <div className={styles.quantity}>
      <p>Quantity</p>
      <div>
          <button 
          onClick={()=>dispatch(decrementQuantity({id}))}
          >Decrement</button>
          <span>{quantity}</span>

          <button 
          onClick={()=>dispatch(incrementQuantity({id}))}
          >Increment</button>
          <span>{quantity}</span>
      </div>
  </div>
  <div className={styles.delete}>
      <button
      onClick={(()=> dispatch(removeFromCart({id})) )}
      >
          <RiDeleteBin2Fill></RiDeleteBin2Fill>
      </button>

  </div>
  <div className={styles.price}>
      <p>{`$${quantity*price}`}</p>
   </div>
  
  </div>

  )

}
          
        