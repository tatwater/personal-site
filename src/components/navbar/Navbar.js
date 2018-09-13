import React, { Component } from 'react';
import Link, { push, withPrefix } from 'gatsby-link';
import { connect } from 'react-redux';

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
          push('');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    let sectionSlug = this.props.location.pathname.split('/')[1];
    let section;
    
    switch(sectionSlug) {
      case '':
        section = '';
        break;
      case 'kitchen':
        section = 'kitchen';
        break;
      case 'signin':
        section = 'sign in';
        break;
      default:
        section = '404';
        break;
    }

    return (
      <SC.Container>
        <SC.BrandWrapper>
          <SC.MainNavButton
            onClick={() => { this.props.toggleMainNav(true) }}
            type='button'
          >
            <SC.HamburgerIcon>
              <div></div>
              <div class='small'></div>
              <div></div>
            </SC.HamburgerIcon>
          </SC.MainNavButton>
          <Link
            to={ '/' + sectionSlug }
          >
            <SC.Logo
              alt='T A logo'
              src={ withPrefix('/images/logo.svg') }
            />
          </Link>
          <SC.SectionName>
            { section }
          </SC.SectionName>
        </SC.BrandWrapper>
        <SC.MenuWrapper>
          { section === 'kitchen' &&
            <MegaMenu />
          }
          { auth.currentUser() && <button onClick={() => { this.signOut() }}>Sign out</button> }
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
