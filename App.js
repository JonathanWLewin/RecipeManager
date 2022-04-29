import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from './components/LandingPage';
import Settings from './components/Settings';
import Feedback from './components/Feedback';
import ShoppingList from './components/ShoppingList'
import Login from './components/Login';
import Support from './components/Support';
//import Ingredient from './components/Ingredient';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Sign-In / Sign-Up" component={Login} />
        <Drawer.Screen name="Home" component={LandingPage} />
        <Drawer.Screen name="Pantry" component={ShoppingList} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Support Us" component={Support} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}