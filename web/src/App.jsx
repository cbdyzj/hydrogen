// noinspection JSCheckFunctionSignatures

import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom'
import Hydrogen from './components/Hydrogen.jsx'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .75rem;
`

const NavButton = styled.button`
  color: #000;
  border: solid 2px #000;
  border-radius: 2px;
  background-color: #fff;
  font-size: 1.25rem;
  line-height: 1.75rem;
  min-height: 2.5rem;
  min-width: 9rem;
  padding: 0 1.5rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
  
  &:hover {
    color: #fff;
    background-color: #000;
  }

  &:active {
    transform: scale(0.95, 0.95);
    color: #fff;
    background-color: #000;
  }
`

function Launcher(props) {

    return (
        <Hydrogen>
            <Nav>
                <Link to="/color">
                    <NavButton>Colors</NavButton>
                </Link>
                <Link to="/container">
                    <NavButton>Container</NavButton>
                </Link>
                <Link to="/text">
                    <NavButton>Text Size</NavButton>
                </Link>
                <Link to="/font">
                    <NavButton>Text Font</NavButton>
                </Link>
            </Nav>
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
const Container = lazy(() => import('./pages/Container/Container.jsx'))
const TextSize = lazy(() => import('./pages/TextSize/TextSize.jsx'))
const TextFont = lazy(() => import('./pages/TextFont/TextFont.jsx'))
const Timer = lazy(() => import('./pages/Timer/Timer.jsx'))

export default function App() {
    return (
        <Router>
            <Suspense fallback={<Hydrogen>Loading...</Hydrogen>}>
                <Switch>
                    <Route path="/" exact><Launcher /></Route>
                    <Route path="/color"><ColorList /></Route>
                    <Route path="/container"><Container /></Route>
                    <Route path="/text"><TextSize /></Route>
                    <Route path="/font"><TextFont /></Route>
                    <Route path="/timer"><Timer /></Route>
                    <Route path="*"><NoMatch /></Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

