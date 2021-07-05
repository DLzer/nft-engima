import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import BaseLayout from 'components/layout/BaseLayout'

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

  @media (min-width: 968px) {
    background-image: url('/images/egg/3.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  @media (min-width: 567px) {
    & > div {
      grid-column: span 8;
    }
  }

  @media (min-width: 968px) {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {

    return (
        <Page>
            <Hero>
                <h1>NFT Enigma</h1>
            </Hero>
            <div>
              <Cards>
                <div>Card Testing</div>
              </Cards>
            </div>
        </Page>
    )
}

export default Home