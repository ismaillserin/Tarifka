import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryPage from './src/Pages/Category';
import FoodListPage from './src/Pages/FoodListPage';
import FoodDetailPage from './src/Pages/FoodDetailPage';

const Stack = createNativeStackNavigator();

function Router({route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'orange',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name="Categories"
          component={CategoryPage}
          options={{title: 'Categories'}}
        />
        <Stack.Screen
          name="MealsScreen"
          component={FoodListPage}
          options={({route}) => ({title: route.params.strCategory})}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={FoodDetailPage}
          options={({route}) => ({
            title: route.params.idMeal.strMeal,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
