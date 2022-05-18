import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ShoppingItems = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}