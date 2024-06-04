import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './productstyle.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5); // Number of products per page
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart'); // Navigate to cart page after adding to cart
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const logout = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/Logout');
            localStorage.removeItem('token');
            //Redux store or any other state management
            //dispatch({ type: 'LOGOUT' });
            navigate('/login');
            console.log(response.data.message); // Logout successful
          } catch (error) {
            console.error('Error logging out:', error);
          }
    };

    return (
        <div id='full'>
            <h2>Product Page</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '16px' }}
            />
              <button onClick={logout}>Logout</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {currentProducts.map((product) => (
                    <div key={product._id} style={{ border: '1px solid #ccc', padding: '16px', margin: '16px', width: '200px' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div>
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
