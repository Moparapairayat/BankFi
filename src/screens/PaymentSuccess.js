import {Text, ScrollView, View, TouchableOpacity, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {components} from "../components";
import {theme} from "../constants";

const PaymentSuccess = ({navigation}) => {
  const renderBackground = () => {
    return (
      <View>
        <Image
          source={require("../assets/bg/05.png")}
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

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginTop: 190}}>
          <Image
            source={require("../assets/other-icons/21.png")}
            style={{width: 161, height: 150, alignSelf: "center"}}
          />
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.H2,
              color: theme.COLORS.green,
              marginBottom: 20,
            }}
          >
            Success!
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.Mulish_700Bold,
              fontSize: 22,
              color: theme.COLORS.mainDark,
              marginBottom: 20,
            }}
          >
            $ 364.00
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              color: theme.COLORS.bodyTextColor,
              marginBottom: theme.SIZES.height * 0.17,
            }}
          >
            Your payment has been {"\n"} processed!
          </Text>
          <View style={{marginHorizontal: 20}}>
            <TouchableOpacity
              style={{
                height: 50,
                width: "100%",
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#CED6E1",
                marginBottom: 14,
              }}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 14,
                  color: theme.COLORS.mainDark,
                }}
              >
                Send Receipt
              </Text>
            </TouchableOpacity>
          </View>

          <components.Button
            title="Done"
            containerStyle={{paddingHorizontal: 20}}
            onPress={() => navigation.navigate("TabNavigator")}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderBackground()}
      <SafeAreaView style={{flex: 1}}>{renderContent()}</SafeAreaView>
    </View>
  );
};

export default PaymentSuccess;
