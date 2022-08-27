import React, { Fragment, useContext} from 'react';
import NavButton from './NavButton';
import { AuthContext } from '../Providers/AuthProvider';
import Button from '../common/Button';
import Logout from '../Auth/Logout'


const Navbar = (props) => {
  
  const [auth] = useContext(AuthContext);

  return (
    <Fragment>
      <div style={{
        backgroundColor: "#F8F8FF",
        position: 'fixed',
        padding:"0",
        margin:"0",
        listStyleType:"none",
        top:"0",
        width: '100%',
        zIndex: 9999,
        left: 0,
        height: '98px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       
      }}>
        <h1 style={{
          fontFamily: "cursive",
          fontWeight: 'bold',
          fontSize: '3.5em',
          margin: "0 35px",
          height:"40px"
     
        }}>Sushi Cafe</h1>
        <div style={{
          margin: '0 45px',
          flexDirection: 'row',
          background: "transparent",
          userSelect: "none",
          fontWeight: 'bold',
          float:'right',
          fontFamily:"cursive"
        
        }}>
          {auth.id ? (<p>Hi {auth.name}</p>) : null}
          <NavButton to="/" label='Home' />
          <NavButton to="/menu" label='Menu' />
          <NavButton to="/contact" label='Contact us' />
          <NavButton to="/reviews" label="Reviews" />
        
          
         
         
          {auth.id ? (
            <Fragment>
              
              <NavButton to="/logout" label="Logout"></NavButton>
            </Fragment>
          ) : (
              
            <NavButton to="/login" label="Login" />
            
              
          )}
          


          
        </div>
      </div>
      <div style={{height: '75px'}} />
    </Fragment>
  )
}

export default Navbar;