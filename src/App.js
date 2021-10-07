
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBar } from '@material-ui/core'
//Components
import Navbar from './components/nav/navbar'

import './index.css'

import AllPosts from './pages/all posts/AllPosts'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact';

const App = () => {
    return (
        <div className='container'>
            <Router>
                <AppBar color='inherit' >
                    <Navbar />
                </AppBar>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path="/allposts" component={AllPosts} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
                
            </Router>
        </div>
    )
}

export default App
