import React, { ReactNode, VoidFunctionComponent } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai";
import {
  ContactIcon,
  ContactLine,
  FooterBottom1,
  FooterBottom2,
  FooterBottomWrapper,
  FooterSection,
  FooterSectionTitle,
  FooterSocialIcon,
  FooterSocialIcons,
  FooterSocialLinks,
  FooterWrapper,
} from "./FooterComponents";

const footerSocial = [
  {
    name: "Facebook",
    linkTo: "https://www.facebook.com",
  },
  {
    name: "Linked In",
    linkTo: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    linkTo: "https://www.youtube.com",
  },
  {
    name: "Vimeo",
    linkTo: "https://www.vimeo.com",
  },
  {
    name: "Skype",
    linkTo: "https://www.skype.com",
  },
];

type FooterProps = {
  navLinks: ReactNode[];
};

const Footer: VoidFunctionComponent<FooterProps> = ({ navLinks }) => {
  const footerSocialElements: ReactNode[] = footerSocial.map((item) => {
    return (
      <FooterSocialLinks href={item.linkTo} key={`SocialLink${item.name}`}>
        {item.name}
      </FooterSocialLinks>
    );
  });

  return (
    <>
      <FooterWrapper>
        <FooterSection>
          <FooterSectionTitle>Contact</FooterSectionTitle>
          <ContactLine>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            +(1) 824-5428
          </ContactLine>
          <ContactLine>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            Miami, United States
          </ContactLine>
          <ContactLine>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            yfuentes@shokworks.io
          </ContactLine>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>Our Company</FooterSectionTitle>
          {navLinks}
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>Social Contacts</FooterSectionTitle>
          {footerSocialElements}
        </FooterSection>
        <FooterSection>
          <FooterSection>
            <FooterSectionTitle>Address</FooterSectionTitle>
            Internet Systems Consortium, Inc. 950 Charter Street Redwood City,
            CA USA.
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>Follow Us</FooterSectionTitle>
            <FooterSocialIcons>
              <FooterSocialIcon $color="transparent linear-gradient(45deg, #6362D7 0%, #FF8FE2 100%) 0% 0% no-repeat padding-box;">
                <FaFacebookF />
              </FooterSocialIcon>
              <FooterSocialIcon $color="transparent linear-gradient(23deg, #00B56C 0%, #1DBE75 22%, #68D58C 68%, #9EE69D 100%) 0% 0% no-repeat padding-box;">
                <AiOutlineSkype />
              </FooterSocialIcon>
              <FooterSocialIcon $color="transparent linear-gradient(90deg, #FF9AB6 0%, #F03295 99%, #F03295 100%) 0% 0% no-repeat padding-box;">
                <FaLinkedinIn />
              </FooterSocialIcon>
              <FooterSocialIcon $color="transparent linear-gradient(47deg, #F09376 0%, #F0DB79 100%) 0% 0% no-repeat padding-box;">
                <FaInstagram />
              </FooterSocialIcon>
            </FooterSocialIcons>
          </FooterSection>
        </FooterSection>
      </FooterWrapper>
      <FooterBottomWrapper>
        <FooterBottom1 />
        <FooterBottom2 />
      </FooterBottomWrapper>
    </>
  );
};

export default Footer;
