'use strict';

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

import { ActionConst, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import BookEntry from '../../store/BookEntry';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputLayout from '../components/TextInputLayout';
import SeachResultEmptyItem from '../components/SearchResultEmptyItem';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

export default class PageOne extends Component {

  constructor() {
    super();
    this.state = { text: '' };

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      //Dataの設定
      dataSource: ds.cloneWithRows([])
      // dataSource: ds.cloneWithRows(TEST_ENTRY_DATA.entryData.items)
    };
  }

  //ListItemのRender
  renderEntry(entry) {
    console.log('callRenderEntry');
    return (
      <TouchableNativeFeedback onPress={() => (Actions.pageTwo({ book: entry }))}>
        <View>
          <View style={styles.listItem}>
            <Thumbnail imageLinks={entry.volumeInfo.imageLinks} />

            <View style={styles.rightContainer}>
              <Text style={styles.title} >
                {entry.volumeInfo.title}
              </Text>
              <Text style={styles.author} >
                {entry.volumeInfo.authors}
              </Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableNativeFeedback>
    );
  }

  _loadMoreContentAsync = async () => {
    // Fetch more data here.
    // After fetching data, you should update your ListView data source
    // manually.
    // This function does not have a return value.

    console.log("loadMore");
    fetchData(text, this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBackground}>
          <TextInputLayout
            onChangeText={(text) => {
              if (text != null) fetchData(text, this);

              this.setState({ text });
            }
            }
          />
        </View>

        {this.validEntry() ?
          <ListView
            renderScrollComponent={(props) => <InfiniteScrollView {...props} />}
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderEntry}
            canLoadMore={true}
            isLoadingMore={false}
            distanceToLoadMore={10}
            onLoadMoreAsync={this._loadMoreContentAsync}
          /> : <SeachResultEmptyItem />}
      </View>
    )
  }

  validEntry() {
    return this.state.dataSource && this.state.text
  }
}

//simple component
const Body = () => (
  <Text >Posts</Text>
);

const Thumbnail = ({ imageLinks }) => {

  if (imageLinks) {
    return (
      <Image
        source={{ uri: imageLinks.smallThumbnail }}
        style={styles.thumbnail} />
    )
  } else {
    return (
      <Text style={[styles.thumbnail, styles.noImage]}>NoImage</Text>
    )
  }
}

const GOOGLE_BOOK_ENTRY_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:%E3%82%B9%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%BA+inauthor:%E5%A4%A7%E5%A1%9A";

const maxResults = 10;
//Fetcherは外に出す
const fetchData = (text, startIndex, app) => {
  console.log(text);

  fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + text + "&maxResults=" + maxResults + "&startIndex=" + startIndex * 10)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.items) {
        app.setState({
          dataSource: app.state.dataSource.cloneWithRows(responseData.items)
        });
      }
    }).done();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  inputBackground: {
    justifyContent: 'center',
    backgroundColor: '#00BCD4',
    height: 60,
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  rightContainer: {
    flex: 1
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 10,
  },

  author: {
    fontSize: 12,
    marginTop: 8,
    marginLeft: 10,
  },

  thumbnail: {
    width: 100,
    height: 100,
  },

  noImage: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },

  listView: {
    marginLeft: 16,
    marginRight: 16,
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
        publisher: "KADOKAWA / 富士見書房",
        description: "空竜王バールウィンから神力を得たリナは危機一髪のガウリイたちを救出。が、ライオスに宿る制御不能の水竜王の力まで覚醒しはじめる。そんな折、暗躍を続けていた海神官ヒュレイカーが現れて...。",

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
