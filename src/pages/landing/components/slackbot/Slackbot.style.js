import styled from "styled-components";
import { screenSizes } from "../../../../utilities/helpers";

export const SlackbotContainer = styled.div`
  width: 100%;
  padding: 104px 0px;
  @media (max-width: ${screenSizes.md}px) {
    padding: 64px 0px;
  }
`
export const SlackbotText = styled.div`
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
export const SlackbotImage = styled.div`
  img {
    width: 100%;
  }
`

export const SlackbotButtons = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: ${screenSizes.md}px) {
    flex-direction: column;
  }
`
