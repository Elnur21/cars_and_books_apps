import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookDetailScreen = (props) => {
    const book=props.navigation.getParam('book');
    console.log(book)
  return (
    <View>
      <Text>{book.title}-{book.author}</Text>
    </View>
  )
}
const styles = StyleSheet.create({})
export default BookDetailScreen

