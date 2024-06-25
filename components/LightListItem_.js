import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default LightListItem = (props) => {
  return (
    <View style={{   borderColor: 'black', backgroundColor:'white' 
    , padding:10, margin:5,borderRadius:5}}>
      <Text  >
         {props.item.title}
      </Text>
      <View style={styles.listItemRow1}>  
        <Text style={styles.listItemPriceText}>{props.item.price}$</Text>
        <View style={styles.listItemsButtonsView}>
          <TouchableOpacity
            onPress={() => {
              props.setToUpdate(props.index);
              props.setTitleInput(props.item.title);
              props.setPriceInput(props.item.price);
              props.setUpdate(true);
            }}>
            <Text style={styles.itemListButton}>✎</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              var x = [];
              for (var i = 0; i < props.dataList.length; i++)
                if (i != props.index) x.push(props.dataList[i]);
              props.setDataList(x);
              var ex = 0;
              x.forEach((y) => (ex += parseInt(y.price)));
              props.setExpendeture(ex);
            }}>
            <Text style={styles.itemListButton}>🗑</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.listItemsDateTimeText}>{props.item.date}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItemRow1: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 4, 
  },
  listItemPriceText: {
    paddingRight: 5,
    flex: 1,   
    display: 'flex',
    color: 'black',
  },
  listItemsButtonsView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  itemListButton: { fontSize: 20, color: 'black' },
  listItemsDateTimeText: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 12,
    paddingBottom: 3,
    color: 'black',
  },
});
