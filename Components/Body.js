import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import color from '../color.js/color'
const Body = (props) => {
  const { number } = props
  const testnumber = number < 10 ? `0${number}` : number
  const itembackground = number % 2 === 0 ? styles.even : styles.odd
  return (
    <TouchableOpacity
      onPress={props.ondeletetask}>
      <View style={styles.item}>
        <View style={[styles.quere, itembackground]}>
          <Text style={styles.number}>{testnumber}</Text>
        </View>
        <View>
          <Text style={styles.content}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default Body
const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quere: {
    borderRadius: 15,
    height: 48,
    width: 46,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    color: 'black'
    , fontSize: 15
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quere: {
    borderRadius: 15,
    height: 48,
    width: 46,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  even: {
    backgroundColor: color.red,
  },
  odd: {
    backgroundColor: 'pink'
  },
  number: {
    color: 'black'
    , fontSize: 15
  }
})