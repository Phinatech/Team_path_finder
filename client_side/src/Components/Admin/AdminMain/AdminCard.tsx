import React, {useState} from 'react'
import styled from 'styled-components'
import {TfiReload} from "react-icons/tfi"
import img1 from "../../Assets/diamond.png"
import img2 from "../../Assets/power.png"
import img3 from "../../Assets/money.png"
import {AiOutlineClose} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const Cards = () => {
    const [show, setShow] = useState(false)
    const [cancle, setCancle] = useState(false)

    const Canc = () => {
        setShow(false)
    }

    const Toggle =() => {
        setShow(!false)
    }
  return (
    <Container>
        <Top>
            <Icon><TfiReload /></Icon>
            {/* <NavLink to="/save"> */}
                <Button onClick={Toggle}>+QUICK SAVE</Button>
            {/* </NavLink> */}
        </Top>
        <Boxhold>
            <Card>
                <Image src={img1} />
                <Text>
                    <p>Total Customers</p>
                    <h2>20000</h2>
                </Text>
            </Card>
            <Card2>
                <Image src={img2} />
                <Text>
                    <p>Total Cash</p>
                    <h2>₦0.00</h2>
                </Text>
            </Card2>
            <Card3>
                <Image src={img3} />
                <Text>
                    <p>Flex Dollar</p>
                    <h2>₦0.00</h2>
                </Text>
            </Card3>
        </Boxhold>

            {show ? (
                <Save>
                    <Holder onClick={Canc}>
                        <Icons><AiOutlineClose /></Icons>
                        <Quick>
                            <h3>Quick Save</h3>
                            <p>Enter an amount and a destination to save to</p>
                        </Quick>
                        <Tap>
                            <p>Tap here & enter .. (e.g 5000)</p>
                            <Input placeholder='Tap here & enter..(e.g 5000)'/>
                        </Tap>
                        <Tap2>
                            <p>Choose a Destination</p>
                            <Input2 placeholder='My Piggybank - ₦0.00'/>
                        </Tap2>
                        <Proceed>Proceed</Proceed>
                    </Holder>
            </Save>
            ) : null}

    </Container>
  )
}

export default Cards
const Proceed = styled.button`
    font-size: 17px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    font-family: U8,sans-serif;
    margin-top: 160px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #0d60d8;
    border: none;
    outline: none;
    width: 90%;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
`
const Left = styled.div`
    color: rgb(26, 32, 44);
`
const Input2 = styled.input`
    width: 88%;
    height: 45px;
    color: #1b2331;
    background-color: #edf2f7;
    font-size: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
`
const Input = styled.input`
    width: 88%;
    height: 45px;
    color: #1d222b;
    background-color: #edf2f7;
    font-size: 100%;
    border: none;
    outline: none;
    padding-left: 15px;
    border-radius: 5px;
`
const Tap2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    /* margin-bottom: 5px; */
    p{
        color: #4a5568;
        font-weight: 700;
        font-family: U8,sans-serif;
        font-size: 13px;
    }
`
const Tap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    /* margin-bottom: 5px; */
    p{
        color: #4a5568;
        font-weight: 700;
        font-family: U8,sans-serif;
        font-size: 13px;
    }
`
const Quick = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    p{
        color: #718096;
        margin: 0;
        font-size: 14px;
    }
    h3{
        font-size: 24px;
        margin: 0;
        color: #083e9e;
        font-weight: 700;
        font-family: U8,sans-serif;
    }
`
const Icons = styled.div`
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
`
const Holder = styled.div`
    width: 27%;
    display: flex;
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    padding-left: 35px;
`
const Save = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
    right: 0;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    transition-timing-function: ease-in;
    transition: 1s;
    /* transform: translateX(-100%); */
    /* transition-delay: 1s; */
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    p{
        font-size: .875rem;
        opacity: .75;
        font-weight: 700;
        font-family: U8,sans-serif;
        color: #e0e0e0;
        margin: 0;
    }
    h2{
        color: #fff;
        font-size: 23px;
        margin: 0;
    }
`
const Image = styled.img`
    margin-left: 15px;
`
const Card3 = styled.div`
    width: 320px;
    height: 150px;
    background-color: #222222;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Card2 = styled.div`
    width: 320px;
    height: 150px;
    background-color: #7E1CE6;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Card = styled.div`
    width: 320px;
    height: 150px;
    background-color: #1666D9;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Button = styled.div`
    font-size: 15px;
    color: #fff;
    text-align: center;
    width: 180px;
    cursor: pointer;
    height: 45px;
    display: flex;
    font-weight: 700;
    font-family: U8,sans-serif;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: #0d60d8;
    transition: ease-in 350ms;
`
const Icon = styled.div`
    font-weight: bold;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    /* position: fixed; */
`