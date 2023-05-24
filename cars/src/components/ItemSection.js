import { View, Text } from 'react-native'
import React from 'react'

const ItemSection = (props) => {
  return (
    <View style={styles.viewStyle}>
        {props.children}
    </View>
  )
}
const styles={
    viewStyle:{
        borderColor:'gainsboro',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:5
        
    }
}
export default ItemSection