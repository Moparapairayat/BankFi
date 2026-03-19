import {View, Text, TextInput} from "react-native";
import React, {useState} from "react";

import {theme} from "../constants";

const Number = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={{
        backgroundColor: theme.COLORS.white,
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: isFocused ? "#4C4C60" : "transparent",
      }}>
      <TextInput
        style={{
          textAlign: "center",
          flex: 1,
        }}
        keyboardType="number-pad"
        maxLength={1}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default Number;
