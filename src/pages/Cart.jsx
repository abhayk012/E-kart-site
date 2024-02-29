import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
// import { addToWishlist } from '../Redux/slices/wishListSlice';
import { emptyCart, removefromcart } from '../Redux/slices/cartSlice';
import "./button.css"
import { Link, useNavigate } from 'react-router-dom';


function Cart() {
  const cartitems=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  const navigate = useNavigate()
  let totalPrice= 0;
  if(cartitems.length>0){
    for(let i=0; i<cartitems.length; i++){
      totalPrice= totalPrice+cartitems[i].price;
    }
  }
  const handleCheckout = ()=>{
    dispatch(emptyCart())
    alert("Your order is successfully placed")
    navigate('/')
  }
  return (
    <>
    <button style={{marginTop:'80px'}} className='btn btn-success ms-5'>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
        <i className='fa-solid fa-arrow-left me-2'></i>Back to <i className='fa-solid fa-house'></i></Link>
    </button>
    <div style={{marginTop:"150px"}}>
    <div className='row w-100'>
      
      
      <div className='col-lg-6 col-md-6 m-5'>
        <table className='table shadow border'>
          
            <thead>
              <tr>
                <th>sl no.</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
          <tbody>
            {
              
                cartitems?.length>0?
              cartitems?.map((item,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img src={item.thumbnail} alt="" height={'90px'}/></td>
                  <td>{item.price}</td>
                  <td>
                  <Button variant="outline-danger" className='button3' 
                      onClick={()=>dispatch(removefromcart(item.id))}>
                        <i class="fa-solid fa-trash"></i></Button>
                  </td>
                </tr>
              )):
              <h1 style={{color:'red',textAlign:'center',fontWeight:'bold'}}>No Items In Cart-List<br></br><h3 style={{fontWeight:'bold',color:'green'}}>Add items to wishlist</h3> <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" height={'380px'} />
              </h1>
              }
          </tbody>
        </table>
      </div>
      <div className='col-lg-5 col-md-5 m-2'>
      <div className='col-lg-10 col-md-10 d-flex justify-content-center align-items-center'>
        <div className='border shadow p-5'>
          <h3 className='text-primary'>Cart Summary</h3>
          <h6>Total Number of Products:  <span className='fw-bolder fs-4 text-warning'>{cartitems.length}</span></h6>
          <h6>Total Price:  <span className='fw-bolder fs-5 text-warning'>{totalPrice}</span></h6>
          <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
        
    </div>
      </div>
    </>
  )
}

export default Cart