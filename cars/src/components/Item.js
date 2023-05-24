import { View, Text } from 'react-native'
import React from 'react'

const Item = (props) => {
  return (
    <View style={styles.viewStyle}>
        {props.children}
    </View>
  )
}
const styles={
    viewStyle:{
        borderWidth:1,
        borderColor:'gainsboro',
        shadowColor:'black',
        borderBottomWidth:0,
        shadowOffSet:{height:1,width:1},
        shadowOpacity:0.1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
}
export default Item