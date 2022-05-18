import React, { Component } from 'react'
import { TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import Ingredient from './Ingredient';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';
import { globalStyles } from './Styles';

export default class RecipePage extends Component {

    state = {
      instructionsList: [],
      recipeTitle: '',
      recipeInput: '',
    }

  handleRecipeTitleInput = (text) => {
    if (!text) {
      this.setState({recipeInput: ''})
    } else {
      this.setState({recipeInput: text })
    }
  }

  handleIngredientAddRow = (name, quantity, measurement) => {

    alert('The ingredient is: ' + name + ' , you\'ll need ' + quantity + ' of them, at this measurement: ' + measurement);
  }

  handleRecipeTitleSubmit = () => {
    if (this.state.recipeInput) {
      this.setState({recipeTitle: this.state.recipeInput})
    } else {
      alert('Please enter a recipe title.')
    }
  }

  render() {
    return (
      <View>
        <View style={globalStyles.getStartedContainer}>
          <Text
            style={globalStyles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Recipe Title:
          </Text>
          <View>
            <TextInput
              style={globalStyles.recipeInput}
              onChangeText={this.handleRecipeTitleInput}
            />
          </View>
        </View>

        <View style={globalStyles.getStartedContainer}>
          <Text
            style={globalStyles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Ingredients List:
          </Text>
        </View>

        <View>
          <Ingredient RecipePageAddRow = {this.handleIngredientAddRow}></Ingredient>
        </View>

        <TouchableOpacity style={globalStyles.helpLink}>
            <Text style={globalStyles.helpLinkText} 
              lightColor={Colors.light.tint}
              onPress={this.handleRecipeTitleSubmit}>
                Submit
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}