import React from 'react'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { Provider } from 'react-redux'
import getRpcUrl from 'utils/getRpcUrl'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'

const Providers: React.FC = ({ children }) => {
    const rpcUrl = getRpcUrl()
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID);
    return (
      <Provider store={store}>
            <bsc.UseWalletProvider
              chainId={chainId}
              connectors={{
                walletconnect: { rpcUrl },
                bsc,
              }}
            >
              <BlockContextProvider>
                <RefreshContextProvider>
                </RefreshContextProvider>
              </BlockContextProvider>
            </bsc.UseWalletProvider>
      </Provider>
    )
  }
  
  export default Providers