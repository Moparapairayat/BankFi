import {View, TouchableOpacity, ScrollView, Image, Text} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";

import {theme} from "../constants";
import {components} from "../components";

const payments = [
  {
    id: "1",
    paymentType: "Money transfer",
    transactionQuantity: "36",
    transactionAmount: "7923.52",
    transactionPercentage: "32.5",
    transactionIcon: require("../assets/icons/27.png"),
  },
  {
    id: "2",
    paymentType: "Food products",
    transactionQuantity: "18",
    transactionAmount: "1398.27",
    transactionPercentage: "32.5",
    transactionIcon: require("../assets/icons/28.png"),
  },
  {
    id: "3",
    paymentType: "Cafe and restaurants",
    transactionQuantity: "12",
    transactionAmount: "932.18",
    transactionPercentage: "32.5",
    transactionIcon: require("../assets/icons/29.png"),
  },
  {
    id: "4",
    paymentType: "Medical supplies",
    transactionQuantity: "4",
    transactionAmount: "466.09",
    transactionPercentage: "32.5",
    transactionIcon: require("../assets/icons/30.png"),
  },
];

const cards = [
  {
    id: "1",
    cardType: "Mastercard",
    cardNumber: "**** **** **** 7895",
    cardAmount: "4 863.27",
    cardCurrency: "USD",
    cardIcon: require("../assets/cards/06.png"),
  },
  {
    id: "2",
    cardType: "Mastercard",
    cardNumber: "**** **** **** 8456",
    cardAmount: "2 156.35",
    cardCurrency: "EUR",
    cardIcon: require("../assets/cards/04.png"),
  },
];

const Statistics = () => {
  const [selected, setSelected] = useState("Income");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  const renderInfoModal = () => {
    return (
      <Modal
        isVisible={showInfoModal}
        onBackdropPress={() => setShowInfoModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
      >
        <View
          style={{
            backgroundColor: theme.COLORS.bgColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            width: theme.SIZES.width,
            bottom: 0,
            paddingHorizontal: 20,
            paddingTop: 30,
            paddingBottom: 54,
          }}
        >
          <Text
            style={{
              textTransform: "capitalize",
              marginBottom: 20,
              textAlign: "center",
              ...theme.FONTS.H4,
              color: theme.COLORS.mainDark,
            }}
          >
            Choose card
          </Text>
          {cards.map((item, index, array) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: theme.COLORS.white,
                  borderRadius: 10,
                  padding: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: array.length - 1 === index ? 0 : 6,
                }}
                key={index}
                onPress={() => selectedCard !== item && setSelectedCard(item)}
              >
                <Image
                  source={require("../assets/cards/06.png")}
                  style={{
                    width: 72,
                    height: 46,
                    marginRight: 14,
                  }}
                />
                <View style={{marginRight: "auto"}}>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_400Regular,
                      fontSize: 12,
                      lineHeight: 12 * 1.6,
                      color: "#4C4C60",
                    }}
                  >
                    {item.cardNumber}
                  </Text>
                  <Text
                    style={{
                      ...theme.FONTS.Mulish_600SemiBold,
                      fontSize: 14,
                      lineHeight: 14 * 1.6,
                      color: theme.COLORS.mainDark,
                    }}
                  >
                    {item.cardAmount} {item.cardCurrency}
                  </Text>
                </View>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    borderWidth: 2,
                    borderRadius: 9,
                    borderColor: "#CED6E1",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {selectedCard === item && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 10 / 2,
                        backgroundColor: theme.COLORS.green,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    );
  };

  const renderBackground = () => {
    return (
      <View>
        <Image
          source={require("../assets/bg/06.png")}
          style={{
            width: "100%",
            height: 530,
            position: "absolute",
            top: 90,
          }}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return <components.Header title="Statistics" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 5,
            padding: 2,
            marginTop: 20,
            backgroundColor: theme.COLORS.white,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: "49%",
            }}
            onPress={() => setSelected("Income")}
          >
            <LinearGradient
              colors={[
                selected === "Income" ? "#96D9FE" : theme.COLORS.white,
                selected === "Income" ? "#1D5DA2" : theme.COLORS.white,
              ]}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingVertical: 3,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 14,
                  color:
                    selected === "Income"
                      ? theme.COLORS.white
                      : theme.COLORS.bodyTextColor,
                  lineHeight: 14 * 1.6,
                }}
              >
                Income
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "49%",
            }}
            onPress={() => setSelected("Expenses")}
          >
            <LinearGradient
              colors={[
                selected === "Expenses" ? "#96D9FE" : theme.COLORS.white,
                selected === "Expenses" ? "#1D5DA2" : theme.COLORS.white,
              ]}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingVertical: 3,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 14,
                  color:
                    selected === "Expenses"
                      ? theme.COLORS.white
                      : theme.COLORS.bodyTextColor,
                  lineHeight: 14 * 1.6,
                }}
              >
                Income
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              lineHeight: 16 * 1.6,
              color: theme.COLORS.bodyTextColor,
            }}
          >
            Sep 1 - Sep 20, 2022
          </Text>
          <Image
            source={require("../assets/other-icons/24.png")}
            style={{width: 16, height: 16, marginLeft: 14}}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: theme.COLORS.white,
            borderRadius: 10,
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
          }}
          onPress={() => setShowInfoModal(true)}
        >
          <Image
            source={require("../assets/cards/06.png")}
            style={{width: 72, height: 46, marginRight: 14}}
          />
          <View>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 12,
                lineHeight: 12 * 1.6,
                color: "#4C4C60",
              }}
            >
              **** **** **** 7895
            </Text>
            <Text
              style={{
                ...theme.FONTS.Mulish_600SemiBold,
                fontSize: 14,
                lineHeight: 14 * 1.6,
                color: theme.COLORS.mainDark,
              }}
            >
              4 863.27 USD
            </Text>
          </View>
          <Image
            source={require("../assets/other-icons/25.png")}
            style={{
              width: 16,
              height: 16,
              marginLeft: "auto",
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/other-icons/26.png")}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            marginBottom: 13,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            ...theme.FONTS.Mulish_600SemiBold,
            fontSize: 32,
            lineHeight: 32 * 1.6,
            color: theme.COLORS.mainDark,
            marginBottom: 19,
          }}
        >
          - $ 11 654.24
        </Text>
        {payments.map((item, index, array) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: "100%",
                backgroundColor: theme.COLORS.white,
                borderRadius: 10,
                marginBottom: array.length - 1 === index ? 20 : 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={item.transactionIcon}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 14,
                }}
              />
              <View>
                <Text
                  style={{
                    ...theme.FONTS.H6,
                    color: theme.COLORS.mainDark,
                  }}
                >
                  {item.paymentType}
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.6,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  {item.transactionQuantity} stransactions
                </Text>
              </View>
              <View style={{marginLeft: "auto"}}>
                <Text
                  style={{
                    ...theme.FONTS.H6,
                    color: theme.COLORS.mainDark,
                    textAlign: "right",
                  }}
                >
                  - {item.transactionAmount}
                </Text>
                <Text
                  style={{
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.6,
                    color: theme.COLORS.bodyTextColor,
                    textAlign: "right",
                  }}
                >
                  {item.transactionPercentage}%
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderBackground()}
      <SafeAreaView style={{flex: 1}}>
        {renderHeader()}
        {renderContent()}
      </SafeAreaView>
      {renderInfoModal()}
    </View>
  );
};

export default Statistics;
