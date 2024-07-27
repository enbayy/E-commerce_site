import React, { useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { Button, Card, notification } from 'antd';
import Meta from 'antd/es/card/Meta';
import './Cart.css';
import { useCart, useFavori } from '../utils/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart({ id, imageSrc, title, description, price }) {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cartItems } = useCart();
    const { addToFavori, removeFromFavori, favoriItems } = useFavori();
    const [isInCart, setIsInCart] = useState(cartItems.some(item => item.id === id));
    const [isFavori, setIsFavori] = useState(favoriItems.some(item => item.id === id));

    const handleAddToCart = () => {
        const item = { id, imageSrc, title, description, price };
        if (isInCart) {
            const itemIndex = cartItems.findIndex(item => item.id === id);
            removeFromCart(itemIndex);
            notification.success({
                message: 'Removed from cart',
                description: '',
                placement: 'topRight',
                duration: 3,
            });
        } else {
            addToCart(item);
            notification.success({
                message: 'Added to cart',
                description: '',
                placement: 'topRight',
                duration: 3,
            });
        }
        setIsInCart(!isInCart);
    };

    const handleAddToFavori = () => {
        const item = { id, imageSrc, title, description, price };
        if (isFavori) {
            removeFromFavori(id);
            notification.success({
                message: 'Removed from favorites',
                description: '',
                placement: 'topRight',
                duration: 3,
            });
        } else {
            addToFavori(item);
            notification.success({
                message: 'Added to favorites',
                description: '',
                placement: 'topRight',
                duration: 3,
            });
        }
        setIsFavori(!isFavori);
    };

    const handleNavigateCart = () => {
        navigate(`detail/${id}`);
    };

    return (
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt={title} src={imageSrc} />}
            className="card-container"
        >
            <div className="card-content">
                <Meta title={title} description={description} />
                <p className="price">Price: {price} TL</p>
                <div className='button-container'>
                    <Button 
                        className={`favorite-button ${isFavori ? 'in-favori' : ''}`}
                        onClick={handleAddToFavori}
                    >
                        Favorite <MdFavoriteBorder />
                    </Button>
                    <Button 
                        className={`basket-button ${isInCart ? 'in-cart' : ''}`} 
                        onClick={handleAddToCart}
                    >
                        <FaShoppingBasket />
                    </Button>
                    <Button className='basket-button' onClick={handleNavigateCart}>
                        Review
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default Cart;