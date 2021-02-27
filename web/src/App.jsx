import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { setListener } from './bridge'
import { noop } from './utils/functions'

const ColorList = lazy(() => import('./pages/ColorList/ColorList'))

setListener((message) => {
    console.log('receive message: ' + message)
    return 'OK'
})

function Hydrogen(props) {

    const history = useHistory()

    function handleClick(ev) {
        if (typeof props.onClick === 'function') {
            props.onClick(ev)
            return
        }
        history.push('/colors')
    }

    return (
        <div id="hydrogen">
            <img onClick={handleClick} src="./hydrogen.svg" alt="hydrogen" />
            <div className="text-center text-black">
                {props.children}
            </div>
        </div>
    )
}

function NoMatch(props) {
    const location = useLocation()

    return (
        <Hydrogen onClick={noop}>
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

