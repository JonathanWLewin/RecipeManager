import React, { Component } from 'react'
import { TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import Ingredient from './Ingredient';
import { globalStyles } from './Styles';

//Amplify
import { recipe } from '../src/models';

export default class RecipePage extends Component {

    state = {
      instructionsList: [],
      recipeTitle: '',
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

        <View>
          <View style={[{
            justifyContent: 'space-around', 
            alignItems: 'center',
          }]}>
              <View style={[{}, {flexDirection: "row"}]}>
                <View style={{ flex: 1}}>
                    <TextInput 
                      style={globalStyles.IngredientText}
                      value={"Ingredient"}
                      >
                    </TextInput>
                </View>
                <View style={{ flex: 1}}>
                    <TextInput 
                      style={globalStyles.IngredientText}
                      value={"Quantity"}
                      >
                    </TextInput>
                </View>
                <View style={{ flex: 1}}>
                    <TextInput 
                      style={globalStyles.IngredientText}
                      value={"Unit"}
                      >
                    </TextInput>
                </View>
              </View>
          </View>
        </View>

        <View>
          <FlatList
            data={this.state.instructionsList}
            renderItem={({item}) => <Ingredient 
              RecipePageAddRow = {this.handleIngredientAddRow} 
              inputIngredient = {false}
              name = {item.name}
              quantity = {item.quantity}
              unit = {item.unit}>
              </Ingredient>}
            extraData={this.state}
          />
        </View>
        <View>
          <Ingredient RecipePageAddRow = {this.handleIngredientAddRow} inputIngredient = {true}></Ingredient>
        </View>

        <TouchableOpacity style={globalStyles.helpLink}>
            <Text style={globalStyles.helpLinkText} 
              onPress={this.handleRecipeTitleSubmit}>
                Submit
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}