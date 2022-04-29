import React, {useState} from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { globalStyles } from './Styles';


export default function ShoppingList() {
  const [task, setItem] = useState();
  const [taskItems, setAddItems] = useState([]);

  const addItem = () => {
    Keyboard.dismiss();
    setAddItems([...taskItems, task])
    setItem(null);
  }

  const boughtItem = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setAddItems(itemsCopy)
  }

  const shoppingItems = (props) => {
        <View style={globalStyles.item}>
            <View style={globalStyles.itemLeft}>
                <View style={globalStyles.square}></View>
                <Text style={globalStyles.itemText}>{props.text}</Text>
            </View>
        </View>
  }

  return (
    <View style={styles.container}>
      {/* scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={globalStyles.tasksWrapper}>
        <Text style={globalStyles.sectionTitle}>Pantry Items</Text>
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
        style={styles.writeTaskWrapper}
      >
        <TextInput style={globalStyles.input} placeholder={'Add an Item'} value={task} onChangeText={text => setItem(text)} />
        <TouchableOpacity onPress={() => addItem()}>
          <View style={globalStyles.addWrapper}>
            <Text style={globalStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}