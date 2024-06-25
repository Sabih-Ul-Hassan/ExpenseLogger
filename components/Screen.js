import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
  Switch,
  FlatList,
} from 'react-native';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';
import ListItem from './ListItem';
import LightListItem from './LightListItem_';

export default Screen = (props) => {
  var [year, setYear] = useState(new Date().getFullYear());
  var [month, setMonth] = useState(new Date().getMonth() + 1);
  var [dataList, setDataList] = useState([]);
  var [allData, setAllData] = useState([]);
  var [titleInput, setTitleInput] = useState('');
  var [priceInput, setPriceInput] = useState('');
  var [update, setUpdate] = useState(false);
  var [darkTheme, setDarkTheme] = useState(false);
  var [toUpdate, setToUpdate] = useState();
  var [expendeture, setExpendeture] = useState(0);

  return (
    <View
      style={{
        backgroundColor: darkTheme ? 'black' : 'white',
        height: '100%',
      }}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 25,
            color: darkTheme ? 'white' : 'black',
            fontWeight: '600',
          }}>
          Expense Log
        </Text>
      </View>
     {
      //   <View
      //   style={{
      //     display: 'flex',
      //     flexDirection: 'row',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     paddingTop: 14,
      //   }}>
      //   <Text style={{ fontSize: 20, color: darkTheme ? 'white' : 'black' }}>
      //     Dark Mode{' '}
      //   </Text>
      //   <Switch
      //     onValueChange={() => setDarkTheme(!darkTheme)}
      //     value={darkTheme}
      //   />
      // </View>
     }
     <View
        style={{ display: 'flex', flexDirection: 'row', marginVertical: 14 }}>
        <MonthPicker
          style={styles.pickerStyle}
          setMonth={setMonth}
          year={year}
          month={month}
          allData={allData}
          setAllData={setAllData}
          dataList={dataList}
          setDataList={setDataList}
          expendeture={expendeture}
          setExpendeture={setExpendeture}
        />
        <YearPicker
          style={styles.pickerStyle}
          year={year}
          month={month}
          setYear={setYear}
          allData={allData}
          setAllData={setAllData}
          dataList={dataList}
          setDataList={setDataList}
          expendeture={expendeture}
          setExpendeture={setExpendeture}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 8,
          marginTop: 20,
        }}>
        <TextInput
          style={styles.titleField}
          value={titleInput}
          onChangeText={setTitleInput}
          placeholder="Title"
        />
        <TextInput
          style={styles.priceField}
          value={priceInput}
          keyboardType="numeric"
          onChangeText={(text) => {
            for (var i of text) if (isNaN(i)) return;
            setPriceInput(text);
          }}
          placeholder="00"
        />
      </View>
      <View style={{ marginHorizontal: 18, marginBottom: 10 }}>
        {update ? (
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity
              disabled={!titleInput || !priceInput}
              onPress={() => {
                dataList[toUpdate].title = titleInput;
                dataList[toUpdate].price = priceInput;
                setDataList([...dataList]);
                setUpdate(false);
                setTitleInput('');
                setPriceInput('');
                var ex = 0;
                dataList.forEach((x) => (ex += parseInt(x.price)));
                setExpendeture(ex);
              }}
              style={
                !titleInput || !priceInput
                  ? styles.updateBtnDisabled
                  : styles.updateBtn
              }>
              <Text style={{ color: 'white' }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setUpdate(false);
                setTitleInput('');
                setPriceInput('');
              }}
              style={styles.cancelBtn}>
              <Text style={{ color: 'white', fontSize: 18 }}>❌</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Button
            color="teal"
            disabled={!titleInput || !priceInput}
            title="Add Expense"
            onPress={() => {
              var obj = {
                date: new Date().toLocaleString(),
                title: titleInput,
                price: priceInput,
                month,
                year,
              };
              var newList = [...dataList, obj];
              setDataList(newList);
              var ex = 0;
              newList.forEach((x) => (ex += parseInt(x.price)));
              setExpendeture(ex);
              setPriceInput('');
              setTitleInput('');
            }}
          />
        )}
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          borderBottomWidth: 2,
          paddingBottom: 3,
          borderColor: 'teal',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: darkTheme ? 'white' : 'black',
            fontWeight: '600',
          }}>
          {' '}
          Total Expendeture:
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: darkTheme ? 'white' : 'black',
            fontWeight: '600',
          }}>
          {' '}
          ${expendeture}
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: darkTheme ? 'teal' : '#159696',
          height: 530,
          margin: 10,
          borderRadius: 10,
          padding: 5,
        }}>
        <ScrollView>
          {dataList.length > 0 ? (
            dataList.map((item, index) => (
              <>
                {darkTheme ? (
                  <ListItem
                    setDataList={setDataList}
                    dataList={dataList}
                    index={index}
                    item={item}
                    setUpdate={setUpdate}
                    setTitleInput={setTitleInput}
                    setPriceInput={setPriceInput}
                    setToUpdate={setToUpdate}
                    setExpendeture={setExpendeture}
                    expendeture={expendeture}
                  />
                ) : (
                  <LightListItem
                    setDataList={setDataList}
                    dataList={dataList}
                    index={index}
                    item={item}
                    setUpdate={setUpdate}
                    setTitleInput={setTitleInput}
                    setPriceInput={setPriceInput}
                    setToUpdate={setToUpdate}
                    setExpendeture={setExpendeture}
                    expendeture={expendeture}
                  />
                )}
              </>
            ))
          ) : (
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: darkTheme ? 'white' : 'black',
                  fontWeight: '600',
                }}>
                No data to show!
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  updateBtn: {
    backgroundColor: 'teal',
    alignItems: 'center',
    flex: 3,
    marginRight: 5,
    height: 35,
    justifyContent: 'center',
  },
  updateBtnDisabled: {
    backgroundColor: 'grey',
    alignItems: 'center',
    flex: 3,
    marginRight: 5,
    height: 35,
    justifyContent: 'center',
  },
  pickerStyle: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'teal',
    color: 'white',
    height: 35,
    fontSize: 16,
    borderRadius: 10,
  },
  titleField: {
    display: 'flex',
    width: '65%',
    borderBottomWidth: 2,
    marginHorizontal: 18,
    color: 'teal',
    borderColor: 'teal',
    fontSize: 17,
  },
  priceField: {
    display: 'flex',
    width: '18.6%',
    borderBottomWidth: 2,
    color: 'teal',
    borderColor: 'teal',
    fontSize: 17,
  },
  cancelBtn: {
    backgroundColor: 'teal',
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
    height: 35,
    justifyContent: 'center',
  },
});
