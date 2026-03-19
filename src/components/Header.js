import {View, Text, TouchableOpacity, TextInput, Alert} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";

import {svg} from "../svg";
import {theme} from "../constants";

const Header = ({
  containerStyle,
  goBack,
  title,
  logo,
  search,
  bag,
  border,
  titleStyle,
  arrowColor,
  fileIcon,
  goBackColor,
}) => {
  const navigation = useNavigation();

  const cartIsEmpty = () => {
    return Alert.alert(
      "Message",
      "Your cart is empty, add something to cart.",
      [
        {
          text: "OK",
        },
      ],
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 47,
        borderBottomWidth: border ? 1 : 0,
        ...containerStyle,
      }}>
      {goBack && (
        <View
          style={{
            position: "absolute",
            left: 0,
            alignItems: "center",
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => navigation.goBack()}>
            <svg.GoBackSvg goBackColor={goBackColor} />
          </TouchableOpacity>
        </View>
      )}
      {title && (
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.H4,
            color: theme.COLORS.mainDark,
            ...titleStyle,
          }}>
          {title}
        </Text>
      )}
      {search && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: theme.SIZES.width - 200,
          }}>
          <View style={{marginRight: 7}}>{/* <svg.HeaderSearchSvg /> */}</View>

          <TextInput
            placeholder="Search"
            style={{height: "100%", width: "100%"}}
          />
        </View>
      )}
      {fileIcon && (
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            height: "100%",
            justifyContent: "center",
            paddingLeft: 20,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              paddingVertical: 6,
            }}>
            <svg.FileTextSvg />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
