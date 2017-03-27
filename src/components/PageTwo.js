import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Image,
  StyleSheet, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageTwo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop: 54,justifyContent: 'center',alignItems: 'center',}}>
        <Image
          source={{uri: this.props.book.volumeInfo.imageLinks?
            this.props.book.volumeInfo.imageLinks.smallThumbnail:""}}
          style={styles.thumbnail}
          resizeMode='cover'/>
        <Text style = {{marginTop: 54}}>{this.props.book.volumeInfo.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop:64,
    margin:16
  },
  thumbnail: {
       width:360,
       height:360,
  },
});