import {
  CustomGitHUb,
  CustomLinkedIn,
  CustomTwitter,
  FooterContainer,
  FooterSecret,
  IconAnchor,
  IconContainer
} from './footer.styles.jsx';

import React from 'react';
import { connect } from 'react-redux';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSecret>Contact me</FooterSecret>
      <IconContainer>
        <IconAnchor
          href={'https://github.com/0xCozart'}
          target={'_blank'}
          referrerPolicy="noreferrer noopener"
          title={'Connect to my code!'}
        >
          <CustomGitHUb size={'3em'} />
        </IconAnchor>
        {/* <IconAnchor
          href={'https://www.linkedin.com/in/alan-vega/'}
          target={'_blank'}
          referrerPolicy="noreferrer noopener"
          title={'Connect to my professional profile!'}
        >
          <CustomLinkedIn size={'3em'} />
        </IconAnchor> */}
        {/* <IconAnchor
          href={'https://twitter.com/Bank'}
          target={'_blank'}
          referrerPolicy="noreferrer noopener"
          title={'Connect to my less professional profile! :D'}
        > */}
        {/* <CustomTwitter size={'3em'} />
        </IconAnchor> */}
      </IconContainer>
    </FooterContainer>
  );
};

const mapStatehrefProps = (state) => ({});

const mapDispatchhrefProps = {};

export default connect(mapStatehrefProps, mapDispatchhrefProps)(Footer);
