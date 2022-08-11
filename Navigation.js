import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import { Provider as ReduxProvider } from 'react-redux';
import store from "./redux/store";

const RootNavigation = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
}

export default RootNavigation;