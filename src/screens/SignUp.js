import {View, TouchableOpacity, Text, StatusBar} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const SignUp = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Sign up" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 20}}>
        <View style={{paddingTop: theme.SIZES.height * 0.05}}>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.H1,
              color: theme.COLORS.mainDark,
              marginBottom: 30,
            }}>
            Sign up!
          </Text>
          <components.InputField
            placeholder="Cristina Wolf"
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            placeholder="Enter your email"
            containerStyle={{marginBottom: 14}}
          />
          <components.InputField
            placeholder="Enter your password"
            secureTextEntry={true}
            containerStyle={{marginBottom: 14}}
            rightIcon={
              <TouchableOpacity>
                <svg.EyeOffSvg />
              </TouchableOpacity>
            }
          />
          <components.InputField
            placeholder="Enter your password"
            secureTextEntry={true}
            containerStyle={{marginBottom: 14}}
            rightIcon={
              <TouchableOpacity>
                <svg.EyeOffSvg />
              </TouchableOpacity>
            }
          />
          <components.Button
            title="Sign up"
            onPress={() => navigation.navigate("VerifyYourPhoneNumber")}
            containerStyle={{marginBottom: 30}}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
            }}>
            <Text
              style={{
                ...theme.FONTS.Mulish_400Regular,
                color: theme.COLORS.bodyTextColor,
                lineHeight: 16 * 1.6,
                fontSize: 16,
              }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  color: theme.COLORS.linkColor,
                  lineHeight: 16 * 1.6,
                  fontSize: 16,
                }}>
                Sign in.
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TouchableOpacity style={{marginHorizontal: 7}} onPress={() => {}}>
              <svg.FacebookSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 7}} onPress={() => {}}>
              <svg.TwitterSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 7}} onPress={() => {}}>
              <svg.GoogleSvg />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  const renderStatusBar = () => {
    return (
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderStatusBar()}
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default SignUp;
