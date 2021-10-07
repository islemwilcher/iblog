
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        z-index: 19;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top:0;
        right:0;
        height:100vh;
        width:100%;
        padding-top: 2.5rem;
        color:black;
        justify-content: space-evenly;     
        transition: 0.4s ease-in-out;

        li:hover{
            margin: 0 90px 5px 90px;
            color: rgb(136, 165, 219);
        }
        
    }
`;
    
const rightNav = ({ open }) => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    
    return (
        <Ul open = {open}>
            <Link style={navStyle} to="/" ><li>Home</li></Link>
            <Link style={navStyle} to="/allposts"><li>All Posts</li></Link>
            <Link style={navStyle} to="/about"><li>About</li></Link>
            <Link style={navStyle} to="/contact"><li>contact</li></Link>
        </Ul>
    )
}

export default rightNav
