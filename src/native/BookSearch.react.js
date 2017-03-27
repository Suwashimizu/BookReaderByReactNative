/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

//Routing
import {Scene, Router,Modal,Reducer} from 'react-native-router-flux';

import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import ActionTypes from '../actions/ActionTypes';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        // console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class extends Component {

  render() {
    return (
    <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
      <Scene key="modal" component={Modal}>
        <Scene key="top" initial={true} component={PageOne} title="Top"/>
      </Scene>
      <Scene key="pageTwo" component={PageTwo} hideNavBar={true} direction="vertical" schema="modal" title="Search"/>
    </Router>)
  }
}