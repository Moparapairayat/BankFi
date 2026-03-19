import {View, Text, TouchableOpacity, Image} from "react-native";
import React from "react";

import {theme} from "../constants";

const Transaction = ({
  amount,
  transactionType,
  paymentType,
  onPress,
  containerStyle,
  deposit,
  transfer,
  amazon,
  payPal,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...containerStyle,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: theme.COLORS.white,
        borderRadius: 10,
      }}
    >
      {transfer && (
        <Image
          source={require("../assets/payment/01.png")}
          style={{width: 40, height: 40, marginRight: 14}}
        />
      )}
      {amazon && (
        <Image
          source={require("../assets/payment/02.png")}
          style={{width: 40, height: 40, marginRight: 14}}
        />
      )}
      {payPal && (
        <Image
          source={require("../assets/payment/03.png")}
          style={{width: 40, height: 40, marginRight: 14}}
        />
      )}
      <View>
        <Text
          style={{
            ...theme.FONTS.H6,
            color: theme.COLORS.mainDark,
          }}
        >
          {paymentType}
        </Text>
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            lineHeight: 12 * 1.2,
            color: theme.COLORS.bodyTextColor,
          }}
        >
          {transactionType}
        </Text>
      </View>
      <View style={{marginLeft: "auto"}}>
        <Text
          style={{
            ...theme.FONTS.H6,
            color: deposit ? theme.COLORS.green : theme.COLORS.mainDark,
          }}
        >
          {amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Transaction;
