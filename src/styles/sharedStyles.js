import styled from "styled-components";
import { screenSizes } from "../utilities/helpers";
import { customColors } from "./theme";

export const BoldText = styled.span`
  font-weight: bold;
`
export const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  padding: ${({ padding }) => padding ? padding: '8px 12px'};
  background: ${({ variant, theme }) => variant === 'primary' ? theme?.primary : variant === 'secondary' ? theme?.secondary : 'transparent'};
  color: ${({ variant, theme }) => variant === 'primary' ? theme?.textColor : variant === 'secondary' ? customColors?.black : theme?.textColor};
  border: 1px solid ${({ variant, theme }) => variant === 'primary' ? theme?.primary : variant === 'secondary' ? theme?.secondary : customColors?.white};

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
  &:hover {
    transform: scale(1.05);
  }
`
export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  width: 100%;
  @media (max-width: ${screenSizes.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  width: 100%;
  @media (max-width: ${screenSizes.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${screenSizes.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const SixColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  width: 100%;
  @media (max-width: ${screenSizes.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${screenSizes.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const Title = styled.h1`
  font-size: 36px;
  line-height: 48px;
`
export const Description = styled.p`
  font-size: 24px;
  line-height: 36px;
`