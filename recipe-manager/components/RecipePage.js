import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import Ingredient from './Ingredient';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

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
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Recipe Title:
          </Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={this.handleRecipeTitleInput}
            />
          </View>
        </View>

        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Ingredients List:
          </Text>
        </View>

        <View>
          <Ingredient RecipePageAddRow = {this.handleIngredientAddRow}></Ingredient>
        </View>

        <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.helpLinkText} 
              lightColor={Colors.light.tint}
              onPress={this.handleRecipeTitleSubmit}>
                Submit
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    color:'white',
 },
});
