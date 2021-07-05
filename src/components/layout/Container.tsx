import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 992px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 576px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`
export default Container
