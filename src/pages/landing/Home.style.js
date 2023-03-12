import styled from "styled-components";
import { screenSizes } from "../../utilities/helpers";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 32px 64px;
  @media (max-width: ${screenSizes.md}px) {
    padding: 32px 8px;
  }
`