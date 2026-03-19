import {Text, ScrollView, View, TouchableOpacity, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {components} from "../components";
import {theme} from "../constants";

const PaymentFailed = ({navigation}) => {
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
            source={require("../assets/other-icons/22.png")}
            style={{width: 161, height: 150, alignSelf: "center"}}
          />
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.H2,
              color: theme.COLORS.linkColor,
              marginBottom: 20,
            }}
          >
            Oops!
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
            Something went wrong. Please try{"\n"}again or contact the support
            team.
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
              onPress={() => navigation.navigate("TabNavigator")}
            >
              <Text
                style={{
                  ...theme.FONTS.Mulish_600SemiBold,
                  fontSize: 14,
                  color: theme.COLORS.mainDark,
                }}
              >
                Back to dashboard
              </Text>
            </TouchableOpacity>
          </View>

          <components.Button
            title="Try Again"
            containerStyle={{paddingHorizontal: 20}}
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

export default PaymentFailed;
