import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import { globalStyles } from './Styles';

export default class Ingredient extends React.Component {

  handleIngredientNameInput = (text) => {
    this.setState({name: text});
  }

  handleIngredientQuanitityInput = (amount) => {
    this.setState({quantity: parseInt(amount)});
  }

  handleIngredientMeasurementInput = (text) => {
    this.setState({measurement: text});
  }

  render() {
    return (
        <View style={globalStyles.RecipeCentered}>
          <View style={globalStyles.RecipeView}>
            <TextInput
              style={styles.ingredientInput}
              value={this.props.Ingredient}
              onChangeText={this.handleIngredientNameInput}
            />
          </View>
          <View style={globalStyles.RecipeView}>
            <TextInput
              style={styles.ingredientInput}
              value={this.props.Quantity}
              onChangeText={this.handleIngredientQuanitityInput}
            />
          </View>
          <View style={globalStyles.RecipeView}>
          <TextInput
            style={styles.ingredientInput}
            value={this.props.Unit}
            onChangeText={this.handleIngredientMeasurementInput}
          />
          </View>
        </View>
      );
  }


/*
  render() {
    if (this.props.inputIngredient) {
      return (
          <View style={globalStyles.RecipeCentered}>
            <View style={globalStyles.RecipeView} />
            <View style={globalStyles.RecipeView}>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={this.handleIngredientNameInput}
              />
            </View>
            <View style={globalStyles.RecipeView}>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={this.handleIngredientQuanitityInput}
              />
            </View>
            <View style={globalStyles.RecipeView}>
            <TextInput
              style={styles.ingredientInput}
              onChangeText={this.handleIngredientMeasurementInput}
            />
            </View>
            <View style={globalStyles.RecipeView} />
          </View>
        );
    }
    else {
      return (
        <View style={[styles.IngredientRowContainer, {
          flexDirection: "row"
        }]}>
          <View style={{ flex: 1}}>
              <Text style={styles.IngredientText}>
                {this.props.name}
              </Text>
          </View>
          <View style={{ flex: 1}}>
              <Text style={styles.IngredientText}>
                {this.props.quantity}
              </Text>
          </View>
          <View style={{ flex: 1}}>
              <Text style={styles.IngredientText}>
                {this.props.unit}
              </Text>
          </View>
        </View>
      );
    }
  }*/
}
  

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  IngredientRowContainer: {

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
  IngredientText: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLinkText: {
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    width: 300,
    borderColor: '#7a42f4',
    borderWidth: 1,
    color:'white',
 },
 ingredientInput: {
    borderColor: 'white',
    borderWidth: 1,
    color:'black',
    textAlign: 'center',
    justifyContent:'space-between',
 },
 container: {
    flex: 1,
    padding: 20,
  },
})