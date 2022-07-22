import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import { globalStyles } from './Styles';

//Amplify
import { DataStore } from 'aws-amplify';
import { shoppingItem } from '../src/models';

export default class RecipeRow extends React.Component {

    SendToShoppingList = () => {
        this.props.item.ingredients.forEach(element => {
            console.log(element);
            let newShoppingItem = DataStore.save(new shoppingItem({
                name: element.name,
                quantity: element.quantity,
                UOM: element.UOM
              }))
        });
    }



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
                        onPress={() => this.SendToShoppingList()}>
                        <Text
                            style={globalStyles.helpLinkText}>
                            Send To Shopping List
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