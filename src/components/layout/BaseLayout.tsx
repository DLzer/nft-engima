import styled from "styled-components";

const BaseLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }
  @media (min-width: 852px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
  @media (min-width: 968px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
`;

export default BaseLayout;