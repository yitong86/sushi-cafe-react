import React, {useState, useEffect} from 'react';
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom'
import MenuItems from './MenuItems';
import Basket from '../Basket/Basket';
import StripeCheckout from 'react-stripe-checkout'
import{toast} from 'react-toastify'


const PAGE_MENUITEMS = 'menuItems';
const PAGE_CART = 'carts';
const PAGE_CATEGORY = 'category';
//toast.configure()

const Menu = () => {
  const[menuItems,setMenuItems] = useState([]);

  const [carts, setCarts] = React.useState([]);
 const [category,setCategory]= React.useState(new Set());

 const[selectedCategory,setSelectedCategory]=useState("");

  const[page,setPage]= useState(PAGE_MENUITEMS)

 const navigate = useNavigate()

  const getTotalSum = () => {
    return carts.reduce((sum,{ price,quantity }) => sum + price * quantity,0)
  }




  const getMenu = () =>{
  axios.get("http://localhost:8080/api/menuitems/").then((res) => {

    console.log(res);
  
    setMenuItems(res.data);
    const newCategory = new Set()
      for(let i = 0 ;i < res.data.length;i++){
        newCategory.add(res.data[i].category)
    }
    setCategory(newCategory)
  }
  );
}


useEffect(() => {
    getMenu();
},[]);

const addToCart = (menuItems) => {
  let newCart =[...carts]
 let itemInCart = newCart.find(
  (item) => menuItems.itemName === item.itemName
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
//category

const handleChange = event => {
 
console.log(event.target.value);
setSelectedCategory(event.target.value)
 
};

const getMenusInCategory = () => {
  if(selectedCategory === ""){
    return menuItems
  }
  return menuItems.filter(
    (menuItems) => menuItems.category === selectedCategory
  )
}


async function handleToken(token, addresses) {
  console.log({token,addresses})
  const response = await axios.post(
    "http://localhost:8080/checkout",
    { token, menuItems}
  );
  const { status } = response.data;
  if(status === 'success'){
    toast("Success Pyament is completed",{type:'success'})

  }else{
    toast("Failure payment is not completed",{type:"failure"})
  }

 
}

const renderMenuItems = () => (
  <>


  {getMenusInCategory().map((menuItems, index) => (

<div className ="display-menu" >
 <div>
<img className="image" src={menuItems.image} style={{borderRadius:"30px",display:"grid",marginRight:"30px",
  width:"100%",height:"200px"}}  />
 </div>
 <div >  
    <h2 style={{display:"block",marginRight:"20px"}}>{menuItems.itemName}</h2>
    </div> 
    <div> 
    <h3 style={{width:"100",marginRight:"20px",marginTop:"0",lineHeight:"5px"}}>{"$" + menuItems.price}</h3> 
    </div> 
    <div >
    <button  className = "addToCart-button" style={{cursor:"pointer",marginBottom:"30px"}}onClick={() => addToCart(menuItems)}>
      Add To Cart
    </button>
    </div>
    </div>
  

    ))}
    
    </>
  
)
const renderCart = () => (
  <>
 <div>
  <h1>My Cart</h1>
  <button className="return-menu" onClick ={() => navigateTo(PAGE_MENUITEMS)}>Return Menu</button>

  <div className = "menuItem" >  
    {carts.map((menuItems, index) => (
  <div>
       <img src={menuItems.image} width={300} height={200}   />
      <h2>{menuItems.itemName}</h2>
      <h3>{"$" + menuItems.price}</h3>  

      <input 
      value ={menuItems.quantity}
      onChange={(e)=>
        setQuantity(
          menuItems,
          parseInt(e.target.value))}
        />
        

    <button onClick ={() => removeFromCart(menuItems)}>Remove</button>
      </div>
  
      ))}
      </div>
      <div >Total:({getTotalSum()}) </div>


      <StripeCheckout 
      stripeKey="pk_test_51LXad4FPWDZsVwKEyuk81AVQjOncjV1HGkZH2k5zH2alRHGGNCKWhZW954hNs3nD0pEiHte15nR5JKQSth0ipoev00z8oTiwHP"
      token={handleToken}
      amount={getTotalSum() *100}
      name={menuItems.itemName}
      billingAddress
      shippingAddress
      />
      
      </div>
    </>
    
    
)
const displayMenuItems=()=>{
  return (
    
    <div className='displayMenu-grid' style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",columnGap:"30px",rowGap:"20px",marginTop:"80px"}}>
      
      
      {page === PAGE_MENUITEMS && (renderMenuItems())}

      {page === PAGE_CART && (renderCart())}


      
      </div>
     
      
     
  )
 
  
//})
}
  return (

    <div>
<div className='select-option' >
 <h1 className="selectCategory" 
 style={{display:"block",fontFamily:"arial", fontSize:"25px",fontWeight:"bold",position:"fixed" }}>
  Select a Category
  <select onChange={handleChange} style={{margin:"0.5em",position:"fixed",textAlign:"center"}} >
   {Array.from(category).map((cate) => (
    
  <option key={cate} value={cate}>
  {cate}
  </option>
        ))}
  </select>
  </h1>
  </div>
      <Button  onClick={() => navigateTo(PAGE_CART)}
          
         style={{textalign: "right",width: "3rem",
         display:"flex",lineheight:"60px",position:"fixed",right:"-5px",
         top:"14.5%"
        }}
      
        >

      ({getCartTotal()})

      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
           <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
      
          </svg>
        </Button>
        <div>
        {displayMenuItems()}
        </div>
    </div>
  )
};
 


export default Menu;