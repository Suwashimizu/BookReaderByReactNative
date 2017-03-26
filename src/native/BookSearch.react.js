/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

//Routing
import {Scene, Router} from 'react-native-router-flux';

import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import ActionTypes from '../actions/ActionTypes';

export default class extends Component {

  render() {
    return <Router>
      <Scene key="root">
        <Scene key="top" initial={true} component={PageOne} title="Top"/>
        <Scene key="pageTwo" component={PageTwo} title="Search"/>
      </Scene>
    </Router>
  }
}