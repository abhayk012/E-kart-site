import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlistarray=useSelector((state)=>state.wishlistReducer)
  const cartarray=useSelector((state)=>state.cartReducer)
  return (
    <div>
        <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand href="/" style={{fontWeight:'bold'}}>
          <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png" height={'40px'} className='me-3' alt="" />
          E-Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className='btn border rounded bg-light'><Link to={'/wishlist'} style={{textDecoration:"none",color:'black',fontWeight:'bold'}}><i class="fa-solid fa-heart" style={{color:'red'}}></i> WishList  <Badge bg="secondary" className='btn border rounded me-3'>{wishlistarray.length}</Badge></Link>
          </Nav.Link>
            <Nav.Link className='btn border rounded ms-3 bg-light'>
            <Link to={'/cart'} style={{textDecoration:"none",color:'black',fontWeight:'bold'}}>
            <i class="fa-solid fa-cart-plus" style={{color:'green'}}></i> Cart <Badge bg="secondary" className='btn border rounded me-3'>{cartarray.length}</Badge>
            </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header