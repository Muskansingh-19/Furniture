 import { PiShoppingCartSimpleBold } from "react-icons/pi";
 import Logo from "../../assets/images/Logo.svg";
 import { NavLink } from "react-router-dom";
 import { useLocation } from 'react-router-dom';
 import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Header.css';

 const Header=()=>{
    const location=useLocation();

    const headerClass = location.pathname === ('/Product')|| (location.pathname.startsWith("/products/")) || location.pathname === ('/about')|| location.pathname === ('/contact') ||location.pathname === ('/Shopping-cart')? 'header' : '' ;

     const Cartt =location.pathname=== ('/Product') || (location.pathname.startsWith("/products/"))|| location.pathname === ('/about') || location.pathname === ('/contact') || location.pathname === ('/Shopping-cart')?'Cart':'cart';

     const Cartcount=location.pathname=== ('/Product') || (location.pathname.startsWith("/products/"))|| location.pathname === ('/about') || location.pathname === ('/contact')||location.pathname === ('/Shopping-cart')?'cartnumber':'cart-number';
     
     const cartItems=useSelector((store)=>store.cart.items);
   //console.log(cartItems);
   
   // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  
     
 return (<header className={`${headerClass}`}>

     <Link to="/" className="text-link">     <div className="logo_container">
         <img src={Logo} alt="brand-logo"/>
            <p className="brand_title">Panto</p>
        </div>
        </Link> 
        <nav className="nav_link">
            <ul> 
                <li><NavLink  to="/" className="text-link" onClick={()=>{ window.scrollTo(0, 0)}} >Home</NavLink></li>
                <li><NavLink to="/Product" className="text-link" onClick={()=>{ window.scrollTo(0, 0)}}>Product</NavLink></li>
                <li><NavLink to="/about"  className="text-link" onClick={()=>{ window.scrollTo(0, 0)}}>About Us</NavLink></li>
                <li><NavLink to="/contact"  className="text-link" onClick={()=>{ window.scrollTo(0, 0)}}>Contact Us</NavLink></li>
            </ul>
        </nav>
        <Link to='/Shopping-cart'  className="text-link" ><PiShoppingCartSimpleBold className={`${Cartt}`} /></Link>
       {/*cartItems.length>0 && (
       <div className={`${Cartcount}`}>{cartItems.length}</div>
       ) */}
{totalQuantity > 0 && (
        <div className={`${Cartcount}`}>{totalQuantity}</div>
      )}
        
        
    </header>)
}

export default Header;