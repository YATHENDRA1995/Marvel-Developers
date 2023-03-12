import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 64px;
`
export const LinkDivision = styled.div``

export const TypeHeading = styled.div`
  padding-bottom: 16px;
  font-size: 20px;
`
export const TypeLinkCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TypeLink = styled.div`
  font-size: 14px;
  &:hover {
    opacity: 0.9;
    text-decoration: underline;
    cursor: pointer;
  }
`