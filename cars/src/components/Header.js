import { View, Text } from 'react-native'
import React from 'react'

const Header=(props)=> {
    const {textStyling, viewStyling}=style;
  return (
      <View style={viewStyling}>
          <Text style={textStyling}>{props.title}</Text>
      </View>
  )
}
const style = {
    textStyling:{
        fontSize:50
    },
    viewStyling:{
        height:100,
      backgroundColor:"gainsboro",
      justifyContent:"center",
      alignItems:"center",
      paddingTop:25  
    }
}
export default Header;