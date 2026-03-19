import {View, TouchableOpacity, Text, Image, ScrollView} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {theme} from "../constants";
import {components} from "../components";

const cards = [
  {
    id: "1",
    card: require("../assets/cards/01.png"),
  },
  {
    id: "2",
    card: require("../assets/cards/01.png"),
  },
  {
    id: "3",
    card: require("../assets/cards/01.png"),
  },
];

const OpenNewCard = () => {
  const [typeCard, setTypeCard] = useState("Debet");
  const [masterOrVisa, setMasterOrVisa] = useState("Visa");
  const [chooseCurrency, setChooseCurrency] = useState("USD");

  const renderHeader = () => {
    return <components.Header title="Open new card" goBack={true} />;
  };

  const renderBackground = () => {
    return (
      <Image
        source={require("../assets/bg/07.png")}
        style={{
          width: "100%",
          height: 530,
          position: "absolute",
          marginTop: 100,
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{paddingHorizontal: 20}}>
          <components.SmallHeader
            title="Type:"
            containerStyle={{marginBottom: 6}}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor:
                  typeCard === "Debet"
                    ? theme.COLORS.mainDark
                    : theme.COLORS.white,
                borderRadius: 10,
                marginRight: 14,
              }}
              onPress={() => setTypeCard("Debet")}
            >
              <Text
                style={{
                  color:
                    typeCard === "Debet"
                      ? theme.COLORS.white
                      : theme.COLORS.mainDark,
                }}
              >
                Debet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTypeCard("Credit")}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor:
                  typeCard === "Credit"
                    ? theme.COLORS.mainDark
                    : theme.COLORS.white,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color:
                    typeCard === "Credit"
                      ? theme.COLORS.white
                      : theme.COLORS.mainDark,
                }}
              >
                Credit
              </Text>
            </TouchableOpacity>
          </View>
          <components.SmallHeader
            title="Payment system:"
            containerStyle={{marginBottom: 6}}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
                marginRight: 14,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setMasterOrVisa("Visa")}
            >
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 18 / 2,
                  borderWidth: 2,
                  borderColor: "#CED6E1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                {masterOrVisa === "Visa" && (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: theme.COLORS.green,
                      borderRadius: 10 / 2,
                    }}
                  />
                )}
              </View>
              <Image
                source={require("../assets/other-icons/30.png")}
                style={{width: 40.43, height: 12}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingVertical: 8,
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
                marginRight: 14,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setMasterOrVisa("MasterCard")}
            >
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 18 / 2,
                  borderWidth: 2,
                  borderColor: "#CED6E1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                {masterOrVisa === "MasterCard" && (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: theme.COLORS.green,
                      borderRadius: 10 / 2,
                    }}
                  />
                )}
              </View>
              <Image
                source={require("../assets/other-icons/31.png")}
                style={{width: 26.35, height: 16}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              paddingLeft: 20,
              marginBottom: 30,
            }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={{marginRight: 20}}>
                  <Image source={item.card} style={{width: 290, height: 176}} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.6,
              color: theme.COLORS.bodyTextColor,
              marginBottom: 20,
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
          <components.SmallHeader
            title="Choose currency:"
            containerStyle={{marginBottom: 6}}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                backgroundColor:
                  chooseCurrency === "USD"
                    ? theme.COLORS.mainDark
                    : theme.COLORS.white,
                paddingVertical: 8,
                borderRadius: 10,
                marginRight: 14,
              }}
              onPress={() => setChooseCurrency("USD")}
            >
              <Text
                style={{
                  color:
                    chooseCurrency === "USD"
                      ? theme.COLORS.white
                      : theme.COLORS.mainDark,
                }}
              >
                USD
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                backgroundColor:
                  chooseCurrency === "EUR"
                    ? theme.COLORS.mainDark
                    : theme.COLORS.white,
                paddingVertical: 8,
                borderRadius: 10,
              }}
              onPress={() => setChooseCurrency("EUR")}
            >
              <Text
                style={{
                  color:
                    chooseCurrency === "EUR"
                      ? theme.COLORS.white
                      : theme.COLORS.mainDark,
                }}
              >
                EUR
              </Text>
            </TouchableOpacity>
          </View>
          <components.Button
            title="Add new card"
            containerStyle={{
              marginTop: theme.SIZES.height * 0.08,
            }}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default OpenNewCard;
