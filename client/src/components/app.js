import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import AccountRoutes from './account';
import {Route, Switch} from 'react-router-dom';
import NotFound from './general/404';
import Nav from './nav';
import Home from './home';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <Nav/>
        <div className='container'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/account' component={AccountRoutes} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </div>
);

export default App;
