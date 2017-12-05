import {keyframes} from 'styled-components';


export const Animations = {
  bounce: keyframes`
    0% {
      transform: translate(0, -5px);
    }
    50% {
      transform: translate(0, 5px);
    }
    100% {
      transform: translate(0, -5px);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  loadHeadline: keyframes`
    from {
      left: -50px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
  loadName: keyframes`
    from {
      padding: 0 8px 0 10px;
    }
    to {
      padding: 0 6px 0 0;
    }
  `,
  loadNameLink: keyframes`
    from {
      left: 5px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
  loadTag: keyframes`
    from {
      left: -5px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
}

export const Breakpoints = {
  socialMediaSwitch: 'screen and (min-width: 760px) and (min-height: 600px)',
  beforeFirstFooterUnwrapWidth: 'screen and (max-width: 399px)',
  afterFirstFooterUnwrapWidth: 'screen and (min-width: 400px)',
  secondFooterUnwrapWidth: 'screen and (min-width: 900px)',
  firstFooterFontIncrease: 'screen and (min-width: 1000px)',
  secondFooterFontIncrease: 'screen and (min-width: 1200px) and (min-height: 600px)',
}

export const Colors = {
  brandPrimary: '#34495e',
  angelList: '#333333',
  dribbble: '#ea4c89',
  gitHub: '#5d267d',
  linkedIn: '#0077b5',
  medium: '#00ab6c',
}

export const Fonts = {
  mono: 'roboto-mono',
  sans: 'acumin-pro',
}
