import React, { Component } from 'react';
import { 
  View,
  Image,
  Text, 
  TextInput,
  StyleSheet,
  ListView,
  TouchableNativeFeedback,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ActionTypes from '../actions/ActionTypes';
import BookEntry from '../store/BookEntry';

export default class PageOne extends Component {

  constructor() {
    super();
    this.state = {text: ''};

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      //Dataの設定
      dataSource: ds.cloneWithRows([])
      // dataSource: ds.cloneWithRows(TEST_ENTRY_DATA.entryData.items)
    };
  }

  //ListItemのRender
  renderEntry(entry){

    return (
      <TouchableNativeFeedback onPress={() => (Actions.pageTwo({book:entry}))}>
        <View>
          <View style={styles.listItem}>
            {/* 外に出せる */}
            { entry.volumeInfo.imageLinks ? 
              <Image
                  source={{uri: entry.volumeInfo.imageLinks.smallThumbnail}}
                  style={styles.thumbnail}/> : <Text style={styles.imageNotFound}>ImageNothing</Text>}

            <View style={styles.rightContainer}>
              <Text style={styles.title} >
                {entry.volumeInfo.title}
              </Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{height: 48}}
          placeholder="saerch book name."
          onChangeText={(text) => {
              if(text != null){
                fetchData(text,this);
              }
              this.setState({text});
            }
          }
        />

        {(() => {
              return this.state.dataSource ? 
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderEntry}/> : null;
        })()}
      </View>
    )
  }
}

const GOOGLE_BOOK_ENTRY_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%BA+inauthor:%E5%A4%A7%E5%A1%9A";

//Fetcherは外に出す
const fetchData = (text,app) => {
    console.log(text);

    fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + text)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.items.length);
      console.log(responseData.totalItems);
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
    marginTop:64,
    margin:16
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  imageNotFound: {
        width: 100,
        height: 100,
        marginRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
  },
  listView: {

  },
});

const _TEST_ENTRY_DATA = {
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
  };

const TEST_ENTRY_DATA = new BookEntry(_TEST_ENTRY_DATA);
