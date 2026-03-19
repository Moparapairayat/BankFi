import {Text, ScrollView, TouchableOpacity, Image, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {components} from "../components";
import {theme} from "../constants";

const methods = [
  {
    id: "1",
    title: "Card from another bank",
    icon: require("../assets/icons/17.png"),
  },
  {
    id: "2",
    title: "SWIFT",
    icon: require("../assets/icons/18.png"),
  },
  {
    id: "3",
    title: "SEPA",
    icon: require("../assets/icons/19.png"),
  },
  {
    id: "4",
    title: "Western Union",
    icon: require("../assets/icons/20.png"),
  },
  {
    id: "5",
    title: "Paypal",
    icon: require("../assets/icons/21.png"),
  },
  {
    id: "6",
    title: "Payoneer",
    icon: require("../assets/icons/22.png"),
  },
];

const TopUpPayment = () => {
  const renderHeader = () => {
    return <components.Header title="Top-Up payment" goBack={true} />;
  };

  const renderCards = () => {
    return (
      <View style={{marginBottom: 14}}>
        <components.SmallHeader
          title="Choose card"
          containerStyle={{marginBottom: 6}}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: theme.COLORS.white,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/cards/04.png")}
            style={{width: 72, height: 46, marginRight: 14}}
          />
          <View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.bodyTextColor,
                lineHeight: 12 * 1.6,
                fontSize: 12,
              }}
            >
              **** **** **** 8456
            </Text>
            <Text
              style={{
                ...theme.FONTS.H6,
                color: theme.COLORS.mainDark,
              }}
            >
              2 156.35 EUR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEntrepreneurAccounts = () => {
    return (
      <View style={{marginBottom: 14}}>
        <components.SmallHeader
          title="Entrepreneur accounts"
          containerStyle={{marginBottom: 6}}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: theme.COLORS.white,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/cards/05.png")}
            style={{width: 72, height: 46, marginRight: 14}}
          />
          <View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.bodyTextColor,
                lineHeight: 12 * 1.6,
                fontSize: 12,
              }}
            >
              US**********************4571
            </Text>
            <Text
              style={{
                ...theme.FONTS.H6,
                color: theme.COLORS.mainDark,
              }}
            >
              39 863.62 USD
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderOtherMethods = () => {
    return (
      <View style={{marginBottom: 20}}>
        <components.SmallHeader
          title="Entrepreneur accounts"
          containerStyle={{marginBottom: 6}}
        />
        {methods.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: "100%",
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                marginBottom: index === methods.length - 1 ? 20 : 6,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 14,
                }}
              />
              <Text
                style={{
                  ...theme.FONTS.H6,
                  color: theme.COLORS.mainDark,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        {renderCards()}
        {renderEntrepreneurAccounts()}
        {renderOtherMethods()}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default TopUpPayment;
