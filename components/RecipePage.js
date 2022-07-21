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
      instructionsList: [],
      currentIngredient: {
        'name': '',
        'quantity': '',
        'unit': '',
      },
      stepList: [],
      currentStep: '',
      tagList: [],
      currentTag: ''
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
        'name': this.state.currentIngredient.name,
        'quantity': this.state.currentIngredient.quantity,
        'unit': this.state.currentIngredient.unit
      })

      return {
        instructionsList: list,
        recipeTitle: this.state.recipeTitle,
        currentIngredient: {
          'id': this.state.instructionsList.length,
          'name': '',
          'quantity': '',
          'unit': '',
        },
        stepList: this.state.stepList,
        currentStep: this.state.currentStep,
        tagList: this.state.tagList,
        currentTag: this.state.currentTag
    }})
  }

  handleStepAddRow = () => {
    this.setState(state => {
      const list = this.state.stepList.concat(this.state.currentStep)
      return {
        instructionsList: this.state.instructionsList,
        recipeTitle: this.state.recipeTitle,
        currentIngredient: this.state.currentIngredient,
        stepList: list,
        currentStep: '',
        tagList: this.state.tagList,
        currentTag: this.state.currentTag
      }
    })
  }

  handleTagAddRow = () => {
    this.setState(state => {
      const list = this.state.tagList.concat(this.state.currentTag)
      return {
        instructionsList: this.state.instructionsList,
        recipeTitle: this.state.recipeTitle,
        currentIngredient: this.state.currentIngredient,
        stepList: this.state.stepList,
        currentStep: this.state.currentStep,
        tagList: list,
        currentTag: ''
      }
    })
  }

  handleIngredientNameInput = (text) => {

    this.setState({currentIngredient: 
      {
        name: text,
        quantity: this.state.currentIngredient.quantity,
        unit: this.state.currentIngredient.unit
      }
    });
  }

  handleIngredientQuanitityInput = (text) => {

    this.setState({currentIngredient: 
      {
        name: this.state.currentIngredient.name,
        quantity: text,
        unit: this.state.currentIngredient.unit
      }
    });
  }

  handleIngredientMeasurementInput = (text) => {

    this.setState({currentIngredient: 
      {
        name: this.state.currentIngredient.name,
        quantity: this.state.currentIngredient.quantity,
        unit: text
      }
    });
  }

  handleStepUpdate = (text) => {
    this.setState({currentStep: text})
  }

  handleTagUpdate = (text) => {
    this.setState({currentTag: text})
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

      let recipeToSave = new recipe({
        name: this.state.recipeTitle,
        ingredients: ingredientList,
        steps: this.state.stepList,
        tags: this.state.tagList
      })
      console.log(recipeToSave);
      await DataStore.save(recipeToSave);
      console.log("recipe saved successfully!");
    } catch (error) {
      console.log("Error saving ingredient", error);
    }
  }

  async ViewRecipe () {
    try {
      const recipes = await DataStore.query(recipe);
      console.log("Recipes retrieved successfully!", JSON.stringify(recipes, null, 2));
    } catch (error) {
      console.log("Error retrieving recipes", error);
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
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <IngredientRow 
            inputIngredient = {false}
            name = {item.name}
            quantity = {item.quantity}
            unit = {item.unit}>
            </IngredientRow>}
          extraData={this.state}
        />
        <IngredientRow 
          handleIngredientNameInput = {this.handleIngredientNameInput}
          handleIngredientQuanitityInput = {this.handleIngredientQuanitityInput}
          handleIngredientMeasurementInput = {this.handleIngredientMeasurementInput}
          name = {this.state.currentIngredient.name}
          quantity = {this.state.currentIngredient.quantity}
          unit = {this.state.currentIngredient.unit}
        >

        </IngredientRow>

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
            name = {item}>
          </StepRow>}
          extraData={this.state}
        />

        <StepRow
          name={this.state.currentStep}
          handleStepUpdate={this.handleStepUpdate}
          >
        </StepRow>

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
            name = {item}>
          </StepRow>}
          extraData={this.state}
        />

        <StepRow
          name={this.state.currentTag}
          handleStepUpdate={this.handleTagUpdate}
          >
        </StepRow>

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
        <br></br><br></br>
        <View style={globalStyles.RecipeView}>
          <TouchableOpacity style={globalStyles.helpLink}>
              <Text style={globalStyles.helpLinkText} 
                onPress={() => this.ViewRecipe()}>
                  View
              </Text>
            </TouchableOpacity>
        </View>

    </View>
    );
  }
}