import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, useLocation, useHistory } from 'react-router-dom'
import Hydrogen from './components/Hydrogen'

function Launcher(props) {

    const history = useHistory()

    function handleClick(ev) {
        history.push('/colors')
    }

    return (
        <Hydrogen onClick={handleClick}>
            Hydrogen
        </Hydrogen>
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

const ColorList = lazy(() => import('./pages/ColorList/ColorList'))
const Timer = lazy(() => import('./pages/Timer/Timer'))

export default function App() {
    return (
        <Router>
            <Suspense fallback={<Hydrogen>Loading...</Hydrogen>}>
                <Switch>
                    <Route path="/" exact><Launcher /></Route>
                    <Route path="/colors"><ColorList /></Route>
                    <Route path="/timer"><Timer /></Route>
                    <Route path="*"><NoMatch /></Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

