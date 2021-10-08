
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>dashboard</h1>
            <Link to='/manageposts' >go to manage posts</Link>
        </div>
    )
}

export default Dashboard
