
import { Route, Redirect } from 'react-router-dom'

const Protectedroute = ({ component: Component, ...restOfProps }) => {

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Route
            {...restOfProps}
            render = {(props) => 
                user ? <Component {...props} /> : <Redirect to='/signin' />
            }
        />
    )
}

export default Protectedroute
