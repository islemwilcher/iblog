import { useState, useEffect } from 'react'

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

import Loading from './components/Loading';

const App = () => {

    const [done, setDone] = useState(false)
    const [completed, setCompleted] = useState(false)
    const type = 'bubbles'
    const color = 'black'
    const color0 = 'rgb(136, 165, 219)'

    useEffect(() => {
        setTimeout(() => {
            setDone(true)

            setTimeout(() => {
                setCompleted(true)
            }, 2500)
        }, 2000);
    }, []);

    return (
        <div className='container'>
            <Router>
                    <Navbar />
                <Switch>
                    <>
                    {!completed
                        ? (
                            <>
                                {!done
                                    ? <div className='center'><Loading type={type} color={color} /></div>
                                    : <div className='center'><Loading type={type} color={color0} /></div>
                                }  
                            </>
                        )
                        : (
                            <>
                                <Protectedroute exact path='/iblog/dashboard' component={Dashboard} />
                                <Protectedroute exact path='/iblog/manageposts' component={ManagePosts} />
                                <Route path="/" exact component={() => <Redirect to="/iblog" />} />    
                                <Route path='/iblog' exact component={Home} />
                                <Route path='/iblog/posts/:id' exact component={PostDetails} />
                                <Route path="/iblog/allposts" component={AllPosts} />
                                <Route path='/iblog/about' component={About} />
                                <Route path='/iblog/signin' component={signin} />
                            </>
                        )
                    }
                    </>
                </Switch>
            </Router>
        </div>
    )
}

export default App
