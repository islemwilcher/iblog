
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/nav/navbar'
import Protectedroute from './components/protectedroute/Protectedroute'

import './index.css'

//pages
import Dashboard from './pages/dashboard/Dashboard'
import AllPosts from './pages/all posts/AllPosts'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import signin from './pages/signin/signin'
import ManagePosts from './pages/admin/manageposts/ManagePosts';


const App = () => {
    return (
        <div className='container'>
            <Router>
                    <Navbar />
                <Switch>
                    <Protectedroute exact path='/dashboard' component={Dashboard} />
                    <Protectedroute exact path='/manageposts' component={ManagePosts} />
                    <Route path='/' exact component={Home} />
                    <Route path="/allposts" component={AllPosts} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/signin' component={signin} />
                </Switch>
                
            </Router>
        </div>
    )
}

export default App
