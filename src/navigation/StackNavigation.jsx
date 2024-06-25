import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoryScreen from '../screens/CategoryScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ProductPage from '../screens/ProductPage';
import ProductList from '../screens/ProductList';
import SubcategoryScreen from '../screens/SubcategoryScreen'; // Import SubcategoryScreen

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} color="#3F6065" />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="align-justify" size={24} color="#3F6065" />
            ) : (
              <Feather name="align-justify" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search-sharp" size={30} color="#3F6065" />
            ) : (
              <Ionicons name="search-outline" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="shopping-cart" size={24} color="#3F6065" />
            ) : (
              <AntDesign name="shoppingcart" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

// Guest Screen Bottom Tabs
function BottomTabGuest() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} color="#3F6065" />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="align-justify" size={24} color="#3F6065" />
            ) : (
              <Feather name="align-justify" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search-sharp" size={30} color="#3F6065" />
            ) : (
              <Ionicons name="search-outline" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: { color: '#3F6065' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#3F6065" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuestScreen"
          component={BottomTabGuest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={{ headerShown: true, title: 'Products' }}
        />
        <Stack.Screen
          name="SubcategoryScreen"
          component={SubcategoryScreen}
          options={{ headerShown: true, title: 'Subcategory Products' }} // Add SubcategoryScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
