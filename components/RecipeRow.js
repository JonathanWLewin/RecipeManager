import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import { globalStyles } from './Styles';

export default class RecipeRow extends React.Component {

    render() {
        return (
            <View style={globalStyles.RecipeCentered}>
                <View style={globalStyles.RecipeView}>
                    <TouchableOpacity 
                        style={globalStyles.helpLink}>
                        <Text
                            style={globalStyles.helpLinkText}>
                            {this.props.item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.RecipeView}>
                    <TouchableOpacity 
                        style={globalStyles.helpLink}
                        onPress={() => this.props.DeleteItem(this.props.item.id)}>
                        <Text
                            style={globalStyles.helpLinkText}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}