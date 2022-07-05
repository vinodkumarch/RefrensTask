import {StyleSheet} from 'react-native';

export const renderItemStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },
  subContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titleTextContainer: {
    color: 'black',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
});
