import React, { Component } from 'react';
import { withPrefix } from 'gatsby-link';
import { connect } from 'react-redux';
import { Router, navigate } from '@reach/router';

import auth from '../../utils/auth';
import { toggleMainNav as toggleMainNavAction } from '../../state/app';
import MainNav from '../main-nav/MainNav';
import MegaMenu from '../mega-menu/MegaMenu';
import * as SC from './navbar_styles';


const Brand = ({ name, to }) => (
  <SC.HomeLink
    to={ to }
  >
    <SC.Logo
      alt='T A logo'
      src={ withPrefix('/images/logo.svg') }
    />
    <SC.SectionName>
      { name }
    </SC.SectionName>
  </SC.HomeLink>
);

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
        <SC.SimplifiedNavbar>
          <SC.MainNavButton
            onClick={() => { this.props.toggleMainNav(true) }}
            type='button'
          >
            <SC.HamburgerIcon>
              <div /><div /><div />
            </SC.HamburgerIcon>
          </SC.MainNavButton>
          <Router>
            <Brand
              name='work'
              path='/'
              to='/'
            />
            <Brand
              name='kitchen'
              path='/kitchen/*'
              to='/kitchen'
            />
          </Router>
          <SC.SearchButton></SC.SearchButton>
        </SC.SimplifiedNavbar>
        <SC.ExpandedMenuWrapper>
          <Router>
            <MegaMenu
              path='/kitchen/*'
              tree='kitchen'
            />
          </Router>
        </SC.ExpandedMenuWrapper>
        { this.props.isMainNavVisible && <MainNav /> }
      </SC.Container>
    );
  }
}


export default connect(
  state => ({ isMainNavVisible: state.app.isMainNavVisible }),
  dispatch => ({ toggleMainNav: visible => dispatch(toggleMainNavAction(visible)) }),
)(Navbar);
