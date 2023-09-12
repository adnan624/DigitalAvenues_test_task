import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../Screens/ListScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      initialRouteName='ListScreen'
      >
        <Stack.Screen name="ListScreen" component={ListScreen}  options={{ headerShown: false }} />  
        <Stack.Screen name="DetailScreen" component={DetailScreen}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}