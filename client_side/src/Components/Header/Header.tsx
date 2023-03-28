import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/logo7.png";
import { BiMenuAltRight } from "react-icons/bi";
import { link } from "fs/promises";
import { Link } from "react-scroll";

const Header = () => {
  const [media, setmedia] = React.useState<boolean>(false);
  const [landingsearch, setlandsearch] = React.useState<boolean>(false);
  const [show, setShow] = React.useState(false);

  const hb = () => {
    setmedia(!media);
  };

  const remove = () => {
    setmedia(false);
    setlandsearch(false);
  };

  const changeHeader = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", changeHeader);

  return (
    <div>
      <Container>
        {show ? (
          <Wrapper bg="">
            <NavLink to="/">
              <Logo src={logo} />
            </NavLink>

            <NavWrapper>
              <Nav smooth={true} duration={500} to="home">
                Home
              </Nav>
              <Nav smooth={true} duration={500} to="better">
                Save
              </Nav>
              <Nav smooth={true} duration={500} to="build">
                Plan
              </Nav>
              <Nav smooth={true} duration={500} to="source">
                Source
              </Nav>
            </NavWrapper>

            <Buttonwrapper>
              <NavLink to="/signin">
                <Button>Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button>Sign Up</Button>
              </NavLink>
            </Buttonwrapper>
          </Wrapper>
        ) : (
          <Wrapper bg="">
            <NavLink to="/">
              <Logo src={logo} />
            </NavLink>

            <NavWrapper>
              <Nav smooth={true} duration={500} to="home">
                Home
              </Nav>
              <Nav smooth={true} duration={500} to="better">
                Save
              </Nav>
              <Nav smooth={true} duration={500} to="build">
                Plan
              </Nav>
              <Nav smooth={true} duration={500} to="source">
                Source
              </Nav>
            </NavWrapper>

            <Buttonwrapper>
              <NavLink to="/signin">
                <Button>Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button>Sign Up</Button>
              </NavLink>
            </Buttonwrapper>
          </Wrapper>
        )}

        {media ? (
          <Span onClick={remove}>X</Span>
        ) : (
          <Menu onClick={hb}>
            <BiMenuAltRight />
          </Menu>
        )}
        {media ? (
          <Handbuggermenu>
            <Div>
              <span>Home</span>
            </Div>

            <Div>
              <span>Save</span>
            </Div>
            <Div>
              <span>Plan</span>
            </Div>
            <Div>
              <span>Source</span>
            </Div>
          </Handbuggermenu>
        ) : null}
      </Container>
    </div>
  );
};

export default Header;
const Button = styled.button`
  width: 130px;
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
  @media screen and (max-width: 500px) {
    width: 280px;
    /* display: flex;
  align-items: center; */
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: flex;
  align-items: center; */
  }
`;

const Menu = styled.div`
  display: none;
  color: white;
  padding: 6px;
  /* background-color: white; */
  font-size: 30px;
  justify-content: center;
  /* color: rgb(0, 0, 0, 0.5); */
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 18px;
    margin-left: 0;
    margin-right: 10px;
    color: white;
    font-size: 40px;
  }
`;

const Span = styled.div`
  color: white;
  font-weight: 500;
  font-size: 17px;
  color: white;
  /* background-color: white; */
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 40px;
  }
  margin-right: 10px;
  padding: 6px;
  cursor: pointer;
`;

const Button4 = styled.div`
  @media screen and (min-width: 300px) and (max-width: 500px) {
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }

  @media screen and (max-width: 768px) {
    border-radius: 4px;
    border-radius: 4px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 29px;
    width: 48%;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    margin-left: 15px;
    font-weight: 500;
    color: white;
    :hover {
      border-bottom: 1px solid #2a1854;
      color: #2a1854;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    color: white;
  }
`;

const Handbuggermenu = styled.div`
  position: absolute;
  padding-top: 20px;
  top: 80px;
  width: 100%;
  background-color: #031e3b;
  display: none;
  z-index: 9999;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    display: block;
    height: 500px;
    /* margin-top: 2px; */
  }
  @media screen and (max-width: 768px) {
    display: block;
    height: 100vh;
  }
`;

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  color: white;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #fff;
  }
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 150px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 100px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    margin-right: 140px;
  }
`;

const Wrapper = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  justify-content: space-evenly;
  background-color: ${(props) => props.bg};
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
  /* padding-top: 5px; */
  /* margin-top: 100px; */
  z-index: 999999;
  /* top: 0; */
  height: 65px;
  background-color: #031e3b;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: space-evenly;
  /* border-bottom: 1px whitesmoke; */
  /* align-items: center; */
`;
