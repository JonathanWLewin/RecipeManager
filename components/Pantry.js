import React, {useState} from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { globalStyles } from './Styles';
import { DataStore } from 'aws-amplify';
import { shoppingItem } from '../src/models';

export default function ShoppingList() {
  const [task, setItem] = useState();
  const [taskItems, setAddItems] = useState([]);

  const addItem = () => {
    Keyboard.dismiss();
    //setAddItems([...taskItems, task])
    AddShoppingItem(task);
    console.log(task);
    setItem(null);
    createShoppingList();
  }

  const boughtItem = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setAddItems(itemsCopy)
  }

  return (
    <View style={globalStyles.container}>
      {/* scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={globalStyles.tasksWrapper}>
        <View style={globalStyles.items}>
          {/* Where Items Appear */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => boughtItem(index)}>
                  <shoppingItems text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Adding an Item*/}
      {/* keyboard avoiding view so Keyboard scrolls with items */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={globalStyles.writeTaskWrapper}
      >
        <TextInput style={globalStyles.input} placeholder={'Add an Item'} value={task} onChangeText={text => setItem(text)} />
        <TouchableOpacity onPress={() => addItem()}>
          <View style={globalStyles.addWrapper}>
            <Text style={globalStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <TouchableOpacity 
        onPress={() => ViewShoppingList() }
        style={globalStyles.button}>
        <Text style={globalStyles.buttonTextStyle}>View Ingredient</Text>
      </TouchableOpacity>    
      </View>
  );

  async function AddShoppingItem (itemName) {
    try {
      await DataStore.save(
        new shoppingItem({
          name: itemName
        })
      );
      console.log("shopping saved successfully!");
    } catch (error) {
      console.log("Error saving shopping", error);
    }
  }
  
  async function ViewShoppingList () {
    try {
      const shoppingItems = await DataStore.query(shoppingItem);
      console.log("shopping retrieved successfully!", JSON.stringify(shoppingItems, null, 2));
      return shoppingItems
    } catch (error) {
      console.log("Error retrieving shopping", error);
    }
  }

async function createShoppingList () {
  //taskItems = null
  const shoppingItems=await ViewShoppingList()
  console.log(shoppingItems[0].name)
  for (var i=0; i < shoppingItems.length; i++){
    setAddItems(shoppingItems[i].name)
  }
}
}

//just get it to a string dummy
