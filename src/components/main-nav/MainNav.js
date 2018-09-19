import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toggleMainNav as toggleMainNavAction } from '../../state/app';
import * as SC from './mainNav_styles';


class MainNav extends Component {
  constructor(props){
    super(props);

    this.escToClose = this.escToClose.bind(this);
  }

  escToClose(event) {
    if (event.keyCode === 27) {
      this.props.toggleMainNav(false);
    }
  }

  // Prevent scroll and start listening for ESC
  componentDidMount() {
    document.getElementsByTagName('body')[0].classList.toggle('noscroll');
    document.getElementsByTagName('body')[0].addEventListener(
      'touchmove',
      (e) => { e.preventDefault() },
      false
    );
    
    document.addEventListener(
      'keydown',
      this.escToClose,
      false
    );
  }

  // Restore scroll and stop listening for ESC
  componentWillUnmount() {
    document.getElementsByTagName('body')[0].classList.toggle('noscroll');
    document.getElementsByTagName('body')[0].removeEventListener(
      'touchmove',
      (e) => { e.preventDefault() },
      false
    );
    
    document.removeEventListener(
      'keydown',
      this.escToClose,
      false
    );
  }

  render() {
    let currentYear = (new Date()).getFullYear();

    return (
      <div>
        <SC.Overlay
          onClick={() => { this.props.toggleMainNav(false) }}
        />
        <SC.Container>
          <SC.TopBar>
            <SC.CloseButton
              onClick={() => { this.props.toggleMainNav(false) }}
              type='button'
            >
            </SC.CloseButton>
            <SC.CloseLabel>
              Close
            </SC.CloseLabel>
          </SC.TopBar>
          <SC.NavLayout>
            <SC.Work>
              <Link
                onClick={() => { this.props.toggleMainNav(false) }}
                to='/'
              >
                <SC.Title>
                  Work
                </SC.Title>
              </Link>
            </SC.Work>
            <SC.Kitchen>
              <Link
                onClick={() => { this.props.toggleMainNav(false) }}
                to='/kitchen'
              >
                <SC.Title>
                  Kitchen
                </SC.Title>
              </Link>
            </SC.Kitchen>
            <SC.Yoga>
              <SC.Title>
                Yoga
              </SC.Title>
            </SC.Yoga>
            <SC.Social>
              <SC.SocialTile
                href='https://linkedin.com/in/teaganatwater'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SC.SocialIcon>
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </SC.SocialIcon>
                <SC.SocialText>
                  <h3>Work I've done</h3>
                  <span>on LinkedIn</span>
                </SC.SocialText>
              </SC.SocialTile>
              <SC.SocialTile
                href='https://github.com/tatwater'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SC.SocialIcon>
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </SC.SocialIcon>
                <SC.SocialText>
                  <h3>My technical side</h3>
                  <span>on GitHub</span>
                </SC.SocialText>
              </SC.SocialTile>
              <SC.SocialTile
                href='https://dribbble.com/tatwater'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SC.SocialIcon>
                  <FontAwesomeIcon icon={['fab', 'dribbble']} />
                </SC.SocialIcon>
                <SC.SocialText>
                  <h3>My visual side</h3>
                  <span>on Dribbble</span>
                </SC.SocialText>
              </SC.SocialTile>
              <SC.SocialTile
                href='https://www.instagram.com/teaganskitchen/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SC.SocialIcon>
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </SC.SocialIcon>
                <SC.SocialText>
                  <h3>Food I'm making</h3>
                  <span>on Instagram</span>
                </SC.SocialText>
              </SC.SocialTile>
              <SC.SocialTile
                href='https://open.spotify.com/user/nagaant'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SC.SocialIcon>
                  <FontAwesomeIcon icon={['fab', 'spotify']} />
                </SC.SocialIcon>
                <SC.SocialText>
                  <h3>Music I'm listening to</h3>
                  <span>on Spotify</span>
                </SC.SocialText>
              </SC.SocialTile>
            </SC.Social>
            <SC.Footer>
              <SC.TextWrapper>
                <div>Made with {' '}<FontAwesomeIcon icon={['fas', 'heart']} />{' '} in Boston, MA</div>
                <div>Copyright &copy; { currentYear }</div>
              </SC.TextWrapper>
              <SC.EmailButton
                href='mailto:desk@teaganatwater.com'
              >
                <FontAwesomeIcon icon={['fal', 'envelope']} />
              </SC.EmailButton>
            </SC.Footer>
          </SC.NavLayout>
        </SC.Container>
      </div>
    );
  }
}


export default connect(
  state => ({ isMainNavVisible: state.app.isMainNavVisible }),
  dispatch => ({ toggleMainNav: visible => dispatch(toggleMainNavAction(visible)) }),
)(MainNav);
