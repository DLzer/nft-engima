import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3ba.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/3.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Home: React.FC = () => {

    return (
        <Page>
            <Hero>
                <h1>NFT Enigma</h1>
            </Hero>
        </Page>
    )
}

export default Home