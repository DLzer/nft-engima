import styled from "styled-components";
import BaseLayout from "./BaseLayout";

const CardsLayout = styled(BaseLayout)`
  & > div {
    grid-column: span 6;
    @media (min-width: 576px) {{
      grid-column: span 4;
    }
  }
`;

export default CardsLayout;