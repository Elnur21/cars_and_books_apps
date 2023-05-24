import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native'
import React from 'react'
import books from '../../data/books.json'
import { withNavigation } from 'react-navigation'
const BookList = (props) => {
    // const onPress = () =>props.navigation.navigate("BookDetail", {book: item})
  return (
    <View>
      <FlatList 
      data={books} 
      renderItem={
          ({item})=>{
            return (
                <TouchableOpacity
        onPress={() =>props.navigation.navigate("BookDetail", {book: item})}
        >
             <Text>{item.title}</Text>
        </TouchableOpacity>
                
            
            );
          }
      }
      keyExtractor={
          (book)=>book.title
      }
      />
    </View>
  )
}
const styles = StyleSheet.create({})
export default withNavigation(BookList);

