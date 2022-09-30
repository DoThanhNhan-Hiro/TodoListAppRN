import { StyleSheet, Alert, Text, View, Image, StatusBar, TouchableOpacity, SafeAreaView, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Task from './Components/Body'
import color from './color.js/color'
import Input from './Components/Input'
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
const App = () => {
  const [tasklist, setTasklist] = useState([])
  const handeladdtask = (task) => {
    //add task
    setTasklist([...tasklist, task])
  }
  const handeleteladdtask = (index) => {
    Alert.alert(
      "Thông báo!!!",
      "Bạn muốn xóa công việc này không?",
      [
        {
          text: "Có",
          onPress: () => {
            let tasklistTN = [...tasklist]
            tasklistTN.splice(index, 1)
            setTasklist(tasklistTN);
          }
        },
        { text: "Không", onPress: () => { } }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} />
      <View style={styles.Body}>
        <Text style={styles.todolist}> TODO LIST</Text>
        <ScrollView>
          {
            tasklist.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} ondeletetask={() => { handeleteladdtask(index) }} />

            })
          }

        </ScrollView>
      </View>
      <Input onaddTask={handeladdtask} />
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
  },
  Body: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 18,
  },
  todolist: {
    paddingBottom: 10,
    fontSize: 18,
    color: 'red',
  },
})