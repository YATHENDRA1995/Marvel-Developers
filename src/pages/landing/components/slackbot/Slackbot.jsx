import {
  BoldText,
  Description,
  StyledButton,
  Title,
  TwoColumns,
} from "../../../../styles/sharedStyles";
import BotImage from "../../../../assets/images/botbot.png";
import {
  SlackbotButtons,
  SlackbotContainer,
  SlackbotImage,
  SlackbotText,
} from "./Slackbot.style";

const Slackbot = () => {
  return (
    <SlackbotContainer>
      <TwoColumns>
        <SlackbotImage>
          <img src={BotImage} alt="" />
        </SlackbotImage>
        <SlackbotText>
          <Title>A Slack-bot for creating and managing prototypes</Title>
          <Description>
            Building something special? we're are always looking to work with
            partners who wants to help the world bring their ideas to life.
          </Description>
          <SlackbotButtons>
            <StyledButton variant="secondary" padding="8px 24px">
              <BoldText>Become a partner</BoldText>
            </StyledButton>
            <StyledButton padding="8px 24px">
              <BoldText>View Integrations</BoldText>
            </StyledButton>
          </SlackbotButtons>
        </SlackbotText>
      </TwoColumns>
    </SlackbotContainer>
  );
};

export default Slackbot;
