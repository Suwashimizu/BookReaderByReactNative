import React, { Component, PropTypes } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class PageTest extends Component {
    render() {
        const { text } = this.props
        console.log(this.props)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>{text}</Text>
            </View>
        );
    }
}

// ① Stateとの受け皿となるObjectを定義
function mapStateToProps(state, props) {

    // reducerをstateから取得
    const { searchReducers } = state
    // 必要なpropsを取得
    const {
    text: text,
  } = searchReducers || {
            text: "",
        }
    // 返却(忘れるとComponentに渡らない)
    return {
        text,
    }
}

// ②受け皿とComponentを紐付け
export default connect(mapStateToProps)(PageTest);