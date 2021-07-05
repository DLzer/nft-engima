import styled from 'styled-components'
import Container from './Container'

const Page = styled(Container)`
  min-height: calc(100vh - 64px);
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: 576px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media (min-width: 968px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

export default Page
