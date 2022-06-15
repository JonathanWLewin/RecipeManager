import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import IngredientRow from './IngredientRow';
import { globalStyles } from './Styles';

export default class Ingredient extends React.Component {

  handleIngredientNameInput = (text) => {
    this.setState({name: text});
  }

  render() {
    if (this.props.inputIngredient) {
      return (
        <View style={globalStyles.container} >
          {/*<FlatList
            data={this.state.ingredientList}
            extraData={this.state.ingredientList}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => <View>{item}</View>}/>*/}
          <IngredientRow RecipePageAddRow = {this.props.RecipePageAddRow} inputIngredient = {true}></IngredientRow>
        </View>
      );
    }
    else {
      return (
        <View style={[{
          justifyContent: 'space-around', 
          alignItems: 'center',
        }]}>
          {/*<FlatList
            data={this.state.ingredientList}
            extraData={this.state.ingredientList}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => <View>{item}</View>}/>*/}
          <IngredientRow 
            RecipePageAddRow = {this.props.RecipePageAddRow} 
            inputIngredient = {false}
            name = {this.props.name}
            quantity = {this.props.quantity}
            unit = {this.props.unit}
          ></IngredientRow>
        </View>
      );
    }
  }
}