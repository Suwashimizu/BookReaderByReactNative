'use strict';

import React, { Component } from 'react';
import { 
  View,
  Text, 
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

// icon + editText + closeButton
export default class extends Component {

  constructor(){
    super();
    this.state = {text: ''};
  }

  render(){
    return (
      <View style={styles.inAppSearch}>
        <Icon name="md-search" size={24} color="#222" style={{marginLeft:16}}/>
        <TextInput 
          style={{
            flex:1,
            marginLeft:8,
          }}
          value={this.state.text}
          underlineColorAndroid='transparent'
          placeholder="saerch book name."
          onChangeText={(text) => {
                    this.setState({text});
                    this.props.onChangeText(text);
                  }
                }
        />
        {this.state.text ?
          <Icon name="md-close" size={24} color="#222" style={{marginRight:16}}
            onPress={ () => {
              this.setState({text:''});
              this.props.onChangeText('');}
           }
          /> : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  inAppSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight:16,
    marginLeft:16,
    borderRadius: 4,
  },
});