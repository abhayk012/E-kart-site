import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addTocart } from '../Redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { removefromwishlist } from '../Redux/slices/wishListSlice';
import "./button.css"


function Wishlist() {
  const wishlistitems=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  return (
    <>
    <button style={{marginTop:'80px'}} className='btn btn-success ms-5'>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
        <i className='fa-solid fa-arrow-left me-2'></i>Back to <i className='fa-solid fa-house'></i></Link>
    </button>
    <Row style={{marginTop:"10px"}}>
      {
        wishlistitems?.length>0?
        wishlistitems.map((item)=>(
          <Col>
          <Card style={{ width: '15rem',height:'450px',marginTop:'20px',marginLeft:"50px" }}>
                  <Card.Img style={{objectFit:"cover",cursor:"pointer"}}  variant="top" src={item.thumbnail} height={"200px"} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0,50)}...
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between mt-3 '>
                      <Button variant="outline-danger" className='button' 
                      onClick={()=>dispatch(removefromwishlist(item.id))}>
                        <i class="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success" className='button1'
                      onClick={()=>dispatch(addTocart(item))}
                      ><i class="fa-solid fa-cart-plus"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
          </Col>
        )):
        <h1 style={{color:'red',textAlign:'center',fontWeight:'bold'}}>No Items In Wish-List<br></br><h3 style={{fontWeight:'bold',color:'green'}}>Add items to wishlist</h3> <img src="https://cdn.dribbble.com/users/988960/screenshots/3053767/coracao2_flinto.gif" alt="" height={'490px'} />
        </h1>
      }
    </Row>
    </>
  )
}

export default Wishlist