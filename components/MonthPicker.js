import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
export default MonthPicker = (props) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <Picker
      style={props.style}
      selectedValue={month[props.month - 1]}
      onValueChange={(itemValue, itemIndex) => {
        props.setMonth(itemIndex + 1);

        var newArr = [];
        props.allData.forEach((x) => newArr.push(x));
        props.dataList.forEach((x) => newArr.push(x));
        var filtered1 = [];
        var filtered2 = [];
        newArr.forEach((x) =>
          x.month === itemIndex + 1 && x.year === props.year
            ? filtered1.push(x)
            : filtered2.push(x)
        );
        
        props.setDataList(filtered1);
        props.setAllData(filtered2);
        var ex = 0;
        filtered1.forEach((x) => (ex += parseInt(x.price)));
        props.setExpendeture(ex);
      }}>
      {month.map((x) => (
        <Picker.Item label={x} value={x} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  // pickerStyle: {},
});
