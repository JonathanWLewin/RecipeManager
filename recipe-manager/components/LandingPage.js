import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/temp_logo.png';
import cog from '../assets/settings.jpg';
import feedback from '../assets/feedback.png';
import { globalStyles } from ".components/Styles";

export default function LandingPage() {
    return (
      <View style={globalStyles.landingContainer}>
        <Image source={logo} style={globalStyles.logo}/>
        <Text style={globalStyles.mainMenuText}>Upload, share, and shop your recipes</Text>
        <TouchableOpacity
          onPress={() => alert('You are now in the Recipes tab')}
          style={globalStyles.button}>
        <Text style={globalStyles.buttonTextStyle}>Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Ingredients')}
          style={globalStyles.button}>
          <Text style={globalStyles.buttonTextStyle}>Ingredients</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View style={globalStyles.bottomview}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}>
              <Image source={cog} style={globalStyles.settings}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feedback')}>
              <Image source={feedback} style={globalStyles.feedback}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    landingContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    },
})