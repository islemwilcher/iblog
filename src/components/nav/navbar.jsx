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
    box-shadow: 2px 2px 6px grey;

    .logo {
        width: 60px;
        display: flex;
        align-items: center;

        img{
            border-radius: 50%;
        }
        
        h3{
            margin-left: 20px;
            font-weight: 400;
            font-size: 35px;
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
