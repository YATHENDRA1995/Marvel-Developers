import styled from "styled-components";
import { screenSizes } from "../../../../utilities/helpers";

export const PartnerContainer = styled.div`
  width: 100%;
`
export const PartnerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  @media (max-width: ${screenSizes.md}px) {
    align-items: center;
    text-align: center;
    padding: 32px 0px;
  }
`
export const PartnerImage = styled.div`
  img {
    width: 100%;
  }
`

export const PartnerButtons = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: ${screenSizes.md}px) {
    flex-direction: column;
  }
`
