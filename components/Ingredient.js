import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import IngredientRow from './IngredientRow';
import { globalStyles } from './Styles';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default class Ingredient extends React.Component {

  handleIngredientNameInput = (text) => {
    this.setState({name: text});
  }

  render() {
    return (
      <View style={globalStyles.container} >
        {/*<FlatList
          data={this.state.ingredientList}
          extraData={this.state.ingredientList}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => <View>{item}</View>}/>*/}
        <IngredientRow RecipePageAddRow = {this.props.RecipePageAddRow}></IngredientRow>
      </View>
    );
  }
}