import {View, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";

import {theme} from "../constants";

const InputField = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  leftIcon,
  rightIcon,
}) => {
  const [isFocused, setIsFocused] = useState(0);

  return (
    <View
      style={{
        height: 50,
        width: "100%",
        backgroundColor: theme.COLORS.white,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: isFocused
          ? theme.COLORS.mainDark
          : theme.COLORS.transparent,
        flexDirection: "row",
        alignItems: "center",
        ...containerStyle,
      }}>
      {leftIcon && leftIcon}
      <TextInput
        placeholder={placeholder}
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: 14,
          lineHeight: 16 * 1,
          ...theme.FONTS.Mulish_400Regular,
        }}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"#868698"}
        keyboardType={keyboardType}
        numberOfLines={1}
        onFocus={() => setIsFocused(1)}
        onBlur={() => setIsFocused(0)}
      />
      {rightIcon && rightIcon}
    </View>
  );
};

export default InputField;
