import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {components} from "../components";
import {theme} from "../constants";
import {svg} from "../svg";

const latestFundTransfers = [
  {
    id: "1",
    name: `Krystal Meyers`,
    icon: require("../assets/users/02.png"),
  },
  {
    id: "2",
    name: `Krystal Meyers`,
    icon: require("../assets/users/03.png"),
  },
  {
    id: "3",
    name: `Krystal Meyers`,
    icon: require("../assets/users/04.png"),
  },
  {
    id: "4",
    name: `Krystal Meyers`,
    icon: require("../assets/users/05.png"),
  },
  {
    id: "5",
    name: `Krystal Meyers`,
    icon: require("../assets/users/06.png"),
  },
];

const cards = [
  {
    id: "1",
    icon: require("../assets/cards/06.png"),
    number: "**** **** **** 7895",
    balance: "4 863.27",
  },
  {
    id: "2",
    icon: require("../assets/cards/06.png"),
    number: "**** **** **** 7895",
    balance: "4 863.27",
  },
  {
    id: "3",
    icon: require("../assets/cards/06.png"),
    number: "**** **** **** 7895",
    balance: "4 863.27",
  },
];

const FundTransfer = () => {
  const [selectedCard, setSelectedCard] = useState("1");
  const [sendTo, setSendTo] = useState("1");

  const renderHeader = () => {
    return <components.Header title="Fund transfer" goBack={true} />;
  };

  const renderLatestFundTransfers = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 17,
          borderBottomColor: "#CED6E1",
          marginBottom: 14,
        }}
      >
        <View style={{marginBottom: 14, marginLeft: 20, marginTop: 14}}>
          <Text
            style={{
              ...theme.FONTS.H5,
              color: theme.COLORS.mainDark,
            }}
          >
            Latest fund transfers
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={{paddingLeft: 20}}
          showsHorizontalScrollIndicator={false}
        >
          {latestFundTransfers.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{width: 60, marginRight: 20}}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 60,
                    height: 60,
                    marginBottom: 4,
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    textAlign: "center",
                    ...theme.FONTS.Mulish_400Regular,
                    fontSize: 12,
                    lineHeight: 12 * 1.2,
                    color: theme.COLORS.bodyTextColor,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderUseCard = () => {
    return (
      <View style={{marginBottom: 14}}>
        <components.SmallHeader
          title="Use card"
          containerStyle={{marginBottom: 6, marginLeft: 20}}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
        >
          {cards.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 12,
                  width: 315,
                  backgroundColor: theme.COLORS.white,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 14,
                  borderWidth: 1,
                  borderColor:
                    selectedCard === item.id ? "#CED6E1" : theme.COLORS.white,
                }}
                key={index}
                onPress={() => setSelectedCard(item.id)}
              >
                <Image
                  source={require("../assets/cards/04.png")}
                  style={{
                    width: 72,
                    height: 46,
                    marginRight: 14,
                  }}
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
                    {item.number}
                  </Text>
                  <Text
                    style={{
                      ...theme.FONTS.H6,
                      color: theme.COLORS.mainDark,
                    }}
                  >
                    {item.balance} USD
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderSendMoney = () => {
    return (
      <View>
        <components.SmallHeader
          title="Send money to:"
          containerStyle={{marginBottom: 6, marginLeft: 20}}
        />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginBottom: 14,
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 23,
              backgroundColor: theme.COLORS.white,
              marginRight: 14,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              width: 315,
            }}
          >
            <Image
              source={require("../assets/other-icons/01.png")}
              style={{width: 16, height: 16, marginRight: 14}}
            />
            <TextInput placeholder="Enter card number" style={{flex: 1}} />
            <TouchableOpacity style={{marginLeft: "auto"}}>
              <Image
                source={require("../assets/other-icons/02.png")}
                style={{
                  width: 16,
                  height: 16,
                  marginLeft: 14,
                }}
              />
            </TouchableOpacity>
          </View>
          {cards.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 12,
                  width: 315,
                  backgroundColor: theme.COLORS.white,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 14,
                  borderWidth: 1,
                  borderColor:
                    sendTo === item.id ? "#CED6E1" : theme.COLORS.white,
                }}
                key={index}
                onPress={() => setSendTo(item.id)}
              >
                <Image
                  source={require("../assets/cards/04.png")}
                  style={{
                    width: 72,
                    height: 46,
                    marginRight: 14,
                  }}
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
                    {item.number}
                  </Text>
                  <Text
                    style={{
                      ...theme.FONTS.H6,
                      color: theme.COLORS.mainDark,
                    }}
                  >
                    {item.balance} USD
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              backgroundColor: theme.COLORS.white,
              width: "100%",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 13,
              marginBottom: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/other-icons/03.png")}
              style={{width: 16, height: 16, marginRight: 14}}
            />
            <TextInput placeholder="Amount" style={{flex: 1}} />
          </View>
          <View
            style={{
              backgroundColor: theme.COLORS.white,
              width: "100%",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 14,
              marginBottom: 6,
            }}
          >
            <TextInput
              placeholder="Comment"
              multiline={true}
              numberOfLines={7}
              style={{flex: 1, height: 120}}
              textAlignVertical="top"
            />
          </View>
          <components.SmallHeader
            title="Bank fee: $ 0.20"
            containerStyle={{marginBottom: 18}}
          />
        </View>
      </View>
    );
  };

  const renderButtons = () => {
    return (
      <components.Button
        title="Send"
        containerStyle={{paddingHorizontal: 20, marginBottom: 20}}
      />
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        {renderLatestFundTransfers()}
        {renderUseCard()}
        {renderSendMoney()}
        {renderButtons()}
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default FundTransfer;
