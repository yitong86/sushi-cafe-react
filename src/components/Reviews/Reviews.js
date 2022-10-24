import React, {useState, useEffect} from 'react';
import axios from "axios";
import Splash from '../common/Splash';

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
        <h1>Reviews</h1>
  <ul>
      <li>{reviews.title}</li>
   <li>{reviews.score}</li> 
      <li>{reviews.body} </li>
      </ul>
        </div>
       
       
       
    )
  
    })
  };
   
  
  
  export default Reviews;