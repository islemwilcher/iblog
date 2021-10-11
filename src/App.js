
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Navbar from './components/nav/navbar'
import Protectedroute from './components/protectedroute/Protectedroute'

import './index.css'

//pages
import Dashboard from './pages/dashboard/Dashboard'
import AllPosts from './pages/all posts/AllPosts'
import Home from './pages/home/Home'
import About from './pages/about/About'
import signin from './pages/signin/signin'
import ManagePosts from './pages/admin/manageposts/ManagePosts';
import PostDetails from './pages/postdetails/PostDetails'

const App = () => {
    return (
        <div className='container'>
            <Router>
                    <Navbar />
                <Switch>
                    <Protectedroute exact path='/iblog/dashboard' component={Dashboard} />
                    <Protectedroute exact path='/iblog/manageposts' component={ManagePosts} />
                    <Route path="/" exact component={() => <Redirect to="/iblog" />} />
                    <Route path='/iblog' exact component={Home} />
                    <Route path='/iblog/posts/:id' exact component={PostDetails} />
                    <Route path="/iblog/allposts" component={AllPosts} />
                    <Route path='/iblog/about' component={About} />
                    <Route path='/iblog/signin' component={signin} />
                </Switch>
                
            </Router>
        </div>
    )
}

export default App
