import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Menu from './components/Menu';
import PageLoader from './components/PageLoader'
import ResetCSS from 'ResetCSS';

const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

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
      <ResetCSS></ResetCSS>
      <Menu></Menu>
      <Suspense fallback={<PageLoader />}>
        <Switch>
            <Route path="" exact>
              <Home />
            </Route>
            <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )

}

export default React.memo(App)