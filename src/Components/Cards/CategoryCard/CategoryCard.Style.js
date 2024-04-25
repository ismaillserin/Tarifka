import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    flexDirection: 'row',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 5,
    borderTopightRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  categoryName: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginStart: 15,
  },
});
