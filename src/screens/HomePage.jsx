import { StyleSheet, Text, View , useColorScheme} from 'react-native'
import React from 'react'

const HomePage = () => {
    const isDarkMode = useColorScheme() === 'dark' ;
  return (
    <View className={`${isDarkMode ? "bg-slate-900": "bg-gray-300"} min-h-screen`}>
      <Text>HomePage</Text>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})