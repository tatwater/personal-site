import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

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
            <SC.Social></SC.Social>
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
