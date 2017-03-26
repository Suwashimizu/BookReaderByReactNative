import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageTwo extends Component {

  constructor(props) {
    super(props);
    
    console.log(props.book)
  }

  render() {
    return (
      <View style={{margin: 128}}>
        <Text >{this.props.book.volumeInfo.title}</Text>
      </View>
    )
  }
}