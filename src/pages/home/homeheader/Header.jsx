import { Typography } from "@material-ui/core";
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

import './header.css'

const Header = () => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    return (
        <div className="header">
            <Typography className="typography" variant='h4' >Education, Tips <br />
            Web Development, Software Engineering</Typography>
            <Link style={navStyle} className="link" to ='iblog/allposts'>
                <h4>see posts</h4>
            <BsArrowRight />
            </Link>
        </div>
    )
}

export default Header
