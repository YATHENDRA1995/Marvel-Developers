import {
  BoldText,
  Description,
  ThreeColumns,
  Title,
} from "../../../../styles/sharedStyles";
import {
  CardDescription,
  CardDiv,
  CardImage,
  CardTitle,
  FeatureCardContainer,
  FeaturesContainer,
  FeaturesHeader,
} from "./Features.style";
import RestApiImage from "../../../../assets/images/apiTeam.png";
import GraphQLImage from "../../../../assets/images/graphQL.png";
import SuperChargeImage from "../../../../assets/images/superchargeWorkflow.png";

const Features = () => {
  return (
    <FeaturesContainer>
      <FeaturesHeader>
        <Title>Experience the freedom to build features, right away.</Title>
        <Description>
          You can now harness components of our platform and build powerful
          integrations for our 2 million users - or simply just for your team.
        </Description>
      </FeaturesHeader>
      <FeatureCardContainer>
        <ThreeColumns>
          <Card
            image={RestApiImage}
            title={"Dedicated API Team"}
            description={
              "Our team are available for user's questions via our Slack Developer community and Email"
            }
          />
          <Card
            image={GraphQLImage}
            title={"Our API uses Graph QL"}
            description={
              "No handling server side. Get many API's responses in a single request."
            }
          />
          <Card
            image={SuperChargeImage}
            title={"Supercharge your workflow"}
            description={
              "Automate workflows, integrate and analyze data and take Marvel to the next level."
            }
          />
        </ThreeColumns>
      </FeatureCardContainer>
    </FeaturesContainer>
  );
};

export default Features;

const Card = (props) => {
  const { image, title, description } = props;
  return (
    <CardDiv>
      <CardImage>
        <img src={image} alt="" />
      </CardImage>
      <CardTitle><BoldText>{title}</BoldText></CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardDiv>
  );
};
