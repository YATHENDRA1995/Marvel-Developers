import styled from "styled-components";

export const FeaturesContainer = styled.div`
  width: 100%;
  padding: 64px 0px;
`
export const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  h1 {
    max-width: 650px;
    text-align: center;
  }
  p {
    max-width: 650px;
    text-align: center;
  }
`
export const FeatureCardContainer = styled.div`
  padding: 40px 0px;
`
export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
`
export const CardImage = styled.div`
  img {
    width: 100%;
  }
`
export const CardTitle = styled.div`
  font-size: 24px;
`
export const CardDescription = styled.div`
  text-align: center;
  opacity: 0.9;
`
