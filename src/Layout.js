import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';
import logo from './assets/sc_logo.png';

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes

const Layout = ({ route }) => (
  <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>
        {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
      </title>
    </Helmet>

    {/* root placeholder for the app, which we add components to using route data */}
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
