import React, {useState, useEffect} from 'react';
import axios from "axios";




const Menu = () => {
  const[menuItems,setMenuItems] = useState([]);

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

return menuItems.map((menuItems, index) => {
  return (
    <div>
  
      <h2>{menuItems.itemName +"       " +"$"+ menuItems.price}</h2>

      
      
      
      </div>
  )

  })
};
 
  






export default Menu;