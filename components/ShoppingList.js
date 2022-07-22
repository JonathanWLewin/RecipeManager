import React, {useState} from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { globalStyles } from './Styles';

//Amplify
import { DataStore } from 'aws-amplify';
import { shoppingItem } from '../src/models';

export default class ShoppingList extends React.Component{

  ViewShoppingItems = () => {
    DataStore.query(shoppingItem).then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <View>
          <TouchableOpacity
          onPress={() => this.ViewShoppingItems()}>
            <Text>
              Get Shopping List From Data Store
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}