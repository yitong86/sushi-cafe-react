import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
const NavButton = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <NavLink 
      to={props.to} 
      style={{
        background: '',
        textDecoration: 'none',
        fontSize: '1.75em',
        color: hover ? "#FF8C00" : "#000000",
        fontWeight: 600,
        textShadow: '1p5x 1px #2fbe9b',
        textAlign: 'center',
        lineHeight: 'px',
        whiteSpace: 'nowrap',
        margin: '0 10px',
        opacity: hover ? "60%" : "100%"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.label}
    </NavLink>
  )
}
NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
export default NavButton;