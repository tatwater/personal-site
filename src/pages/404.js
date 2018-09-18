import React from 'react';

import DefaultLayout from '../components/_layouts/default/DefaultLayout';


const NotFoundPage = ({ location }) => (
  <DefaultLayout
    location={ location }
  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
);

export default NotFoundPage;
