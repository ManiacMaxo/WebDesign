import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from './components'

const Home = React.lazy(() => import('./pages/Home'))
const News = React.lazy(() => import('./pages/News'))
const Error = React.lazy(() => import('./pages/Error'))

const App = () => {
    return (
        <Suspense fallback='loading...'>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/news'>
                    <News />
                </Route>
                <Route path='/'>
                    <Error code={404} />
                </Route>
            </Switch>
            <Footer />
        </Suspense>
    )
}

export default App
