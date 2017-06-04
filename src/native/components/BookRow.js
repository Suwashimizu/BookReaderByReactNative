'use strict';

import React, { Component } from 'react';
import {
    View,
    TouchableNativeFeedback,
    Text,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
    render({ entry }) {
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
}

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

const styles = StyleSheet.create({
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

    separator: {
        height: 1,
        backgroundColor: '#DDDDDD'
    },


    thumbnail: {
        width: 100,
        height: 100,
    },

    noImage: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});