import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import { globalStyles } from './Styles';

export default class StepRow extends React.Component {

  render() {
    return (
        <View style={globalStyles.RecipeCentered}>
          <View style={globalStyles.RecipeView}>
            <TextInput
              style={styles.ingredientInput}
              value={this.props.name}
              onChangeText={this.props.handleStepUpdate}
            />
          </View>
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