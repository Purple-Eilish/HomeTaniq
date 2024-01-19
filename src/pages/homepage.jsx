import React from 'react';
import Topbar from '../components/topbar';
import styled from 'styled-components';
import heroImg from '../assets/heroImg.png';
import arrow from '../assets/arrow.svg';
import chair from '../assets/chair.svg';
import cart from '../assets/cart.svg';
import search from '../assets/search.svg';
import pencil from '../assets/pencil.svg';
import Navbar from '../components/navbar';

const HomepageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 93dvh;
  display: block;
  position: relative;
  z-index: 1;
`;

const HeroText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 2;
`;

const Explore = styled.div`
margin-bottom: 150px;
  position: absolute;
  bottom: 0;
  transform: translate(50%, 0%);
  p:nth-child(2){
    font-size: 15px;
  transform: translate(0%, -50%);
  }
  button{
    padding: 12px 30px;
    border-radius: 35px;
  transform: translate(0%, -30%);
    
  }
`;
const Welcome = styled.div`
width: 100%;
background-color: red;
 div{
  justify-content: space-evenly;
 }
`

function Homepage() {
  return (
    <HomepageContainer>
      <Topbar />
      <Hero>
        <HeroImage src={heroImg} alt="" />
        <HeroText>
          <Navbar />
          <Explore className='mb-5'>
            <p className='display-5'>Elevate Everyday</p>
            <p className=''>AT HOMETANIQ, EVERY MOMENT MATTERS!</p>
            <button type="button" class="btn btn-light d-flex gap-3">Explore Now
              <img src={arrow} alt="" className='mt-2' /></button>
          </Explore>
        </HeroText>
      </Hero>
      <Welcome className='container '>
        <div className="col-md-12 col-sm-4 d-flex">
          <div className="d-flex"><img src={chair} alt="" /> 
            <p>DISCOVER COLLECTIONS</p>
          </div>
          <div className="d-flex">
            <img src={cart} alt="" />
            <p>DISCOVER COLLECTIONS</p>
            </div>
          <div className="d-flex">
            <img src={search} alt="" />
            <p>DISCOVER COLLECTIONS</p>
            </div>
          <div className="d-flex">
            <img src={pencil} alt="" />
            <p>DISCOVER COLLECTIONS</p>
            </div>
        </div>
      </Welcome>
    </HomepageContainer>
  );
}

export default Homepage;
