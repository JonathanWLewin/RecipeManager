import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

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
        <View style={[styles.IngredientRowContainer, {
          flexDirection: "row"
        }]}>
          <View style={{ flex: 1}}>
              <Text style={styles.IngredientText}>
                  Ingredient name:
              </Text>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={this.handleIngredientNameInput}
              />
          </View>
          <View style={{ flex: 1}}>
              <Text style={styles.IngredientText}>
                  Quantity:
              </Text>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={this.handleIngredientQuanitityInput}
              />
          </View>
          <View style={{ flex: 1}}>
              <Text style={styles.IngredientText}>
                  Unit:
              </Text>
              <TextInput
                style={styles.ingredientInput}
                onChangeText={this.handleIngredientMeasurementInput}
              />
          </View>
          <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.helpLinkText} 
              lightColor={Colors.light.tint}
              onPress={() => this.props.RecipePageAddRow(this.state.name, this.state.quantity, this.state.measurement)}>
                Add another ingredient
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
    borderColor: '#7a42f4',
    borderWidth: 1,
    color:'white',
 },
 ingredientInput: {
    margin: 15,
    height: 40,
    width: 80,
    borderColor: 'white',
    borderWidth: 1,
    color:'white',
    justifyContent:'space-between',
    padding:'100',
 },
 container: {
    flex: 1,
    padding: 20,
  },
})