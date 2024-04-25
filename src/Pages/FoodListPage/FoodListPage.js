import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';
import styles from './FoodListPage.Style';
import MealCard from '../../Components/Cards/MealCard';
import {useNavigation, useRoute} from '@react-navigation/native';
const FoodListPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {strCategory} = route.params;
  const {data: categoryFilter} = useFetch(
    `${Config.CATEGORY_FILTER}${strCategory}`,
  );
  const renderData = ({item}) => (
    <MealCard mealsFilter={item} onSelect={() => handleDetailSelect(item)} />
  );

  const handleDetailSelect = idMeal => {
    navigation.navigate('DetailsScreen', {idMeal});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={categoryFilter.meals} renderItem={renderData} />
    </SafeAreaView>
  );
};
export default FoodListPage;
