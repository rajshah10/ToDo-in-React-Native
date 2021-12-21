import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './src/screens/Homescreen';
import NewScreen from './src/screens/NewScreen';
import { StyleSheet} from 'react-native';
const Stack = createStackNavigator();
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#228CDB',
          },
              headerTintColor: '#fff'
          }} 
        initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Homescreen}
          options={({navigation}) => ({
            headerRight: () => (
                <Icon 
                name="plus" 
                type="feather" 
                color="#fff"
                style={style.headerIcon}
                                    onPress={() => navigation.navigate('New')}
            />
          )
          })}
          />
          <Stack.Screen 
            name="New" 
            component={NewScreen}
          />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  headerIcon: {
    marginRight: 10
  }
});