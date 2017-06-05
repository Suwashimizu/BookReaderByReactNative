'use strict';

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ListView,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

//Components
import BookEntry from '../../store/BookEntry';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInputLayout from '../components/TextInputLayout';
import BookRow from '../components/BookRow';
import SeachResultEmptyItem from '../components/SearchResultEmptyItem';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

//Actions
import { searchBookData, fetchBookData } from '../../actions/Routes';

class TopPage extends Component {

  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      //Dataの設定
      dataSource: ds.cloneWithRows([])
      // dataSource: ds.cloneWithRows(TEST_ENTRY_DATA.entryData.items)
    };
  }

  _onChangeText(searchWord) {
    // EditTextの入力イベント,Dispathへ流す
    const { dispatch } = this.props
    if (searchWord) dispatch(searchBookData(searchWord))
    // if (text != null) fetchData(text, this);

    // this.setState({ text });
  }

  render() {
    const { text, books } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.inputBackground}>
          <TextInputLayout
            onChangeText={this._onChangeText.bind(this)} />
        </View>
        {books ? <FlatList
          data={books.items}
          renderItem={({ item }) => <BookRow bookData={item} />}
        /> : <SeachResultEmptyItem />}
      </View>
    );
  }
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
});

// ① Stateとの受け皿となるObjectを定義
function mapStateToProps(state, props) {

  // reducerをstateから取得
  const { searchReducers, receiveReducers } = state

  // 必要なpropsを取得
  const {
    books: books,
  } = receiveReducers || {
      books: "",
    }

  const {
    text: text,
  } = searchReducers || {
      text: "",
    }
  // 返却(忘れるとComponentに渡らない)
  return {
    text,
    books,
  }
}

// ②受け皿とComponentを紐付け
export default connect(mapStateToProps)(TopPage);