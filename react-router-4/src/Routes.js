import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';
import App from './App';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();



const CustomRoutes = () => (

    <Router history={customHistory}>
        <div>
            <Navbar />


            <hr />


            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/contact/:rollnumber' component={Contact} />


        </div>
    </Router>

)

export default CustomRoutes;