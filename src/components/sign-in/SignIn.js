import React, { Component } from 'react';
import { push } from 'gatsby-link';

import auth from '../../utils/auth';
import * as SC from './signIn_styles';



export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.emailField = React.createRef();
    this.passwordField = React.createRef();

    this.signin = this.signin.bind(this);
  }

  signin(event) {
    event.preventDefault();
    auth.login(this.emailField.current.value, this.passwordField.current.value)
        .then((response) => {
          push('/');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  componentDidMount() {
    if (auth.currentUser()) {
      push('/');
    }
  }

  render() {
    return (
      <SC.Container>
        <SC.FieldWrapper>
          <SC.Label
            htmlFor='email'
          >
            Email
          </SC.Label>
          <SC.Field
            autoFocus
            id='email'
            innerRef={ this.emailField }
            type='email'
          />
        </SC.FieldWrapper>
        <SC.FieldWrapper>
          <SC.Label
            htmlFor='password'
          >
            Password
          </SC.Label>
          <SC.Field
            id='password'
            innerRef={ this.passwordField }
            type='password'
          />
        </SC.FieldWrapper>
        <SC.Submit
          onClick={(event) => { this.signin(event); }}
          type='submit'
          value='Sign in'
        />
      </SC.Container>
    );
  }
}
