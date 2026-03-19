import {View, TouchableOpacity, ScrollView, Image, Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Shadow} from "react-native-shadow-2";

import {theme} from "../constants";
import {components} from "../components";

const cards = [
  {
    id: 1,
    cardNumber: "**** **** **** 7895",
    cardType: "Mastercard",
    cardIcon: "https://dl.dropbox.com/s/46hos2gmor3q1t8/01.jpg?dl=0",
    balance: 4863.27,
    currency: "USD",
  },
  {
    id: 2,
    cardNumber: "**** **** **** 8456",
    cardType: "Mastercard",
    cardIcon: "https://dl.dropbox.com/s/u8fqyoz4xle94md/02.jpg?dl=0",
    balance: 2156.35,
    currency: "USD",
  },
];

const entrepreneurAccounts = [
  {
    id: 1,
    accountNumber: "**** **** **** 4571",
    accountIcon: "https://dl.dropbox.com/s/c3f3sd2o8pegjg0/03.jpg?dl=0",
    balance: 39863.62,
    currency: "USD",
  },
];

const ongoingCredits = [
  {
    id: 1,
    creditNumber: "**** **** **** 6547",
    creditIcon: "https://dl.dropbox.com/s/46hos2gmor3q1t8/01.jpg?dl=0",
    balance: 39863.62,
    currency: "USD",
  },
];

const CardMenu = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Card menu" goBack={true} />;
  };

  const renderCards = () => {
    return (
      <View style={{marginTop: 20, marginBottom: 14}}>
        <Text
          style={{
            marginBottom: 6,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 12 * 1.6,
          }}
        >
          Cards
        </Text>
        <View>
          {cards.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 70,
                  width: "100%",
                  marginBottom: array.length - 1 === index ? 0 : 6,
                }}
                onPress={() => navigation.navigate("CardDetails")}
              >
                <Shadow
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: "white",
                    padding: 12,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  containerStyle={{
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                  offset={[0, 0]}
                  distance={15}
                  startColor={"rgba(6, 38, 100, 0.02)"}
                  endColor={"rgba(6, 38, 100, 0.0)"}
                >
                  <Image
                    source={{uri: item.cardIcon}}
                    style={{
                      width: 72,
                      height: 46,
                      marginRight: 14,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_400Regular,
                        fontSize: 12,
                        lineHeight: 12 * 1.6,
                        color: theme.COLORS.bodyTextColor,
                      }}
                    >
                      {item.cardNumber}
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      {item.balance} {item.currency}
                    </Text>
                  </View>
                </Shadow>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderEntrepreneurAccounts = () => {
    return (
      <View style={{marginBottom: 14}}>
        <Text
          style={{
            marginBottom: 6,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 12 * 1.6,
          }}
        >
          Entrepreneur accounts
        </Text>
        <View>
          {entrepreneurAccounts.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 70,
                  width: "100%",
                  marginBottom: array.length - 1 === index ? 0 : 6,
                }}
              >
                <Shadow
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: "white",
                    padding: 12,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  containerStyle={{
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                  offset={[0, 0]}
                  distance={15}
                  startColor={"rgba(6, 38, 100, 0.02)"}
                  endColor={"rgba(6, 38, 100, 0.0)"}
                >
                  <Image
                    source={{uri: item.accountIcon}}
                    style={{
                      width: 72,
                      height: 46,
                      marginRight: 14,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_400Regular,
                        fontSize: 12,
                        lineHeight: 12 * 1.6,
                        color: theme.COLORS.bodyTextColor,
                      }}
                    >
                      {item.accountNumber}
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.mainDark,
                      }}
                    >
                      {item.balance} {item.currency}
                    </Text>
                  </View>
                </Shadow>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderOngoingCredits = () => {
    return (
      <View>
        <Text
          style={{
            marginBottom: 6,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 12,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 12 * 1.6,
          }}
        >
          Ongoing credits
        </Text>
        <View>
          {ongoingCredits.map((item, index, array) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 70,
                  width: "100%",
                  marginBottom: array.length - 1 === index ? 0 : 6,
                }}
              >
                <Shadow
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: "white",
                    padding: 12,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  containerStyle={{
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                  offset={[0, 0]}
                  distance={15}
                  startColor={"rgba(6, 38, 100, 0.02)"}
                  endColor={"rgba(6, 38, 100, 0.0)"}
                >
                  <Image
                    source={{uri: item.creditIcon}}
                    style={{
                      width: 72,
                      height: 46,
                      marginRight: 14,
                      borderRadius: 5,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        ...theme.FONTS.Mulish_400Regular,
                        fontSize: 12,
                        lineHeight: 12 * 1.6,
                        color: theme.COLORS.bodyTextColor,
                      }}
                    >
                      {item.creditNumber}
                    </Text>
                    <Text
                      style={{
                        ...theme.FONTS.H5,
                        color: theme.COLORS.linkColor,
                      }}
                    >
                      {item.balance} {item.currency}
                    </Text>
                  </View>
                </Shadow>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: theme.COLORS.white,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: 10,
            marginTop: theme.SIZES.height * 0.1,
          }}
        >
          <Image
            source={require("../assets/other-icons/32.png")}
            style={{
              width: 19.76,
              height: 19.72,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.bodyTextColor,
          }}
        >
          Add a new card
        </Text>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        {renderCards()}
        {renderEntrepreneurAccounts()}
        {renderOngoingCredits()}
        {renderButton()}
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

export default CardMenu;
