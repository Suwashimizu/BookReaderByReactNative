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
  Image,
  ListView,
  View
} from 'react-native';

export default class BookSearch extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //Dataの設定
      dataSource: ds.cloneWithRows([entry, entry,entry,entry,entry,entry,entry,entry,entry,entry]),
    };
  }

  //ListItemのRender:function()はSyntacs変わった？
  renderEntry(entry){
    return (
      <View>
        <View style={styles.container}>
          <Image
              source={{uri: entry.imageLinks.smallThumbnail}}
              style={styles.thumbnail}/>
          <Text style={styles.title}
            onPress={onClick}>
            {entry.title}
          </Text>
        </View>
        <View style={styles.separator}/>
      </View>
    );
  }

  /*
  DataSourceの指定とRender
  dataSource={this.state.dataSource}
  renderRow={this.renderEntry}/>
  */
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEntry}/>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
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

//APIから取得するjsonのstab
const TEST_ENTRY_DATA= {

  kind: "books#volumes",
  totalItems: 4,
  items: [
  {
   kind: "books#volume",
   id: "n0WU-RX8-yoC",
   etag: "i1EbgqzMFpU",
   selfLink: "https://www.googleapis.com/books/v1/volumes/n0WU-RX8-yoC",
   volumeInfo: {
    title: "スレイヤーズ　水竜王の騎士(6)",
    authors: [
    "トミイ　大塚"
    ],
    imageLinks: {
     smallThumbnail: "http://books.google.com/books/content?id=n0WU-RX8-yoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
     thumbnail: "http://books.google.com/books/content?id=n0WU-RX8-yoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
   }
  }
 ]
}

var entry = TEST_ENTRY_DATA.items[0].volumeInfo;

AppRegistry.registerComponent('BookSearch', () => BookSearch);
