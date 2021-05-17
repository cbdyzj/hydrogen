// noinspection JSCheckFunctionSignatures

import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom'
import Hydrogen from './components/Hydrogen.jsx'

function Launcher(props) {

    return (
        <Hydrogen>
            <nav className="flex flex-col">
                <Link className="no-underline text-black text-lg font-medium"
                      to="/colors">Colors</Link>
                <Link className="no-underline text-black text-lg font-medium"
                      to="/container">Container</Link>
            </nav>
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

const ColorList = lazy(() => import('./pages/ColorList/ColorList.jsx'))
const Timer = lazy(() => import('./pages/Timer/Timer.jsx'))
const Container = lazy(() => import('./pages/Container/Container.jsx'))

export default function App() {
    return (
        <Router>
            <Suspense fallback={<Hydrogen>Loading...</Hydrogen>}>
                <Switch>
                    <Route path="/" exact><Launcher /></Route>
                    <Route path="/colors"><ColorList /></Route>
                    <Route path="/container"><Container /></Route>
                    <Route path="/timer"><Timer /></Route>
                    <Route path="*"><NoMatch /></Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

