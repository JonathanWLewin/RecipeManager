import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from './components/LandingPage';
import Ingredients from './components/Ingredients';
import Settings from './components/Settings';
import Feedback from './components/Feedback';
import ShoppingList from './components/ShoppingList'

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={LandingPage} />
        <Drawer.Screen name="Ingredients" component={Ingredients} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Shopping List" component={ShoppingList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}