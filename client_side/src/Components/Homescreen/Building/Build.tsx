import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import CardProps from "./CardProps";
import piggy from "../../Assets/piggy.png";
import lock from "../../Assets/safelock.png";
import target from "../../Assets/target.png";
import flex from "../../Assets/flex.png";

const Build = () => {
  return (
    <div>
      <Container id="build">
        <Wrapper>
          <First>
            <span>
              4 Ways to Build <br /> Your Savings
            </span>
            <p>
            Save with Alajo Online Today. <br /> Sign up to be a profitable Alajo agent <br /> and experience saving at its best.
            </p>
            <NavLink to="/signup">
              <Button>Start Saving</Button>
            </NavLink>
          </First>
          <Second>
            <CardProps
              text1="Daily Savings"
              text2="Build a dedicated savings faster on your terms automatically or manually"
              ButtonText="Daily Save"
              image={piggy}
              bcc="#E4F0FD"
              color="blue"
            />
            <CardProps
              text1="Fixed Savings"
              text2="Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."
              ButtonText="Safelock"
              image={lock}
              bcc="#E7F5FD"
              color="#58A9FD"
            />
            <CardProps
              text1="Alajo Online"
              text2="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
              ButtonText="Alajo Savings"
              image={target}
              bcc="#E7FDF0"
              color="#34AC62"
            />
            <CardProps
              text1="Contributions "
              text2="Save, transfer, withdraw, manage and organise your money for free at any time."
              ButtonText="Daily Contributions"
              image={flex}
              bcc="#FBE9F5"
              color="#E850A1"
            />
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Build;
const Button = styled.button`
  width: 170px;
  height: 40px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-right: 20px;
  background-color: #031e3b;

  :hover {
    scale: 0.97;
    cursor: pointer;
    transition: all 350ms;
    background-color: #fff;
    border: 1px solid #063971;
    color: #063971;
  }
`;

const Second = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 70%;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const First = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }

  span {
    font-weight: bold;
    font-size: 45px;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 39px;
      line-height: 45px;
      vertical-align: baseline;
      letter-spacing: normal;
      word-spacing: 0px;
      font-style: normal;
      font-weight: 700;
    }
  }

  p {
    vertical-align: baseline;
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 17px;
      font-weight: 400;
      line-height: 25px;
      vertical-align: baseline;
      letter-spacing: normal;
      font-style: normal;
      font-variant: normal;
    }
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
overflow: hidden;

  /* margin-top: 100px; */
  /* margin-bottom: 20px; */

  @media screen and (max-width: 500px) {
    margin-top: -220%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
