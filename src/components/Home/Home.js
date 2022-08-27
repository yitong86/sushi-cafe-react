import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import homesplash from '../../assets/homesplash.jpg'

const Home = () => {
  return (
    <Container>
      <Splash image={homesplash} style={{color: "#010101",position:"fixed",width:"100%",height:"100%"}}>
        
      </Splash>
    </Container>
  )
}

export default Home;