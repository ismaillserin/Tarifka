import {StyleSheet, Dimensions} from 'react-native';
const screenSize = Dimensions.get('screen');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 7,
  },
  image: {
    maxWidth: screenSize.width,
    height: screenSize.height / 4,
  },
  imageText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 7,
    textAlign: 'right',
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageStyle: {
    borderRadius: 10,
  },
});
