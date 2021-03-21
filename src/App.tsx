import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { Footer, Header } from './components'

const Home = React.lazy(() => import('./pages/Home'))
const News = React.lazy(() => import('./pages/News'))
const Join = React.lazy(() => import('./pages/Join'))
const Team = React.lazy(() => import('./pages/Team'))
const Error = React.lazy(() => import('./pages/Error'))

const App = () => {
    return (
        <Suspense
            fallback={
                <Loader inverted size='big'>
                    Loading
                </Loader>
            }
        >
            <Header />
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/news'>
                        <News />
                    </Route>
                    <Route exact path='/join'>
                        <Join />
                    </Route>
                    <Route exact path='/team/:slug'>
                        <Team />
                    </Route>
                    <Route path='/'>
                        <Error code={404} />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Suspense>
    )
}

export default App
