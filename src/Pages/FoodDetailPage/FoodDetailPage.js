import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';
import styles from './FoodDetailPage.Style';
import DetailCard from '../../Components/Cards/DetailCard';

const FoodDetailPage = ({route}) => {
  const {idMeal} = route.params.idMeal;

  const {data: mealDetails} = useFetch(`${Config.MEAL_DETAIL}${idMeal}`);

  const detailsPage = ({item}) => <DetailCard mealsDetail={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={mealDetails.meals} renderItem={detailsPage} />
    </View>
  );
};

export default FoodDetailPage;
