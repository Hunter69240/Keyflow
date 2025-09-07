import Home from './Screens/Home';
import TypingScreen from './Screens/TypingScreen';
import ResultScreen from './Screens/ResultScreen';
import PreviousTest from './Screens/PreviousTest';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen 
    name="Home" 
    component={Home} 
    options={{ headerShown: false }}
    />
    <Stack.Screen 
    name="TypingScreen" 
    component={TypingScreen} 
    options={{ headerShown: false }}
    />
    <Stack.Screen 
    name="ResultScreen" 
    component={ResultScreen} 
    options={{ headerShown: false }}
    />

    <Stack.Screen 
    name="PreviousTest" 
    component={PreviousTest} 
    options={{ headerShown: false }}
    />
   </Stack.Navigator>
  </NavigationContainer>
  );
}


