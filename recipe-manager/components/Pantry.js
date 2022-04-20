import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';


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
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
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

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Pantry Items</Text>
        <View style={styles.items}>
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
        <TextInput style={styles.input} placeholder={'Add an Item'} value={task} onChangeText={text => setItem(text)} />
        <TouchableOpacity onPress={() => addItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#966f33',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fbfbf8',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fbfbf8',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fbfbf8',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},

  item:{
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
},
itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
},
itemText:{
    maxWidth: '80%',
},
});