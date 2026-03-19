import {Text, ScrollView, TouchableOpacity, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {components} from "../components";
import {theme} from "../constants";

const payments = [
  {
    id: "1",
    title: "Money transfer",
    icon: require("../assets/icons/09.png"),
  },
  {
    id: "2",
    title: "Mobile payment",
    icon: require("../assets/icons/10.png"),
  },
  {
    id: "3",
    title: "IBAN payment",
    icon: require("../assets/icons/11.png"),
  },
  {
    id: "4",
    title: "Utility bills",
    icon: require("../assets/icons/12.png"),
  },
  {
    id: "5",
    title: "Transport",
    icon: require("../assets/icons/13.png"),
  },
  {
    id: "6",
    title: "Insurance",
    icon: require("../assets/icons/14.png"),
  },
  {
    id: "7",
    title: "Penalties",
    icon: require("../assets/icons/15.png"),
  },
  {
    id: "8",
    title: "Charity",
    icon: require("../assets/icons/16.png"),
  },
];

const Payments = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Payments" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        {payments.map((item, index) => {
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
                marginTop: index === 0 ? 20 : 0,
                marginBottom: index === payments.length - 1 ? 20 : 6,
              }}
              onPress={() =>
                item.title === "Mobile payment"
                  ? navigation.navigate("MobilePayment")
                  : item.title === "IBAN payment"
                  ? navigation.navigate("IbanPayment")
                  : item.title === "Money transfer"
                  ? navigation.navigate("FundTransfer")
                  : null
              }
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

export default Payments;
