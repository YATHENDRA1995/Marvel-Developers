import {
  BoldText,
  Description,
  StyledButton,
  Title,
  TwoColumns,
} from "../../../../styles/sharedStyles";
import {
  BannerButtons,
  BannerContainer,
  BannerImage,
  BannerText,
} from "./Banner.style";
import BannerImg from "../../../../assets/images/illustration.png";

const Banner = () => {
  return (
    <BannerContainer>
      <TwoColumns>
        <BannerText>
          <Title>Let's build the feature of design, now.</Title>
          <Description>
            Create amazing tools and integrations for 1 million users or
            customize Marvel for your team.
          </Description>
          <BannerButtons>
            <StyledButton variant="primary" padding="8px 24px">
              <BoldText>Submit your app</BoldText>
            </StyledButton>
            <StyledButton variant="secondary" padding="8px 24px">
              <BoldText>View API Docs</BoldText>
            </StyledButton>
          </BannerButtons>
        </BannerText>
        <BannerImage>
          <img src={BannerImg} alt="" />
        </BannerImage>
      </TwoColumns>
    </BannerContainer>
  );
};

export default Banner;
