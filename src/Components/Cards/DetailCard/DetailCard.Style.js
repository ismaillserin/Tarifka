import {Dimensions, StyleSheet} from 'react-native';

const screenSize = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: screenSize.height / 3,
  },
  inner_container: {
    padding: 7,
  },
  title: {
    fontSize: 30,
    color: '#b71c1c',
    fontWeight: 'bold',
  },
  area: {
    fontSize: 19,
    color: '#b71c1c',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: 'gray',
    height: 1,
  },
  instructions: {
    margin: 7,
    color: 'black',
  },
  btn: {
    backgroundColor: 'red',
    margin: 6,
    borderRadius: 8,
    marginBottom: 30,
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 8,
  },
});
