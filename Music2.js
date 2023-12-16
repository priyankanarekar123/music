import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import './Music2.css';

const productsArr = [
  {
    
    title: 'Album 1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Album 4',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
];

const Music2 = () => {
  const [cartElements, setCartElements] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const addToCart = (item) => {
    const newItem = { ...item, quantity };
    setCartElements([...cartElements, newItem]);
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartElements.filter(item => item.title !== itemId);
    setCartElements(updatedCart);
  };

  const purchase = () => {
    if (cartElements.length > 0) {
      alert('Item is purchased');
    } else {
      alert('Cart is empty');
    }
  };

  const toggleCartModal = () => {
    setShowCart(!showCart);
  };
  
  const renderCart = () => {
    return (
      <>
        <div>
          <h2>Cart</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: '1' }}><strong>Item</strong></div>
              <div style={{ flex: '1' }}><strong>Price</strong></div>
              <div style={{ flex: '1' }}><strong>Quantity</strong></div>
            </div>
            {cartElements.map((item, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <div className='one'>

                <div className='seven'>
                <img
                  src={item.imageUrl}
                  alt={`Album ${index + 1}`}
                  style={{ maxWidth: '100px', maxHeight: '100px', marginBottom: '10px',marginLeft:'34px' }}
                />
                </div>
                <div className='two'>
                  <h8 style={{marginLeft:'-38px'}}>Item {index + 1}</h8>
                </div>
                </div>
                <div className='three'>
                <p>{item.price}</p>
                </div>
                <div className='four'>
                <label htmlFor={`quantity_${index}`}></label>
                </div>
                <div className='five' style={{marginBottom: '10px'}}>
                <div className='nine'>
                <input
                  type="number"
                  id={`quantity_${index}`}
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedCart = [...cartElements];
                    updatedCart[index].quantity = parseInt(e.target.value);
                    setCartElements(updatedCart);
                  }}
                  style={{ maxWidth: '40px', maxHeight: '30px'}}
                />
                </div>
                <div className='ten'>
                <Button onClick={() => removeFromCart(item.title)}>Remove</Button>
                </div>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={purchase}>Purchase</Button>
        </div>
      </>
    );
  };




  const mealList = productsArr.map((meal) => (
    <li key={meal.title}>
      <h3>{meal.title}</h3>
      <p>Price: ${meal.price}</p>
      <div className="image-container">
      <img src={meal.imageUrl} alt={meal.title}  className="zoom-hover"/>
      </div>
      <Button onClick={() => addToCart(meal)}>Add to Cart</Button>
    </li>
  ));

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <ul>{mealList}</ul>
          </Col>
          <Col xs={6}>
            <Button onClick={toggleCartModal}>Cart ({cartElements.length})</Button>
          </Col>
        </Row>
      </Container>

      <Modal show={showCart} onHide={toggleCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderCart()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleCartModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Music2;
