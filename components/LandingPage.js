import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/temp_logo.png';
import cog from '../assets/settings.jpg';
import feedback from '../assets/feedback.png';
import { globalStyles } from "./Styles";

import { DataStore } from 'aws-amplify';
import { ingredient } from '../src/models/index'

/*export default function LandingPage() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.mainMenuText}>Upload, share, and shop your recipes</Text>
      </View>
    );
  }*/

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => AddRecipe() }
        style={styles.button}>
        <Text style={styles.buttonTextStyle}>Add Ingredient</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => ViewIngredient() }
        style={styles.button}>
        <Text style={styles.buttonTextStyle}>View Ingredient</Text>
      </TouchableOpacity>
    </View>
  );
}

async function AddRecipe () {
  try {
    await DataStore.save(
      new ingredient({
        name: "Garlic"
      })
    );
    console.log("ingredient saved successfully!");
  } catch (error) {
    console.log("Error saving ingredient", error);
  }
}

async function ViewIngredient () {
  try {
    const ingredients = await DataStore.query(ingredient);
    console.log("Posts retrieved successfully!", JSON.stringify(ingredients, null, 2));
  } catch (error) {
    console.log("Error retrieving posts", error);
  }

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    },
    logo: {
    width: 305,
    height: 159,
    resizeMode: "contain",
    },
    mainMenuText: {
    color: '#ffa500',
    },
    button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 100,
    },
    buttonTextStyle: {
    color: '#fff',
    },
    bottomview: {
    flexDirection: 'row',
    height: '100%',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    },
    settings: {
    width: 75,
    height: 75,
    alignSelf: 'flex-start',
    },
    feedback: {
    width: 50,
    height: 50,
    },
})
