import styled from "styled-components";
import { screenSizes } from "../../../../utilities/helpers";

export const BannerContainer = styled.div`
  width: 100%;
`
export const BannerText = styled.div`
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
export const BannerImage = styled.div`
  img {
    width: 100%;
  }
`
export const BannerButtons = styled.div`
  display: flex;
  gap: 24px;
`
