import React, { Component } from 'react'
import { TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import IngredientRow from './IngredientRow';
import StepRow from './StepRow';
import { globalStyles } from './Styles';

//Amplify
import { DataStore } from 'aws-amplify';
import { ingredient } from '../src/models';
import { recipe } from '../src/models';

export default class RecipePage extends Component {

    state = {
      recipeTitle: '',
      instructionsList: [{
        'id': 0,
        'name': '',
        'quantity': '',
        'unit': '',
      }],
      stepList: [{
        'id' : 0,
        'value': ''
      }],
      tagList: [{
        'id' : 0,
        'value': ''
      }],
    }

  handleRecipeTitleInput = (text) => {
    if (!text) {
      this.setState({recipeTitle: ''})
    } else {
      this.setState({recipeTitle: text })
    }
  }

  handleIngredientAddRow = () => {

    this.setState(state => {
      const list = this.state.instructionsList.concat({
        'id': this.state.instructionsList.length,
        'name': '',
        'quantity': '',
        'unit': ''
      })

      return {
        instructionsList: list,
    }})
  }

  handleStepAddRow = () => {
    this.setState(state => {
      const list = this.state.stepList.concat({
        'id' : this.state.stepList.length,
        'value': ''
      })
      return {
        stepList: list
      }
    })
  }

  handleTagAddRow = () => {
    this.setState(state => {
      const list = this.state.tagList.concat({
        'id' : this.state.tagList.length,
        'value': ''
      })
      return {
        tagList: list
      }
    })
  }

  handleIngredientNameInput = (text, id) => {

    this.setState(state => {
      const list = this.state.instructionsList;
      list[id].name = text;

      return {
        instructionsList: list
      }
    })
  }

  handleIngredientQuanitityInput = (text, id) => {

    this.setState(state => {
      const list = this.state.instructionsList;
      list[id].quantity = text;

      return {
        instructionsList: list
      }
    })
  }

  handleIngredientMeasurementInput = (text, id) => {

    this.setState(state => {
      const list = this.state.instructionsList;
      list[id].unit = text;

      return {
        instructionsList: list
      }
    })
  }

  handleStepUpdate = (text, id) => {
    this.setState(state => {
      const list = this.state.stepList;
      list[id].value = text;

      return {
        stepList: list
      }
    })
  }

  handleTagUpdate = (text, id) => {
    this.setState(state => {
      const list = this.state.tagList;
      list[id].value = text;

      return {
        tagList: list
      }
    })
  }

  async handleRecipeSubmit() {
    try {
      let ingredientList = [];
      this.state.instructionsList.forEach(element => {
        ingredientList.push(new ingredient({
          name: element.name,
          quantity: Number(element.quantity),
          UOM: element.unit
        }))
      });

      let stepList = []
      this.state.stepList.forEach(element => {
        stepList.push(element.value)
      })

      let tagList = []
      this.state.tagList.forEach(element => {
        tagList.push(element.value)
      })

      let recipeToSave = new recipe({
        name: this.state.recipeTitle,
        ingredients: ingredientList,
        steps: stepList,
        tags: tagList
      })
      console.log(recipeToSave);
      await DataStore.save(recipeToSave);
      console.log("recipe saved successfully!");
    } catch (error) {
      console.log("Error saving ingredient", error);
    }
    this.setState({
      recipeTitle: '',
      instructionsList: [{
        'id': 0,
        'name': '',
        'quantity': '',
        'unit': '',
      }],
      stepList: [{
        'id' : 0,
        'value': ''
      }],
      tagList: [{
        'id' : 0,
        'value': ''
      }],
    })
    this.props.navigation.navigate('View Recipes')
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
            handleIngredientNameInput = {this.handleIngredientNameInput}
            handleIngredientQuanitityInput = {this.handleIngredientQuanitityInput}
            handleIngredientMeasurementInput = {this.handleIngredientMeasurementInput}
            id = {item.id}
            name = {item.name}
            quantity = {item.quantity}
            unit = {item.unit}>
            </IngredientRow>}
          extraData={this.state}
        />

        <View style={globalStyles.RecipeView}>
          <TouchableOpacity style={globalStyles.helpLink}>
            <Text style={globalStyles.helpLinkText} 
              onPress={() => this.handleIngredientAddRow()}>
                Add another ingredient
            </Text>
          </TouchableOpacity>
        </View>

        <br></br>

        <View style={globalStyles.getStartedContainer}>
          <Text
            style={globalStyles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Steps:
          </Text>
        </View>
        
        <FlatList
          data={this.state.stepList}
          renderItem={({item}) => <StepRow 
            id = {item.id}
            name = {item.name}
            handleStepUpdate={this.handleStepUpdate}>
          </StepRow>}
          extraData={this.state}
        />

        <View style={globalStyles.RecipeView}>
          <TouchableOpacity style={globalStyles.helpLink}>
            <Text style={globalStyles.helpLinkText} 
              onPress={() => this.handleStepAddRow()}>
                Add another step
            </Text>
          </TouchableOpacity>
        </View>

        <br></br>

        <View style={globalStyles.getStartedContainer}>
          <Text
            style={globalStyles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
            Tags:
          </Text>
        </View>
        
        <FlatList
          data={this.state.tagList}
          renderItem={({item}) => <StepRow 
            id = {item.id}
            name = {item.name}
            handleStepUpdate={this.handleTagUpdate}>
          </StepRow>}
          extraData={this.state}
        />

        <View style={globalStyles.RecipeView}>
          <TouchableOpacity style={globalStyles.helpLink}>
            <Text style={globalStyles.helpLinkText} 
              onPress={() => this.handleTagAddRow()}>
                Add another tag
            </Text>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.RecipeView}>
          <TouchableOpacity style={globalStyles.helpLink}>
              <Text style={globalStyles.helpLinkText} 
                onPress={() => this.handleRecipeSubmit()}>
                  Submit
              </Text>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}