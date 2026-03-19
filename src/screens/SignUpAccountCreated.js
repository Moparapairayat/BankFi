import {View, ScrollView, Image, Text} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

import {theme} from "../constants";
import {components} from "../components";

const SignUpAccountCreated = ({navigation}) => {
  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Image
          source={require("../assets/bg-02.png")}
          style={{width: "100%", height: 530, position: "absolute"}}
        />
        <View
          style={{
            paddingTop: theme.SIZES.height * 0.2,
            paddingHorizontal: 20,
          }}>
          <Image
            source={require("../assets/account.png")}
            style={{
              width: 161,
              height: 111,
              alignSelf: "center",
              marginBottom: 30,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.H2,
              color: theme.COLORS.mainDark,
              marginBottom: 20,
            }}>
            Account created!
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.Mulish_400Regular,
              fontSize: 16,
              color: theme.COLORS.bodyTextColor,
              lineHeight: 16 * 1.6,
              marginBottom: theme.SIZES.height * 0.2,
            }}>
            Qui ex aute ipsum duis. Incididunt{"\n"}adipisicing voluptate
            laborum
          </Text>
          <components.Button
            title="Done"
            onPress={() => navigation.navigate("TabNavigator")}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default SignUpAccountCreated;
