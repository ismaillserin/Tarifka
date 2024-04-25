import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import useFetch from '../../Hooks/useFetch';
import CategoryCard from '../../Components/Cards/CategoryCard/CategoryCard';
import styles from './CategoryPage.Style';

const CategoryPage = ({navigation}) => {
  const {data: categorieData} = useFetch(Config.CATEGORIES);

  const renderData = ({item}) => (
    <CategoryCard
      meals={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsScreen', {strCategory});
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={categorieData.categories} renderItem={renderData} />
    </SafeAreaView>
  );
};

export default CategoryPage;
