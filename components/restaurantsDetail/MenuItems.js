import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';


const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
    },
    {
        title: "Sadine",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
    },
    {
        title: "Chicken Salad",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
    },
    {
        title: "Chicken Soup",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
    },

]

const MenuItems = () => {
    return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 50}}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox 
                iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}} />
        </View>
      ))}
    </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{ props.food.title}</Text>
        <Text>{ props.food.description}</Text>
        <Text>{ props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image 
            source={{ uri: props.food.image }}
            style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
)

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        marginHorizontal: 5,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    }
})

export default MenuItems