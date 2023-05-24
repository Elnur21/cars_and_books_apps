import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({buttonPress}) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity 
    onPress={
        buttonPress
    }
    style={buttonStyle}
    >
      <Text style={textStyle}>Button</Text>
    </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "grey",
    borderWidth: 1,
    borderColor: "gainsboro",
    marginLeft: 7,
    marginRight: 7,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 6,
    paddingBottom: 6,
    color: "white",
  },
};
export default Button;
