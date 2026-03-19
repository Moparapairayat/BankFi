import {View, Text, TouchableOpacity, StatusBar} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";

import {components} from "../components";
import {theme} from "../constants";

const ConfirmationCode = () => {
  const navigation = useNavigation();

  const renderStatusBar = () => {
    return (
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header title={"Verify your phone number"} goBack={true} />
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: 30,
            paddingBottom: 50,
          }}>
          <Text
            style={{
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              color: theme.COLORS.bodyTextColor,
              marginBottom: 30,
            }}>
            Enter your OTP code here.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 30,
            }}>
            <components.Number />
            <components.Number />
            <components.Number />
            <components.Number />
            <components.Number />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                fontSize: 16,
                lineHeight: 16 * 1.7,
                color: theme.COLORS.bodyTextColor,
              }}>
              Didn’t receive the OTP?{" "}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 16,
                  lineHeight: 16 * 1.7,
                  color: theme.COLORS.linkColor,
                }}>
                Resend.
              </Text>
            </TouchableOpacity>
          </View>
          <components.Button
            title="Confirm"
            containerStyle={{marginTop: 30}}
            onPress={() => navigation.navigate("SignUpAccountCreated")}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: theme.COLORS.bgColor, flex: 1}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default ConfirmationCode;
