import React, {useState} from 'react'
import styled from 'styled-components'
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const COLORS = {
    primaryDark: "#115b4c",
    primaryLight: "#B6EDC8",
};

const MenuIcon = styled.div`
    background-color: ${COLORS.primaryLight};
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3s);
    text-align: center;
    `;

const Icon = styled.div`
    display: block;
    margin-top: 15px;
    justify-content: center;
`;

const NavBackground = styled.div`position: fixed;
    bottom: 15rem;
    right: 15rem;
    z-index: 600;
    background-image: radial-gradient(
        ${COLORS.primaryDark},
        ${COLORS.primaryLight}
    );
    height: 3rem;
    width: 3rem;
    border-radius: 50%;

    transform: ${(props) => (props.clicked ? "scale(10)":"scale(0)")};
    transition: transform 0.8s;
    @media screen and (max-width: 768px){
        transform: ${(props) => (props.clicked ? "scale(8)":"scale(0)")};
        transition: transform 0.8s;
    }
    @media screen and (max-width: 480px){
        height: 2rem;
        width: 2rem;
        bottom: 12rem;
        right: 10rem;
        transform: ${(props) => (props.clicked ? "scale(10)":"scale(0)")};
        transition: transform 0.8s;
    }
`;
const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props)=> (props.clicked? "100%":"0")};
    opacity: ${(props)=> (props.clicked? "1":"0")};
    transition: width 0.8s, opacity 0.8s;
    `;

const List = styled.ul`
    position: absolute;
    top: 55%;
    left: 77%;
    list-style: none;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    @media screen and (max-width: 768px){
        left: 60%;
    }
    @media screen and (max-width: 480px){
        top:65%;
        left: 50%;
    }
`;

const ItemLink = styled(NavLink)`
    display: inline-block;
    font-size: 15px;
    font-weight: 300;
    text-decoration: none;
    color:${COLORS.primaryLight};
    padding: 1rem 2rem;

    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    &:hover, &:active{
        background-position: 100%;
        color: ${COLORS.primaryDark};
        transform: translateX(1rem);
    }
`;
const HMenu = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
           <MenuIcon onClick={handleClick}>
               <Icon clicked={click}>
                   {click ? <FaTimes /> : <FaBars />}
               </Icon>   
            </MenuIcon> 
            <NavBackground clicked={click}>&nbsp;</NavBackground>
            <Navigation clicked={click}>
                <List>
                    <li>
                        <ItemLink onClick={handleClick} to="/">Home</ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/">About</ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/">Services</ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/">Discover</ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/">Contact Us</ItemLink>
                    </li>
                </List>
            </Navigation>
        </>
    )
}

export default HMenu
