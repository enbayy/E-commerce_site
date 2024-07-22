import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import '../pages/HomePage/Home.css';

function Cart() {
    return (
        <div className="page-container">
            <div className="card-container">
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="example" src="src/assets/tshirt.png" />}
                >
                    <div className="card-content">
                        <Meta title="Europe Street beat" description="50$" />
                        <div className='button-container'>
                            <Button>Favorite<MdFavoriteBorder /></Button>
                            <Button><FaShoppingBasket /></Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Cart