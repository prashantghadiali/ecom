// AddToCartButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cart/action';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';


const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handleButtonClick = () => {
    if (isItemInCart) {
      dispatch(removeFromCart(item.id));
      dispatch(decreaseQuantity(item.id));
      // toast error while remove and decrease
      toast.error(`${item.title} removed from cart`);
    } else {
      dispatch(addToCart(item));
      dispatch(increaseQuantity(item.id));
      // success toast 
      toast.success(`${item.title} added to cart`)
    }
  };

  return (
    
    <Button variant='secondary' onClick={handleButtonClick}>
      {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
    </Button>
    
  );
};

export default AddToCartButton;
