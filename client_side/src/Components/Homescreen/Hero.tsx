import React, { useState, useEffect } from "react";
import styled from "styled-components";
import phone from "../Assets/hero.jpg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Container id="home">
        <Wrapper>
          <Right>
            <H3> Let's Start Alajo Savings Today!!</H3>
            <H1>A Smart Savings Solution For Unbanked and Non-Smart Phone Users.</H1>
            <Btn>
              <NavLink to="/signup">
                <Button>
                  <button>Get started Now</button>
                </Button>
              </NavLink>

              <Icons>
                <Text>Learn More</Text>
              </Icons>
            </Btn>
          </Right>
          <Left>
            <Img src={phone} />
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Button = styled.div`


`;

const Text = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  transition: all 500ms;
  background-image: linear-gradient(transparent 0, transparent 70%, whitesmoke);
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: 0 100%;
  :hover {
    background-size: 100% 100%;
  }

  @media screen and (max-width:500px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
`;
const Right = styled.div`
  width: 50%;
  flex-direction: column;

  padding: 20px;
  color: #fff;

  h3 {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    width: 90%;

  }
`;

const H1 = styled.div`
  line-height: 1.1;
  margin-bottom: 20px;
  font-size: 19px;
  font-weight: 200;
  margin-right: 150px;
  @media screen and (max-width: 500px) {
    font-weight: 400;
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
`;
const H3 = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 74px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  font-size: 70px;
  vertical-align: baseline;
  text-align: start;
  font-style: normal;

  @media screen and (max-width:500px) {
    font-size: 40px;
    font-weight: 700;
    width: 100%;
    line-height: 50px;
    text-align: center;

  }

`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const Left = styled.div`
  /* margin-top: 30px; */
  width: 28%;

  margin-right: 60px;

  @media screen and (max-width: 770px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    display: none;
  }
`;

const Btn = styled.div`
  margin-top: 20px;
  display: flex;

  align-items: center;

  @media screen and (max-width:500px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 40px;
    }

  button {
    width: 170px;
    height: 40px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #063971;
    margin-right: 20px;

    :hover {
      scale: 0.97;
      cursor: pointer;
      transition: all 350ms;
      background-color: #063971;
      border: 1px solid white;
      color: #fff;
    }

 
 
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;

  background-color: #031e3b;
  border-bottom-right-radius: 300px;

  /* @media screen and (max-width:500px) {
    background-color: red;
  } */
`;
