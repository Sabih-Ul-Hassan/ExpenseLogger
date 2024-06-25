import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default ListItem = (props) => {
  return (
    <View style={{ borderBottomWidth: 1, borderColor: 'white' }}>
      <View style={styles.listItemRow1}>
        <Text style={{ flex: 2, borderRightWidth: 1, borderColor: 'white' , color:"white"}}>
          {props.index} : {props.item.title}
        </Text>
        <Text style={styles.listItemPriceText}>$:{props.item.price}</Text>
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
    alignItems: 'center',
  },
  listItemPriceText: {
    paddingRight: 5,
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'white',
    justifyContent: 'flex-end',
    display: 'flex',
    color: 'white',
  },
  listItemsButtonsView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  itemListButton: { fontSize: 20, color: 'white' },
  listItemsDateTimeText: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 20,
    fontSize: 12,
    paddingBottom: 3,
    color: 'white',
  },
});
