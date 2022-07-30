import React, { Fragment, useContext } from 'react';
import NavButton from './NavButton';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = (props) => {
  const [auth] = useContext(AuthContext);

  return (
    <Fragment>
      <div style={{
        backgroundColor: "#F8F8FF",
        position: 'fixed',
        width: '100%',
        zIndex: 9999,
        top: 0,
        left: 0,
        height: '70px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{
          fontFamily: "cursive",
          fontWeight: 'bold',
          fontSize: '2.5em',
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
          {auth.id ? (
            <Fragment>
              <NavButton to="/reviews" label="Reviews" />
              <NavButton to="/users" label="Profile" />
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