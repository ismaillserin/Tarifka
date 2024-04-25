import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MealCard.Style';

const MealCard = ({mealsFilter, onSelect}) => {
  const {strMeal, strMealThumb} = mealsFilter;
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.mainContainer}>
        <ImageBackground
          source={{uri: strMealThumb}}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <Text style={styles.imageText}>{strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MealCard;
