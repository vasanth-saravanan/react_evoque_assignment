import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {AppStyles} from '../utils/AppStyles';
import {Themes} from '../utils/Themes';

const Dropdown = ({
  list,
  selectedValue,
  setValue,
  style = null,
  propmt = null,
}) => {
  return (
    <View style={styles.picker_container}>
      <Picker
        prompt={propmt}
        style={[Themes.textMedium, style]}
        selectedValue={selectedValue}
        onValueChange={(value, itemIndex) => setValue(value)}>
        {list.map(value => {
          return <Picker.Item label={value} value={value} key={value} />;
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    marginTop: 10,
    marginLeft: 5,
    color: AppStyles.color.geryMedium,
  },
  textInput: {backgroundColor: AppStyles.color.transparent},
  picker_container: {
    height: 20,
    width: 140,
  },
});

export default Dropdown;
