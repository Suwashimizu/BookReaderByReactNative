import React, { Component } from 'react';
import { View, Text, TextInput ,StyleSheet,} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {

  constructor() {
    super();
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{height: 48}}
          placeholder="saerch book name."
          onChangeText={(text) => this.setState({text})}
        />
        <Text onPress={Actions.pageTwo}>This is PageOne!!!!</Text>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    marginTop:64,
    margin:16
  },
  rightContainer: {
        flex: 1
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10
  },
  separator: {
       height: 1,
       backgroundColor: '#DDDDDD'
  },
  listView: {
         backgroundColor: '#F5FCFF'
  },
});