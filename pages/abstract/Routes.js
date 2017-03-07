import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../App'
import PageOne from '../PageOne'
import PageTwo from '../PageTwo'

function requireAuth(nextState, replaceState) {
    /*
        if not logged on, call replaceState("/login");
    */
}

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={PageOne}/>
        <Route path="/pageOne" component={PageOne}/>
        <Route path="/pageTwo" component={PageTwo} onEnter={requireAuth}/>
    </Route>
)
