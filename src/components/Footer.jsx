import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className='bg-primary'>
    <div className='d-flex justify-content-center align-items-center mt-5 '>
        <div className='footer d-flex justify-content-evenly align-items-center'>

          <div className='website mt-3' style={{ width: "400px" }}>
            <h4 style={{fontWeight:'bolder'}}><i class="fa-solid fa-cart-shopping me-2"></i>E-Kart</h4>
            <p style={{ textAlign: "justify" }}>This innovative media player offers a seamless and immersive audio-visual experience, boasting a user-friendly interface and robust functionality for effortlessly organizing and enjoying a diverse range of multimedia content. With its sleek design and advanced features, it redefines the way users interact with their digital media, delivering unparalleled convenience and entertainment at their fingertips.</p>
          </div>
           <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>Home Page</Link>
            <Link to='/wishlist' style={{textDecoration:"none",color:"black"}}>Wish List</Link>
            <Link to='/cart' style={{textDecoration:"none",color:"black"}}>cart</Link>

           </div>
           <div className='guides d-flex flex-column ms-5'>
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{textDecoration:"none",color:"black"}}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:"none",color:"black"}}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none",color:"black"}}>Boots Watch</Link>

           </div>
           <div className='contact d-flex flex-column ms-5'>
           <h4>Contact Us</h4>
           <div className='d-flex'>
            <input type="text" className='form-control' placeholder='enter youre email'/>
            <button className='btn btn-warning ms-2'>subscribe</button>
           </div>

           <div className='mt-3'>
            <Link><i class="fa-brands fa-facebook fa-2xl ms-2"></i></Link>
            <Link><i class="fa-brands fa-instagram fa-2xl ms-4"></i></Link>
            <Link><i class="fa-brands fa-x-twitter fa-2xl ms-4"></i></Link>
            <Link><i class="fa-brands fa-linkedin fa-2xl ms-4"></i></Link>
           </div>

           </div>
        </div>

      </div>
      <p className='mt-5 text-center copyright' >Copyright &copy; 2023 E-cart.Built by AK with React</p>

    </div>
  )
}

export default Footer