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
  TouchableHighlight,
  View
} from 'react-native';

//Routing
import {Scene, Router} from 'react-native-router-flux';

import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';

export default class BookSearch extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //Dataの設定
      dataSource: ds.cloneWithRows([]),
    };

    fetchData(this)
  }

  //ListItemのRender:function()はSyntacs変わった？
  renderEntry(entry){
    return (
      <TouchableHighlight onPress={()=>{console.log(entry)}}>
        <View>
          <View style={styles.container}>
            <Image
                source={{uri: entry.volumeInfo.imageLinks.smallThumbnail}}
                style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}
                onPress={onClick}>
                {entry.volumeInfo.title}
              </Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  /*
  DataSourceの指定とRender
  dataSource={this.state.dataSource}
  renderRow={this.renderEntry}/>
  
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderEntry}/>
    );
  }
  */

  render() {
    return <Router>
      <Scene key="root">
        <Scene key="top" initial={true} component={PageOne} title="Top"/>
        <Scene key="pageTwo" component={PageTwo} title="Search"/>
      </Scene>
    </Router>
  }
}

class LoginComponent extends Component {
  render() {
    <View style={styles.container}>
      <Text style={styles.title}
        onPress={onClick}>
        Login
      </Text>
    </View>
  }
}

const loginComponent = new LoginComponent();

const onClick = () =>  {
  console.log('onClick');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  {
   kind: "books#volume",
   id: "n0WU-RX8-yoC",
   etag: "i1EbgqzMFpU",
   selfLink: "https://www.googleapis.com/books/v1/volumes/n0WU-RX8-yoC",
   volumeInfo: {
    title: "スレイヤーズ　水竜王の騎士(1)",
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

var entry = TEST_ENTRY_DATA.items

const GOOGLE_BOOK_ENTRY_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%BA+inauthor:%E5%A4%A7%E5%A1%9A";

const fetchData = (app) => {
  console.log('APIcall')
  fetch(GOOGLE_BOOK_ENTRY_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.items);
      app.setState({
        dataSource: app.state.dataSource.cloneWithRows(responseData.items)
      });
    })
    .done();
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);
