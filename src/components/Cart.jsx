import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { Button, Card, notification } from 'antd';
import Meta from 'antd/es/card/Meta';
import './Cart.css';
import { useCart } from '../utils/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart({ id, imageSrc, title, description, price }) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = { id, imageSrc, title, description, price };
        addToCart(item);
        notification.success({
            message: 'Added to cart',
            description: '',
            placement: 'topRight',
            duration: 3,
        });
    };

    const handleNavigateCart = () => {
        navigate(`detail/${id}`)
    }

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
                    <Button className='favorite-button'>
                        Favorite <MdFavoriteBorder />
                    </Button>
                    <Button className='basket-button' onClick={handleAddToCart}>
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