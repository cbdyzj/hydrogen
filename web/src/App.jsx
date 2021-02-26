import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { postMessage, setListener } from './bridge'

const ColorList = lazy(() => import('./pages/ColorList/ColorList'))

setListener((message) => {
    console.log('receive message: ' + message)
    return 'OK'
})

function Hydrogen(props) {
    return (
        <div id="hydrogen">
            <img src="./hydrogen.svg" alt="hydrogen" />
            <div className="text-center text-black">
                {props.children}
            </div>
        </div>
    )
}

function NoMatch(props) {
    const location = useLocation()
    return (
        <Hydrogen>
            No match for <code>{location.pathname}</code>
        </Hydrogen>
    )
}

export default function App() {
    return (
        <Router>
            <Suspense fallback={<Hydrogen>Loading...</Hydrogen>}>
                <Switch>
                    <Route path="/" exact><Hydrogen>Hydrogen</Hydrogen></Route>
                    <Route path="/colors"><ColorList /></Route>
                    <Route path="*"><NoMatch /></Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

