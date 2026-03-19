import {Text, View, TouchableOpacity, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {components} from "../components";
import {theme} from "../constants";

const payments = [
  {
    id: "1",
    type: "Adalyn Roth",
    typeDescription: "Money transfer",
    amount: "- 140.00",
    date: "Today",
    topUp: false,
    sendTo: "Adalyn Roth",
    icon: require("../assets/icons/09.png"),
  },
  {
    id: "2",
    type: "Amazon",
    typeDescription: "Online payments",
    amount: "- 239.57",
    date: "Today",
    topUp: false,
    sendTo: "Amazon",
    icon: require("../assets/icons/23.png"),
  },
  {
    id: "3",
    type: "Paypal",
    typeDescription: "Deposits",
    amount: "+ 700.00",
    date: "Sep 10, 2022",
    topUp: true,
    sendTo: "Paypal",
    icon: require("../assets/icons/21.png"),
  },
  {
    id: "4",
    type: "ATM",
    typeDescription: "Cash withdrawal",
    amount: "- 1200.00",
    date: "Sep 10, 2022",
    topUp: false,
    sendTo: "ATM",
    icon: require("../assets/icons/24.png"),
  },
  {
    id: "5",
    type: "eBay",
    typeDescription: "Online payments",
    amount: "- 287.84",
    date: "Sep 10, 2022",
    topUp: false,
    sendTo: "eBay",
    icon: require("../assets/icons/25.png"),
  },
  {
    id: "6",
    type: "+17869871235",
    typeDescription: "Mobile payment",
    amount: "- 10.00",
    date: "Sep 5, 2022",
    topUp: false,
    sendTo: "+17869871235",
    icon: require("../assets/icons/10.png"),
  },
  {
    id: "7",
    type: "Maribel Farrell",
    typeDescription: "Money transfer",
    amount: "+ 568.00",
    date: "Sep 5, 2022",
    topUp: false,
    sendTo: "Maribel Farrell",
    icon: require("../assets/icons/09.png"),
  },
  {
    id: "8",
    type: "Electricity",
    typeDescription: "Utility bills",
    amount: "- 198.27",
    date: "Sep 5, 2022",
    topUp: false,
    icon: require("../assets/icons/12.png"),
  },
];

const date01 = payments.filter(item => item.date === "Today");
const date02 = payments.filter(item => item.date === "Sep 10, 2022");
const date03 = payments.filter(item => item.date === "Sep 5, 2022");

const TransactionHistory = ({item, navigation}) => {
  const TransactionItem = ({item, array, index}) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          height: 60,
          backgroundColor: theme.COLORS.white,
          borderRadius: 10,
          marginBottom: array.length - 1 === index ? 14 : 6,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
        onPress={() => navigation.navigate("TransactionDetails")}
      >
        <Image
          source={item.icon}
          style={{
            width: 40,
            height: 40,
            marginRight: 14,
          }}
        />
        <View style={{marginRight: "auto"}}>
          <Text
            style={{
              ...theme.FONTS.H6,
              color: theme.COLORS.mainDark,
            }}
          >
            {item.type}
          </Text>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 12,
              color: theme.COLORS.bodyTextColor,
            }}
          >
            {item.typeDescription}
          </Text>
        </View>
        <Text
          style={{
            ...theme.FONTS.H6,
            color: item.topUp ? theme.COLORS.green : theme.COLORS.mainDark,
          }}
        >
          {item.amount}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return <components.Header title="Transaction history" goBack={true} />;
  };

  const renderSearch = () => {
    return (
      <View style={{marginBottom: 14, marginTop: 20}}>
        <components.InputField
          placeholder="Search"
          rightIcon={
            <Image
              source={require("../assets/other-icons/04.png")}
              style={{width: 16, height: 16}}
            />
          }
        />
      </View>
    );
  };

  const renderHistory = () => {
    return (
      <View>
        <components.SmallHeader
          title="Today"
          containerStyle={{marginBottom: 6}}
        />
        {date01.map((item, index, array) => {
          return (
            <TransactionItem
              key={index}
              item={item}
              array={array}
              index={index}
            />
          );
        })}
        <components.SmallHeader
          title="Sep 10, 2022"
          containerStyle={{marginBottom: 6}}
        />
        {date02.map((item, index, array) => {
          return (
            <TransactionItem
              key={index}
              item={item}
              array={array}
              index={index}
            />
          );
        })}
        <components.SmallHeader
          title="Sep 5, 2022"
          containerStyle={{marginBottom: 6}}
        />
        {date03.map((item, index, array) => {
          return (
            <TransactionItem
              key={index}
              item={item}
              array={array}
              index={index}
            />
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
      >
        {renderSearch()}
        {renderHistory()}
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

export default TransactionHistory;
