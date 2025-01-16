import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    }
})