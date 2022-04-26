import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a1a09f',
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 100,
  },
  buttonTextStyle: {
    color: '#fff',
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
  mainMenuText: {
    color: '#ffa500',
  },
  bottomview: {
    flexDirection: 'row',
    height: '100%',
    width: '80%',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },
  logo: {
    width: 305,
    height: 159,
    resizeMode: "contain",
  },
});