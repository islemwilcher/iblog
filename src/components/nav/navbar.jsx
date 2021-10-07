import React from 'react'
import Logo from './logo.jpg';
import styled from 'styled-components';
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    padding: 0 40px;
    align-items: center;
    text-align:center;
    display: flex;
    justify-content: space-between;
    height:12vh;

    .logo {
        width: 60px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        z-index:15;
        
        h3{
            margin-left: 20px;
        }
    }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <img src={Logo} alt="logo" width="60px" height="60px" />
                <h3>iBlog</h3>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar
