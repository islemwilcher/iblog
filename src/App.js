
import { BrowserRouter as Router } from 'react-router-dom';
import { AppBar } from '@material-ui/core'
//Components
import Navbar from './components/nav/navbar'

import './index.css'

const App = () => {
    return (
        <div className='container'>
            <Router>
                <AppBar color='inherit' >
                    <Navbar />
                </AppBar>
            </Router>
        </div>
    )
}

export default App
