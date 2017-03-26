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
          onChangeText={(text) => {
              if(text!=null){
                fetchData(text);
              }
              this.setState({text});
            }
          }
        />
        <Text onPress={Actions.pageTwo}>This is PageOne!!!!</Text>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
        <Text style={{padding: 10, fontSize: 42}}>
          
        </Text>
      </View>
    )
  }
}


const GOOGLE_BOOK_ENTRY_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%BA+inauthor:%E5%A4%A7%E5%A1%9A";

const fetchData = (text,app) => {
    console.log(text);

    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + text)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.items);
      app.setState({
        dataSource: app.state.dataSource.cloneWithRows(responseData.items)
      });
    })
    .done();
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