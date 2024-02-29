import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slices/wishListSlice';
import { addTocart } from '../Redux/slices/cartSlice';
import Gif from "../gif/nothing.gif"
import "./button.css"



function Home() {
  const data = useFetch('https://dummyjson.com/products')
  const dispatch=useDispatch()
  return (
    <>
      <Row className='ms-5 me-5' style={{marginTop:'150px'}}>
        {
          data?.length > 0 ?
            data.map((item) => (
              <Col>
                <Card style={{ width: '15rem',height:'450px',marginTop:'20px' }}>
                  <Card.Img style={{objectFit:"cover",cursor:"pointer"}}  variant="top" src={item.thumbnail} height={"200px"} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0,50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between mt-3'>
                      <Button variant="outline-danger" 
                      onClick={()=>dispatch(addToWishlist(item))}
                      className='button'
                      ><i class="fa-solid fa-heart"></i></Button>
                      <Button variant="outline-success"
                      onClick={()=>dispatch(addTocart(item))}
                      className='button1'
                      ><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )):
            <img src={Gif} alt="Nothing to display" height={'500px'} style={{borderRadius:'50px'}}/>
    }
      </Row>
    </>
  )
}

export default Home