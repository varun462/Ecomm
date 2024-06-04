import React, { useState } from 'react';
import { useCart } from './CartContext';
import axios from 'axios';
import './productstyle.css';

const OrderPage = () => {
    const { cart } = useCart();
    const [quantities, setQuantities] = useState({});

    if (cart.length === 0) {
        return <div>Your cart is empty.</div>;
    }

    // Update quantity
    const handleQuantityChange = (productId, newQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: newQuantity
        }));
    };

    // Calculate total price
    const totalPrice = Object.keys(quantities).reduce((total, productId) => {
        const product = cart.find(item => item._id === productId);
        const quantity = quantities[productId];
        return total + (product.price * quantity);
    }, 0);

    const PurchaseItem=async(name)=>{
        try {
            const response = await axios.post('http://localhost:3001/api/purchase');
            alert(response.data.message +"the",name);
        } catch (error) {
            console.log("error while purchasing",error);
        }
    };

    return (
        <div>
            <h2>Order Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>
                                <input
                                    type="number"
                                    value={quantities[product._id] || 1}
                                    onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                                    min="1"
                                />
                            </td>
                            <button onClick={PurchaseItem}>Purchase</button>
                        </tr>
                         ))}
                </tbody>
            </table>
            <div>
                <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
            </div>
           
        </div>
    );
};

export default OrderPage;
