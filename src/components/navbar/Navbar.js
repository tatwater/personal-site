import React, { Component } from 'react';
import Link, { push, withPrefix } from 'gatsby-link';

import auth from '../../utils/auth';
import * as SC from './navbar_styles';


export default class Navbar extends Component {
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
          <Link
            to='/'
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
          { auth.currentUser() && <button onClick={() => { this.signOut() }}>Sign out</button> }
        </SC.MenuWrapper>
      </SC.Container>
    );
  }
}
