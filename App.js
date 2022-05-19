import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from './components/LandingPage';
import Settings from './components/Settings';
import Feedback from './components/Feedback';
import Pantry from './components/Pantry';
import Login from './components/Login';
import Support from './components/Support';
//import Ingredient from './components/Ingredient';

import { withAuthenticator } from 'aws-amplify-react-native'

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const Drawer = createDrawerNavigator();

//export default withAuthenticator(MyDrawer);

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Sign-In / Sign-Up" component={Login} />
        <Drawer.Screen name="Home" component={LandingPage} />
        <Drawer.Screen name="Pantry" component={Pantry} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Support Us" component={Support} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}