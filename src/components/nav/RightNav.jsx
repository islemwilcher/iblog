
import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import * as actionType from '../../constants/actiontype'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-left: auto;
    
    li {
        padding: 0 25px;
        font-size: 20px;
        font-weight: 400;
        color : black;

    }
    li:hover{
        color: rgb(136, 165, 219);
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        z-index: 20;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top:0;
        right:0;
        height:100vh;
        width:100%;
        padding-top: 2.5rem;
        color:black;
        background-color: white;
        justify-content: space-evenly;     
        transition: 0.4s ease-in-out;

        li:hover{
            margin: 0 90px 5px 90px;
            color: rgb(136, 165, 219);
        }
        
    }
`;
    
const RightNav = ({ open, setOpen }) => {

    

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/signin');
    
        setUser(null);
    };

    useEffect(() => {
    const token = user?.token;

    if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    
    return (
        <>
        <Ul open = {open}>
            <Link style={navStyle} to="/iblog" ><li>Home</li></Link>
            <Link style={navStyle} to="/iblog/allposts"><li>All Posts</li></Link>
            <Link style={navStyle} to="/iblog/about" ><li>About</li></Link>
            {user
                ? <Link style={navStyle} to="/dashboard"><li>Dashboard</li></Link>
                : null
            }
            
            <Link style={navStyle} to="/iblog/signin"><li>
                {user
                    ? <Button variant="contained" size='small' color='secondary' onClick={logout}>Log out</Button> 
                    : <Button variant="contained" size='small' color='primary' >Sign in</Button>
                }</li></Link>
        </Ul>
        </>
    )
}

export default RightNav
