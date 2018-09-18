import React, { Component } from 'react';
import { withPrefix } from 'gatsby-link';
import { connect } from 'react-redux';
import { Router, navigate } from '@reach/router';

import auth from '../../utils/auth';
import { toggleMainNav as toggleMainNavAction } from '../../state/app';
import MainNav from '../main-nav/MainNav';
import MegaMenu from '../mega-menu/MegaMenu';
import * as SC from './navbar_styles';


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    let user = auth.currentUser();
    user.logout()
        .then((response) => {
          navigate('');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    return (
      <SC.Container>
        <SC.BrandWrapper>
          <SC.MainNavButton
            onClick={() => { this.props.toggleMainNav(true) }}
            type='button'
          >
            <SC.HamburgerIcon>
              <div></div>
              <div className='small'></div>
              <div></div>
            </SC.HamburgerIcon>
          </SC.MainNavButton>
          <SC.HomeLink
            to='/'
          >
            <SC.Logo
              alt='T A logo'
              src={ withPrefix('/images/logo.svg') }
            />
          </SC.HomeLink>
          {/*<Router>
            <div path='/'>
            </div>
            <div path='/kitchen'>
              <SC.HomeLink
                to='/kitchen'
              >
                <SC.Logo
                  alt='T A logo'
                  src={ withPrefix('/images/logo.svg') }
                />
                <SC.SectionName >
                  Kitchen
                </SC.SectionName>
              </SC.HomeLink>
            </div>
          </Router>*/}
        </SC.BrandWrapper>
        <SC.MenuWrapper>
          <MegaMenu />
          {/* auth.currentUser() && <button onClick={() => { this.signOut() }}>Sign out</button> */}
        </SC.MenuWrapper>
        { this.props.isMainNavVisible && <MainNav /> }
      </SC.Container>
    );
  }
}


export default connect(
  state => ({ isMainNavVisible: state.app.isMainNavVisible }),
  dispatch => ({ toggleMainNav: visible => dispatch(toggleMainNavAction(visible)) }),
)(Navbar);
