import {
  BoldText,
  Description,
  StyledButton,
  Title,
  TwoColumns,
} from "../../../../styles/sharedStyles";
import { PartnerButtons, PartnerContainer, PartnerImage, PartnerText } from "./Partners.style";
import Showcase from "../../../../assets/images/showcase.png";

const Partners = () => {
  return (
    <PartnerContainer>
      <TwoColumns>
        <PartnerText>
          <Title>Showcase your app in our integrations directory</Title>
          <Description>
            Building something special? we're are always looking to work with
            partners who wants to help the world bring their ideas to life.
          </Description>
          <PartnerButtons>
            <StyledButton variant="secondary" padding="8px 24px">
              <BoldText>Become a partner</BoldText>
            </StyledButton>
            <StyledButton padding="8px 24px">
              <BoldText>View Integrations</BoldText>
            </StyledButton>
          </PartnerButtons>
        </PartnerText>
        <PartnerImage>
          <img src={Showcase} alt="" />
        </PartnerImage>
      </TwoColumns>
    </PartnerContainer>
  );
};

export default Partners;
