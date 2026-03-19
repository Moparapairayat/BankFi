import {Text, ScrollView} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {theme} from "../constants";
import {components} from "../components";
import {svg} from "../svg";

const ForgotPassword = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Forgot Password" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 16 * 1.7,
            marginBottom: 20,
            marginTop: 30,
          }}
        >
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <components.InputField
          placeholder="cristinawolf@mail.com"
          containerStyle={{marginBottom: 14}}
          icon={<svg.CheckSvg />}
        />
        <components.Button
          title="Send"
          onPress={() => navigation.navigate("NewPassword")}
        />
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

export default ForgotPassword;
