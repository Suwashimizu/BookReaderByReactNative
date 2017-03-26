/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class BookSearch extends Component {

  // fetchData:function(){
  //   fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%BA+inauthor:%E5%A4%A7%E5%A1%9A')
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     // this.setState({
  //     //   dataSource: this.state.dataSource.cloneWithRows(responseData)
  //     // });
  //   })
  //   .done();
  // })

  console.log('FUFUFU');

  fetchData();

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}
        onPress={onClick}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          onPress={onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"/>
      </View>
    );
  }
}

const onClick = () =>  {
  console.log('FUFUFU');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BookSearch', () => BookSearch);
