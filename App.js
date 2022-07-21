import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LandingPage from './components/LandingPage';
import Settings from './components/Settings';
import Feedback from './components/Feedback';
import Pantry from './components/Pantry';
import Profile from './components/Profile';
import Support from './components/Support';
import RecipePage from './components/RecipePage';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';
import ViewRecipesPage from './components/ViewRecipesPage';

import { withAuthenticator } from 'aws-amplify-react-native'

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const Drawer = createDrawerNavigator();

//export default withAuthenticator(MyDrawer);
//function MyDrawer() {

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="View Recipes">
        <Drawer.Screen name="Recipes" component={RecipePage} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Home" component={LandingPage} />
        <Drawer.Screen name="Pantry" component={Pantry} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="Support Us" component={Support} />
        <Drawer.Screen name="Sign Up" component={SignUp} />
        <Drawer.Screen name="Confirm Sign Up" component={ConfirmSignUp} />
        <Drawer.Screen name="View Recipes" component={ViewRecipesPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}