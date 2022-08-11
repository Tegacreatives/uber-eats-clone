import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.4
    },
    {
        name: "India's Grill",
        image_url: "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
        categories: ["Canada", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.8
    },
    {
        name: "Lagos Finest",
        image_url: "https://static4.depositphotos.com/1015060/494/i/600/depositphotos_4947647-stock-photo-restaurant.jpg",
        categories: ["India", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.6
    },
]

const RestaurantItems = ({navigation, ...props}) => {
    return (
    <>
        {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity 
                key={index}
                activeOpacity={1}
                style={{ marginBottom: 30 }}
                onPress={() => navigation.navigate("RestaurantDetail", {
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.review_count,
                    rating: restaurant.rating,
                    categories: restaurant.categories,
                })}
            >
        <View style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo 
               name={restaurant.name} 
               rating={restaurant.rating} />
       </View>
      </TouchableOpacity>
        ))}
    </>
  )
}

const RestaurantImage = (props) => {
   return (
        <>
            <Image
                source={{uri: props.image}}
                style={{ width: "100%", height: 180 }}
            />
            <TouchableOpacity style={{
                position: "absolute", right: 20, top: 20
            }}>
                <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
            </TouchableOpacity>
        </>
    
    )
}

const RestaurantInfo = (props) => {
   return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
            </View>
            <View style={{
                backgroundColor: "#fff",
                height: 30,
                width: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>{props.rating}</Text>
            </View>
        </View>
    )
}

export default RestaurantItems