import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import appleIcon from "../Assets/apple-icon.svg"
import googleIcon from "../Assets/google-icon.svg"
import hero from "../Assets/jud1.png"

const Hero = () => {
  return (
    <div>
      <Container id='better'>
        <Wrapper>
        <Second>
           <Pic src={hero}/>
          </Second>
          <First>
            <Title>
            The Better Way  <br /> to Save & Invest.
            </Title>
            <Sub>
            Made for traders, merchants, fast-growing businesses and anyone
            <br />
            looking for a smarter and better way to save
             <br />
             We are using mobile technology and agency banking to improve cash flow, eliminate errors  and increase profit for our users
            </Sub>
       <NavLink to="/signup" style={{textDecoration:"none"}} >
       <Button >
              Create Free Account
            </Button>
       </NavLink>
            <ButtonHold>
              <Buttons>
                <Icon>
                  <img src={appleIcon}/>
                </Icon>
                Get on iPhone
              </Buttons>
              <Buttons>
                <Icon>
                  <img src={googleIcon}/>
                </Icon>
                Get on Android
              </Buttons>
            </ButtonHold>
          </First>
        
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero

const Pic = styled.img`
width: 90%;
height: 70%;
object-fit: contain;
/* background-color: red; */

@media screen and (max-width:500px) {
  width: 300px;
  height:400px; 
   margin-bottom: 250px;
   display: none;
}
`

const Icon = styled.div`
margin: 5px;
height: 20px;
font-size: 30px;
justify-content: center;
display: flex;
align-items: center;
color: black;
`

const Second = styled.div`
position: relative;
/* background-color: red; */
width: 88%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width:500px) {
  /* background-color: red; */
  width: 30%;
}
`


const Buttons = styled.div`
margin: 5px;
height: 50px;
width:180px;
background-color: white;
color: black;
justify-content: center;
align-items: center;
display: flex;
font-size: 15px;
font-weight: 500;
border-radius: 10px;
cursor: pointer;
outline: none;
border: none;
border: 1px solid black;
margin-top: 10px;
transition: all 400ms;

:hover{
  margin-top: -2px;
  transform: scale(0.99);
}

@media screen and (max-width:500px) {
  width: 160px;
}
`

const Button = styled.button`
    width: 190px;
    height: 42px;
    border: none;
    border-radius: 30px;
    background-color: #031e3b;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-right: 20px;

    :hover {
      scale: 0.97;
      cursor: pointer;
      transition: all 350ms;
      background-color: #fff;
      border: 1px solid #063971;
      color: #063971;
    }

 @media screen and (max-width:320px) {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 230px; */
  margin-right: 30px;
 }
 @media screen and (max-width:500px) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  width: 230px;
 }
`

const ButtonHold = styled.div`
display: flex;
margin: 5px;
@media screen and (max-width:500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`

const Sub = styled.div`
color: #5A3535;
margin: 15px;
vertical-align: baseline;
text-decoration: none solid rgb(53,53,53);
font-weight: 400;
color: rgb(53,53,53);
background-color: rgba(0,0,0,0);
font-size: 16.5px;
line-height: 27.2px;


@media screen and (max-width:500px) {
  background-color: rgba(0,0,0,0);
  color: rgb(53,53,53);
  font-size: 18px;
  line-height: 27px;
  letter-spacing: normal;
  font-weight: 400;
  display: flex;
  /* text-align: center; */
  /* align-items: center; */
}
`


const Title = styled.div`
font-weight: 800;
line-height: 82.42px;
color:#031e3b;
background-color: rgba(0,0,0,0);
font-size: 60px;
vertical-align: baseline;
text-align: start;
font-style: normal;

@media screen and (max-width:500px) {
  font-size: 35px;
  line-height: 50px;
  letter-spacing: normal;
  word-spacing: 1px;
  font-weight: 700;
text-align: center;
}
`


const First = styled.div`
display: flex;
flex-direction: column;
margin-left: 40px;

@media screen and (max-width:500px) {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
}
`

const Wrapper = styled.div`
/* background-color: navajowhite; */
display: flex;
align-items: center;
justify-content: space-between;
width:90% ;
height: 100%;
margin-top: 90px;

@media screen and (max-width:500px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

}
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 20px;
/* background-color: red; */
overflow: hidden;

`