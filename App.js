import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStack from './src/Navigation/Navigation'
import { Provider } from 'react-redux'
import store from './src/Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})