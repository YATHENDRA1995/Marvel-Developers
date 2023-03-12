import { BoldText, SixColumns } from "../../../styles/sharedStyles";
import {
  FooterContainer,
  LinkDivision,
  TypeHeading,
  TypeLink,
  TypeLinkCont,
} from "./Footer.style";
import LogoImage from "../../../assets/images/logo-white.svg";
import { footerItems } from "../../../utilities/data";

const Footer = () => {
  return (
    <FooterContainer>
      <SixColumns>
        <img src={LogoImage} alt="" />
        {footerItems?.map((item) => (
          <FooterType
            key={item?.heading}
            heading={item?.heading}
            links={item?.navlinks}
          />
        ))}
      </SixColumns>
    </FooterContainer>
  );
};

export default Footer;

const FooterType = (props) => {
  const { heading, links } = props;
  return (
    <LinkDivision>
      <TypeHeading>
        <BoldText>{heading}</BoldText>
      </TypeHeading>
      <TypeLinkCont>
        {links?.map((item) => (
          <TypeLink key={item.key}>{item.label}</TypeLink>
        ))}
      </TypeLinkCont>
    </LinkDivision>
  );
};
