import React, {useState, useEffect} from 'react';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Button from '../common/Button';
import Cart from '../Basket/Cart';
import CheckOut from '../Auth/CheckOut';
import {useNavigate} from 'react-router-dom'
import MenuItems from './MenuItems';
import Basket from '../Basket/Basket';
const PAGE_MENUITEMS = 'menuItems';
const PAGE_CART = 'carts';

const Menu = () => {
  const[menuItems,setMenuItems] = useState([]);

  const [carts, setCarts] = React.useState([]);

  const[page,setPage]= useState(PAGE_MENUITEMS)

 const navigate = useNavigate()

  const getTotalSum = () => {
    return carts.reduce((sum,{ price,quantity }) => sum + price * quantity,0)
  }




  const getMenu = () =>{
  axios.get("http://localhost:8080/api/menuitems/").then((res) => {

    console.log(res);
  
    setMenuItems(res.data);
    
  }
  );
}


useEffect(() => {
    getMenu();
},[]);

const addToCart = (menuItems) => {
  let newCart =[...carts]
 let itemInCart = newCart.find(
  (item) => menuItems.name === item.name
 );
 
 if(itemInCart){
  itemInCart.quantity++;
 }else{
  itemInCart={
    ...menuItems,
    quantity:1,
  };
  newCart.push(itemInCart)
 }
  setCarts(newCart);
}

const removeFromCart =(menuItemsToRemove) =>{
  setCarts(
    carts.filter((menuItems) => menuItems !== menuItemsToRemove)
  )
}

const checkOut = () => {
    navigate("/checkout")
}

const getCartTotal = () => {
  return carts.reduce((sum,{ quantity }) => sum + quantity,0);
};

const setQuantity = (menuItems, amount) => {
  const newCart = [...carts];
  newCart.find(
    (item) => item.name === menuItems.name).quantity = amount;
    setCarts(newCart);
  
}

const navigateTo = (nextPage) => {
  setPage(nextPage);
}


const renderMenuItems = () => (
  <>
  <header style={{margin:"2.5em"}}>Menu</header>
  Select a category
  <select>
    <option>{menuItems.category}</option>
  </select>
<div>
  {menuItems.map((menuItems, index) => (
<div className='row'>
     <img src={menuItems.image} width={300} height={200} 
    />
    <h2>{menuItems.itemName}</h2>
    <h3>{"$" + menuItems.price}</h3>  
    <button onClick={() => addToCart(menuItems)}>
      Add To Cart
    </button>

    </div>
  

    ))}
    </div>
    </>
  
)
const renderCart = () => (
  <>
 <div>
  <h1>My Cart</h1>
  <button onClick ={() => navigateTo(PAGE_MENUITEMS)}>Return Menu</button>
  <div className = "menuItem" >
    
    {carts.map((menuItems, index) => (
  <div>
       <img src={menuItems.image} width={600} height={300}   />
      <h2>{menuItems.itemName}</h2>
      <h3>{"$" + menuItems.price}</h3>  

      <input 
      value ={menuItems.quantity}
      onChange={(e)=>
        setQuantity(
          menuItems,
          parseInt(e.target.value))}
        />
         <div >Total:({getTotalSum()}) </div>

    <button onClick ={() => removeFromCart(menuItems)}>Remove</button>
      </div>
    
  
      ))}
      </div>

      <button onClick ={()=>checkOut()}>Check out</button>
      
      </div>
    </>
    
    
)
const displayMenuItems=()=>{
  return (
    
    <div className = "app" style={{
      margin: '0 90px',
      background: "transparent",
      textalign:"left",
      }}>
      
      {page === PAGE_MENUITEMS && (renderMenuItems())}

      {page === PAGE_CART && (renderCart())}
      
      </div>
     
      
     
  )
 
  
//})
}
  return (
    <div>

<Button  onClick={() => navigateTo(PAGE_CART)}
          
         style={{ width: "3rem",display:"flex",float:"left",textalign:"right",lineheight:"60px",position:"absolute",border:"3px solid #73AD21" }}
        variant="outline-primary"
          className="rounded-circle"
        >

      ({getCartTotal()})

      
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
           
          >
            
           <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
      
          </svg>
          
          
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            
          </div>
        </Button>
        {displayMenuItems()}
    </div>
  )
};
 


export default Menu;