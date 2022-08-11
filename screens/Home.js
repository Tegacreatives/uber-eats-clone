import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from 'react-native-elements';

const YELP_API_KEY = "ZySuuUL0eNFapPXfsmZ6r7assAU5yNc1YPG8OefuaJNhtqVn-rogY1ekaU8m_w-a2HllojOYReJZ3Fk2yrzRvUVuiG82n8yNzKP4GjKv6CAriXoof2WCAz1Li4WkYnYx"

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab ] = useState("delivery")

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
  

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then(json => setRestaurantData(
        json.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
      )
    )
  );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab])

  return (
      <SafeAreaView
          style={{
              backgroundColor: "#eee",
              flex: 1,
              marginTop: StatusBar.currentHeight
          }}>
          <View style={{backgroundColor: "white", padding: 15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar cityHandler={setCity} />
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
    </SafeAreaView>
  )
}

export default Home;