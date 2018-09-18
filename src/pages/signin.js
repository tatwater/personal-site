import React from 'react';

import DefaultLayout from '../components/_layouts/default/DefaultLayout';
import SignIn from '../components/sign-in/SignIn';


const SignInPage = ({ location }) => (
  <DefaultLayout
    location={ location }
  >
    <SignIn />
  </DefaultLayout>
);


export default SignInPage;
