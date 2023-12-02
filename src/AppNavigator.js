import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import Profile from './screens/Profile';
import Main from './screens/Main';


const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={Profile} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
