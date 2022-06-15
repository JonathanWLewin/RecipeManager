import React, { Component } from 'react'
import { TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import IngredientRow from './IngredientRow';
import { globalStyles } from './Styles';

//Amplify
import { recipe } from '../src/models';

export default class RecipePage extends Component {

    state = {
      instructionsList: [],
      recipeTitle: '',
      currentIngredient: {
        'ingredient': '',
        'quantity': '',
        'unit': '',
      }
    }

  handleRecipeTitleInput = (text) => {
    if (!text) {
      this.setState({recipeTitle: ''})
    } else {
      this.setState({recipeTitle: text })
    }
  }

  handleIngredientAddRow = (name, quantity, measurement) => {

    this.setState(state => {
      const list = this.state.instructionsList.concat({
        'name': name,
        'quantity': quantity,
        'unit': measurement
      })

      return {
        instructionsList: list,
        recipeTitle: this.state.recipeTitle
      }
    })
  }

  handleRecipeTitleSubmit = () => {
    if (this.state.recipeInput) {
      this.setState({recipeTitle: this.state.recipeInput})
    } else {
      alert('Please enter a recipe title.')
    }
  }

  UpdateIngredientValues = () => {

  }

  render() {
    return (
      <View>
        <View>
        <TextInput
            style={globalStyles.recipeInput}
            onChangeText={this.handleRecipeTitleInput}
            placeholder="Recipe Name"
            value={this.state.recipeTitle}
            >
        </TextInput>
        </View>

        <View style={globalStyles.getStartedContainer}>
          <Text
            style={globalStyles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Ingredients List:
          </Text>
        </View>

        <View style={globalStyles.RecipeCentered}>
          <View style={globalStyles.RecipeView}>
            <Text style={globalStyles.IngredientText}>
              Ingredient
            </Text>
          </View>
          <View style={globalStyles.RecipeView}>
            <Text style={globalStyles.IngredientText}>
              Quantity
            </Text>
          </View>
          <View style={globalStyles.RecipeView}>
            <Text style={globalStyles.IngredientText}>
              Unit
            </Text>
          </View>
        </View>

        <FlatList
          data={this.state.instructionsList}
          renderItem={({item}) => <IngredientRow 
            RecipePageAddRow = {this.handleIngredientAddRow} 
            inputIngredient = {false}
            name = {item.name}
            quantity = {item.quantity}
            unit = {item.unit}>
            </IngredientRow>}
          extraData={this.state}
        />
        <IngredientRow 
          RecipePageAddRow = {this.handleIngredientAddRow} 
          Ingredient = {this.state.currentIngredient.ingredient}
          Quantity = {this.state.currentIngredient.quantity}
          Unit = {this.state.currentIngredient.unit}
        >

        </IngredientRow>

        <View style={globalStyles.RecipeCentered}>
          <View style={globalStyles.RecipeView}>
            <TouchableOpacity style={globalStyles.helpLink}>
                <Text style={globalStyles.helpLinkText} 
                  onPress={this.handleRecipeTitleSubmit}>
                    Submit
                </Text>
              </TouchableOpacity>
            </View>
            <View style={globalStyles.RecipeView}>
              <TouchableOpacity style={globalStyles.helpLink}>
                <Text style={globalStyles.helpLinkText} 
                  onPress={() => this.props.RecipePageAddRow(this.state.name, this.state.quantity, this.state.measurement)}>
                    Add another ingredient
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}