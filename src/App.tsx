import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
import Menu from './components/Menu';
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./views/Home'))

const App: React.FC = () => {
  // const { account, connect } = useWallet()
  // useEffect(() => {
  //   if (!account && window.localStorage.getItem('accountStatus')) {
  //     connect('injected')
  //   }
  // }, [account, connect])

  // useFetchPublicData()

  return (
    <Router>
      <Menu>
        <Suspense fallback={<PageLoader />}>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
        </Switch>
        </Suspense>
      </Menu>
    </Router>
  )

}

export default React.memo(App)