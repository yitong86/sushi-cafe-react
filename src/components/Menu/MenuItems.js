import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function MenuItems() {
 const [carts, setCarts] = React.useState([]);
  const[menuItems,setMenuItems] = useState([]);
  const addToCart = (menuItem) => {
    // console.log("add to cart");
     setCarts([...carts,{...menuItem }]);
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

  return (
    <div>
      <img src={menuItems.image} width={600} height={300}   />
      <h3>{menuItems.itemName}</h3>
      <div>{"$" + menuItems.price}</div>
      <div>
        <button onClick={() => addToCart(menuItems)}>Add To Cart</button>
      </div>
    </div>
  );
}