import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
export default YearPicker = (props) => {
  var years = [];
  for (var i = 2000; i <= new Date().getFullYear(); i++) {
    years.unshift((i+""));
  }
  return (
    <Picker
      style={props.style}
      selectedValue={props.year}
      onValueChange={(itemValue) => { 
        if(!itemValue) itemValue=props.year
        props.setYear(itemValue); 
        var newArr = [];
        props.allData.forEach((x) => newArr.push(x));
        props.dataList.forEach((x) => newArr.push(x));
        var filtered1 = [];
        var filtered2 = [];
        newArr.forEach((x) =>
          x.month === props.month && x.year === itemValue
            ? filtered1.push(x)
            : filtered2.push(x)
        );

        props.setDataList(filtered1);
        props.setAllData(filtered2);
        var ex = 0;
        filtered1.forEach((x) => (ex += parseInt(x.price)));
        props.setExpendeture(ex);
      }}>
      {years.map((i) => (
        <Picker.Item label={(i+"")} value={(i+"")} />
      ))}
    </Picker>
  );
};
 