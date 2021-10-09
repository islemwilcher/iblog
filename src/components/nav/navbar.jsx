import React from 'react'
import Logo from './logo.jpg';
import styled from 'styled-components';
import Burger from './Burger'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    background-color: white;
    width: 100%;
    padding: 10px 40px;
    align-items: center;
    text-align:center;
    display: flex;
    justify-content: space-between;
    height:auto;
    box-shadow: 2px 2px 6px grey;

    .logo {
        width: 60px;
        display: flex;
        align-items: center;

        img{
            border-radius: 50%;
        }
    }
`

const Navbar = () => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '35px',
        marginLeft: '20px',
        marginBottom: '5px'
    };
    return (
        <Nav>
            <div className="logo">
                <Link to='/'>
                    <img src={Logo} alt="logo" width="60px" height="60px" />
                </Link>
                <Link style={navStyle} to='/'>iBlog</Link>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar
