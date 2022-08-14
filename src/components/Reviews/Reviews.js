import React, {useState, useEffect} from 'react';
import axios from "axios";

const Reviews= () => {
    const[reviews,setReviews] = useState([]);
  
  
    const getReviews= () =>{
    axios.get("http://localhost:8080/api/reviews/").then((res) => {
  
      console.log(res);
    
      setReviews(res.data);
      
    }
    );
  }
  
  
  useEffect(() => {
      getReviews();
  },[]);
  
  return reviews.map((reviews, index) => {
    return (
      
      <div >
        
      <h1>{reviews.title}</h1>
   <div>{reviews.score}</div> 
      <div>{reviews.body} </div>
        
        </div>
       
        
       
    )
  
    })
  };
   
  
  
  export default Reviews;