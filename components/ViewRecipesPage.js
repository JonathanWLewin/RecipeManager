import React, { Component } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity, TextInput, Button, FlatList, Text, View } from 'react-native';
import IngredientRow from './IngredientRow';
import StepRow from './StepRow';
import { globalStyles } from './Styles';

//Amplify
import { API, DataStore } from 'aws-amplify';
import { ingredient } from '../src/models';
import { recipe } from '../src/models';
import RecipeRow from './RecipeRow';

export default class ViewRecipesPage extends Component {

    constructor(props) {
        super(props);
        this.state = {recipeList: []}
        props.navigation.addListener('focus', () => {
            this.RefreshRecipes();
        })
    }

    componentDidMount() {
        this.RefreshRecipes();
    }

    RefreshRecipes = () => {
        try {
            DataStore.query(recipe).then(response => {
                this.setState({recipeList: response})
                console.log(this.state.recipeList);
            });
        } catch (error) {
            console.log("Error retrieving recipes", error);
        }
    }

    DeleteItem = async(id) => {
        await DataStore.delete(recipe, recipe => recipe.id("eq", id));
        this.RefreshRecipes();
    }

    render() {
        return (
            <View>
                <FlatList
                data={this.state.recipeList}
                renderItem={({item}) => 
                    <RecipeRow
                    item={item}
                    DeleteItem={this.DeleteItem}></RecipeRow>
                }
                extraData={this.state}
                />
            </View>
        )
    }
}