import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import IngredientRow from './IngredientRow';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default class Ingredient extends React.Component {

  handleIngredientNameInput = (text) => {
    this.setState({name: text});
  }

  render() {
    return (
      <View style={styles.getStartedContainer} >
        {/*<FlatList
          data={this.state.ingredientList}
          extraData={this.state.ingredientList}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => <View>{item}</View>}/>*/}
        <IngredientRow RecipePageAddRow = {this.props.RecipePageAddRow}></IngredientRow>
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
});
