import {StyleSheet} from 'react-native';
import {AppStyles} from './AppStyles';

export const BasePagestyles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: AppStyles.color.white,
  },
  container: {
    flex: 1,
    margin: 5,
  },
  flex: {
    flex: 1,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginRight5: {
    marginRight: 5,
  },
  marginTop5: {
    marginTop: 5,
  },
  marginBottom5: {
    marginBottom: 5,
  },
  marginHorizontal5: {
    marginHorizontal: 5,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginVertical5: {
    marginVertical: 5,
  },
  left10: {
    left: 10,
  },
  right10: {
    right: 10,
  },
  height5: {
    height: '5%',
  },
});
