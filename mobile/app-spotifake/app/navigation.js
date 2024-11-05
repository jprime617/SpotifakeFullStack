import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pagar from './pagamento/pagar';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="Pagar" component={Pagar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
