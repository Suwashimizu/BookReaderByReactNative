/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';     // redux。storeの作成やmiddlewareの提供
import { Provider, connect } from 'react-redux';　　　　　　　　　    // reduxとreact-nativeを関連づけてくれる
import thunkMiddleware from 'redux-thunk';                         // reduxの非同期処理(middlewareの例)

import reducers from '../reducers';

import {
  AppRegistry,
} from 'react-native';

//Routing
import { ActionConst, Scene, Router, Modal, Reducer } from 'react-native-router-flux';

import ActionType from '../actions/Routes';
import PageOne from './containers/PageOne';
import PageTwo from './containers/PageTwo';

const RouterWithRedux = connect()(Router);

// create store...
const middleware = [thunkMiddleware];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

const reducerCreate = params => {
  const defaultReducer = Reducer(params);
  return (state, action) => {
    // console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

export default class extends Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="modal" component={Modal}>
            <Scene key="top" initial={true} component={PageOne} title="Top" />
          </Scene>
          <Scene key="pageTwo" component={PageTwo} hideNavBar={true} direction="vertical" schema="modal" title="Search" />
        </RouterWithRedux>
      </Provider>
    )
  }
}