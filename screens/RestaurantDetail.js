import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements';
import About from '../components/restaurantsDetail/About';
import MenuItems from '../components/restaurantsDetail/MenuItems';
import ViewCart from '../components/restaurantsDetail/ViewCart';

const RestaurantDetail = ({route, navigation}) => {
  return (
    <View>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems />
      <ViewCart navigation={navigation} RestaurantName={route.params.name} />
    </View>
  )
}

export default RestaurantDetail