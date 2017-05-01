import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PageTwo extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Image
            source={{
              uri: this.props.book.volumeInfo.imageLinks ?
                this.props.book.volumeInfo.imageLinks.smallThumbnail : ""
            }}
            style={styles.thumbnail}
            resizeMode='cover' />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{this.props.book.volumeInfo.title}</Text>
            <Author authors={this.props.book.volumeInfo.authors} />
            <Description description={this.props.book.volumeInfo.description} />
          </View>
        </View>
      </View>
    )
  }
}

const Author = ({ authors }) => (
  <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
    <Icon name="md-person" size={24} />
    <Text style={styles.author}>{authors ? authors : "作者不明"}</Text>
  </View>
);

const Description = ({ description }) => (
  <View style={{ flexDirection: 'row', marginTop: 16 }}>
    <Icon name="md-information-circle" size={24} />
    <Text style={styles.description}>{description ? description : "詳細情報はありません。"}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  thumbnail: {
    width: 96,
    height: 152,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 32,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },

  author: {
    fontSize: 12,
    marginLeft: 8,
  },

  description: {
    fontSize: 12,
    marginLeft: 8,
    marginRight: 16,
  }
});