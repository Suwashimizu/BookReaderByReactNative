'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

// icon + editText + closeButton
export default class extends Component {
  render() {
    return (
      <View style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text >お気に入りの本を探そう</Text>
        <Icon name="md-book" size={128} color="#aaa" />
      </View>
    )
  }
}