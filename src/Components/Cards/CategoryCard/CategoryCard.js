import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.Style';

function CategoryCard({meals, onSelect}) {
  const {strCategoryThumb, strCategory} = meals;
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: strCategoryThumb}} style={styles.image} />
        <Text style={styles.categoryName}>{strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
