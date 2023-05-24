import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BookList from '../components/BookList'

const BookScreen = (props) => {
    // console.log(props.navigation)
    // const onPress = () =>props.navigation.navigate("BookDetail")
  return (
    <View>
        {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onPress}
        >
            <Text>Go to Book details</Text>
        </TouchableOpacity> */}
      <BookList/>
    </View>
  )
}

// const styles = StyleSheet.create({
//     buttonStyle:{
//         backgroundColor:'blue',
//         color:'white',
//         borderWidth:1
//     }
// })

export default BookScreen

