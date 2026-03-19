import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {theme} from "../constants";

const Button = ({title, onPress, containerStyle}) => {
  return (
    <View style={{...containerStyle, width: "100%"}}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={["#96D9FE", "#1D5DA2"]}
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text
            style={{
              color: theme.COLORS.white,
              ...theme.FONTS.Mulish_600SemiBold,
              fontSize: 16,
            }}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
