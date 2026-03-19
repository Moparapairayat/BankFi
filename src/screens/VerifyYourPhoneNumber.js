import {Image, Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {svg} from "../svg";
import {theme} from "../constants";
import {components} from "../components";

const VerifyYourPhoneNumber = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="Verify your phone number" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        <Text
          style={{
            marginTop: 30,
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 16 * 1.6,
            marginBottom: 20,
          }}
        >
          We have sent you an SMS with a code to number +17 0123456789.
        </Text>
        <components.InputField
          placeholder="+17 | 1234567890"
          containerStyle={{marginBottom: 14}}
          leftIcon={
            <Image
              source={{
                uri: "https://dl.dropbox.com/s/vp4fgjn76ok9ofm/01.jpg?dl=0",
              }}
              style={{width: 20.59, height: 14, marginRight: 6}}
            />
          }
          keyboardType="numeric"
        />
        <components.Button
          title="Confirm"
          onPress={() => navigation.navigate("ConfirmationCode")}
        />
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

export default VerifyYourPhoneNumber;
